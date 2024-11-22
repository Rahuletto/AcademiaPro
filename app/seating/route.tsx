import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

const seatingUrl = process.env.SEATING_URL;

export async function POST(req: Request) {
  try {
    const formData = new URLSearchParams(await req.text());
    const date = formData.get("date");
    const reg_no = formData.get("reg_no");

    if (!date || !reg_no) {
      return NextResponse.json(
        { error: "Both 'date' and 'reg_no' fields are required." },
        { status: 400 }
      );
    }

    const externalFormData = new URLSearchParams();
    externalFormData.append("date", date);
    externalFormData.append("reg_no", reg_no);

    const response = await fetch(seatingUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: externalFormData.toString(),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const noResultsMessage = $("table tr:nth-child(2) td[colspan='7']").text().trim();
    if (noResultsMessage === "No results found") {
      return NextResponse.json({ message: "No results found for the given inputs." },{status:404});
    }

    const tableRow = $("table tr:nth-child(2)");
    const extractedData = {
      date: tableRow.find("td:nth-child(1)").text().trim(),
      session: tableRow.find("td:nth-child(2)").text().trim(),
      branch: tableRow.find("td:nth-child(3)").text().trim(),
      subjectCode: tableRow.find("td:nth-child(4)").text().trim(),
      registrationNumber: tableRow.find("td:nth-child(5)").text().trim(),
      venue: tableRow.find("td:nth-child(6)").text().trim(),
      seatNumber: tableRow.find("td:nth-child(7)").text().trim(),
    };

    return NextResponse.json(extractedData);
  } catch (error) {
    console.error("Error fetching seating data:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}