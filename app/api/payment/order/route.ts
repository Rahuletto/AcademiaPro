import Razorpay from "razorpay";
import { type NextRequest, NextResponse } from "next/server";

const razorpay = new Razorpay({
	key_id: process.env.RAZOR_KEY ?? "",
	key_secret: process.env.RAZOR_SECRET ?? "",
});

export async function POST(request: NextRequest) {
	const { amount, currency } = (await request.json()) as {
		amount: string;
		currency: string;
	};

	const order = await razorpay.orders.create({
		amount: amount,
		currency: currency,
		receipt: "rcp1",
	});
	return NextResponse.json({ orderId: order.id }, { status: 200 });
}
