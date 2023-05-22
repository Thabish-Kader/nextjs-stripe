import { Plans } from "@/components/Plans";

export default async function Home() {
	return (
		<main className="h-screen flex flex-col justify-center items-center">
			<Plans />
		</main>
	);
}
