"use client";
import type { UserInfo } from "@/types/User";
import { supabase } from "@/utils/Database/supabase";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiRazorpay } from "react-icons/si";

declare global {
	interface Window {
		Razorpay: any;
	}
}

export default function Button({ user }: { user: UserInfo }) {
	const createOrderId = async () => {
		try {
			const response = await fetch("/api/payment/order", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ amount: 30 * 100, currency: "INR" }),
			});

			if (!response.ok) {
				throw new Error("Failed to create order ID");
			}

			const data = await response.json();
			return data.orderId;
		} catch (error) {
			console.error("Order ID Error:", error);
			return null;
		}
	};

	const processPayment = async () => {
		try {
			const orderId = await createOrderId();
			if (!orderId) {
				alert("Failed to create order. Please try again.");
				return;
			}

			const options = {
				key: process.env.NEXT_PUBLIC_RAZOR_KEY,
				amount: 30 * 100,
				currency: "INR",
				name: "ClassPro",
				description: `Supporting ClassPro - ${user.regNumber}`,
				order_id: orderId,
				handler: async function (response: any) {
					
					const data = {
						orderCreationId: orderId,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpayOrderId: response.razorpay_order_id,
						razorpaySignature: response.razorpay_signature,
					};

					if (!data.razorpaySignature) {
						console.error("Missing signature, possible failed or incomplete payment.");
						alert("Payment verification failed. Please contact support.");
						return;
					}

					console.log(data)
					const result = await fetch("/api/payment/verify", {
						method: "POST",
						body: JSON.stringify(data),
						headers: { "Content-Type": "application/json" },
					});

					const res = await result.json();

					if (res.success) {
						// await supabase.from("goscrape").update({
						// 	subscribed: true,
						// 	subscribedSince: Date.now(),
						// }).eq("regNumber", user.regNumber);

						alert("Payment successful!");
						window.location.reload();
					} else {
						alert(res.message || "Payment verification failed.");
					}
				},
				prefill: {
					name: user.name,
					phone: user.mobile,
				},
			};

			const paymentObject = new window.Razorpay(options);
			paymentObject.on("payment.failed", (response: any) => {
				console.error("Payment Failed:", response);
				alert(response.error.description);
			});
			paymentObject.open();
		} catch (error) {
			console.error("Payment Error:", error);
			alert("An error occurred during payment. Please try again.");
		}
	};

	return (
		<button
			onClick={processPayment}
			type="button"
			// disabled
			className="rounded-full flex group justify-between items-center w-full px-5 py-2 font-semibold bg-light-accent dark:bg-dark-accent text-light-background-light dark:text-dark-background-dark mt-6"
		>
			<div className="flex items-center justify-center gap-2">
				<SiRazorpay className="group-hover:text-base transition-all duration-150 text-[0px]" />
				<span>Support Me</span>
			</div>
			<FaArrowRightLong />
			{/* Temporarily Shut down */}
		</button>
	);
}
