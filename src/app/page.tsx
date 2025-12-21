import StudentCard from "@/components/StudentCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
		</section>
	);
};

export default page;
