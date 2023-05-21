"use client";
import getStripe from "@/utils/get-stripejs";
import { loadStripe } from "@stripe/stripe-js";
import { FormEvent } from "react";
import Stripe from "stripe";

export default function Home() {
	const handleCheckout = async (e: FormEvent) => {
		e.preventDefault();
		const res: any = await fetch("/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: 1000 }),
		});
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<form onSubmit={handleCheckout}>
				<button className="border p-2 rounded-lg">Checkout</button>
			</form>
		</main>
	);
}
