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
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount: 30 * 100,
					currency: "INR",
				}),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			return data.orderId;
		} catch (error) {
			console.error("There was a problem with your fetch operation:", error);
		}
	};

	const processPayment = async () => {
		try {
			const orderId: string = await createOrderId();
			const options = {
				amount: 30 * 100,
				currency: "INR",
				name: "ClassPro",
				description: `Supporting ClassPro - ${user.regNumber}`,
				order_id: orderId,
				handler: async (response: any) => {
					const data = {
						orderCreationId: orderId,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpayOrderId: response.razorpay_order_id,
						razorpaySignature: response.razorpay_signature,
					};

					const result = await fetch("/api/payment/verify", {
						method: "POST",
						body: JSON.stringify(data),
						headers: { "Content-Type": "application/json" },
					});
					const res = await result.json();
					if (res.success) {
						supabase
							.from("goscrape")
							.update({
								subscribed: res.success,
								subscribedSince: Date.now(),
							})
							.eq("regNumber", user.regNumber)
							.then((a) => {
								alert("Payment success!");
							});
					} else {
						alert(res.message);
					}
				},
				prefill: {
					name: user.name,
					phone: user.mobile,
				},
			};
			const paymentObject = new window.Razorpay(options);
			paymentObject.on("payment.failed", (response: any) => {
				alert(response.error.description);
			});
			paymentObject.open();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<button
			onClick={processPayment}
			type="button"
			className="rounded-full flex group justify-between items-center w-full px-5 py-2 font-semibold bg-light-accent dark:bg-dark-accent text-light-background-light dark:text-dark-background-dark mt-6"
		>
			<div className="flex items-center justify-center gap-2">
				<SiRazorpay className="group-hover:text-base transition-all duration-150 text-[0px]" />
				<span>Support Me</span>
			</div>{" "}
			<FaArrowRightLong />
		</button>
	);
}
