import { type NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
// import { supabase } from "@/utils/Database/supabase";
// import { cookies } from "next/headers";
// import { encode } from "@/utils/Cookies";

const generatedSignature = (
	razorpayOrderId: string,
	razorpayPaymentId: string,
) => {
	const keySecret = process.env.RAZOR_SECRET;
	if (!keySecret) {
		throw new Error(
			"Razorpay key secret is not defined in environment variables.",
		);
	}
	const sig = crypto
		.createHmac("sha256", keySecret)
		.update(`${razorpayOrderId}|${razorpayPaymentId}`)
		.digest("hex");
	return sig;
};

export async function POST(request: NextRequest) {
	// const cookie = await cookies();
	// const key = cookie.get("key")?.value ?? "";

	const { orderCreationId, razorpayPaymentId, razorpaySignature } =
		await request.json();

	const signature = generatedSignature(orderCreationId, razorpayPaymentId);
	if (signature !== razorpaySignature) {
		return NextResponse.json(
			{ message: "Payment failed!", success: false },
			{ status: 400 },
		);
	}

	// const { error } = await supabase
	// 	.from("goscrape")
	// 	.update({ subscribed: true, subscribedSince: Date.now() })
	// 	.eq("token", encode(key));

	// if (error) {
	// 	return Response.json(
	// 		{ error: error.message },
	// 		{
	// 			status: 400,
	// 		},
	// 	);
	// }

	return NextResponse.json(
		{ message: "Payment verified!", success: true },
		{ status: 200 },
	);
}
