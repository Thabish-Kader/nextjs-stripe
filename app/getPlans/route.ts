import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: "2022-11-15",
	});
	const plans = await stripe.prices.list();

	return NextResponse.json(plans.data);
}
