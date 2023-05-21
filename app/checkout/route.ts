import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

export async function POST(request: Request) {
	const stripe = loadStripe(process.env.STRIPE_SECRET_KEY!);
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: "T-shirt",
					},
					unit_amount: 2000,
				},
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: "http://localhost:4242/success",
		cancel_url: "http://localhost:4242/cancel",
	});
	return new Response(JSON.stringify({ sessionId: session.id }));
}
