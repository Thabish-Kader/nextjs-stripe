"use client";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

const PlanCard = ({ plan }: { plan: TPlan }) => {
	const buyPlan = async (e: FormEvent) => {
		e.preventDefault();
		const { data } = await axios.post(
			"/checkout",
			{
				planId: plan.id,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		window.location.assign(data);
	};

	return (
		<div>
			<h1>{plan.nickname}</h1>
			<button onClick={buyPlan}>Buy</button>
		</div>
	);
};

export const Plans = () => {
	const [plans, setPlans] = useState<TPlan[]>([]);
	const fetchPlans = async () => {
		const { data } = await axios.get("/getPlans");
		setPlans(data);
	};

	useEffect(() => {
		fetchPlans();
	}, []);

	return (
		<div>
			{plans.map((plan: TPlan) => (
				<PlanCard key={plan.id} plan={plan} />
			))}
		</div>
	);
};
