import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<form onSubmit={handleSubmit} method="POST">
				<button type="submit">Checkout</button>
			</form>
		</main>
	);
}
