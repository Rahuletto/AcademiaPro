import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const generatedSignature = (
    razorpayOrderId: string,
    razorpayPaymentId: string
) => {
    const keySecret = process.env.RAZOR_SECRET;
    if (!keySecret) {
        throw new Error(
            'Razorpay key secret is not defined in environment variables.'
        );
    }
    // Create signature string in correct format
    const signatureString = `${razorpayOrderId}|${razorpayPaymentId}`;
    const sig = crypto
        .createHmac('sha256', keySecret)
        .update(signatureString)
        .digest('hex');
    return sig;
};

export async function POST(request: NextRequest) {
    try {
        const data =
            await request.json();

        const obj = {
            orderCreationId: data?.orderCreationId,
            razorpayPaymentId: data?.razorpayPaymentId,
            razorpaySignature: data?.razorpaySignature
        }

        const { orderCreationId, razorpayPaymentId, razorpaySignature } = obj;
        console.log('Verification Data:', obj);

        const signature = generatedSignature(orderCreationId, razorpayPaymentId);

        const rpSig = razorpaySignature;

        if (signature !== rpSig) {
            return NextResponse.json(
                {
                    message: 'Payment Verification Failed',
                    success: false,
                    debug: {
                        generated: signature,
                        received: razorpaySignature
                    }
                },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: 'Payment Verified Successfully', success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Verification Error:', error);
        return NextResponse.json(
            { message: 'Verification Error', success: false, error: String(error) },
            { status: 500 }
        );
    }
}