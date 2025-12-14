import AddTeacherForm from "@/components/AddTeacherForm";
import { Button } from "@/components/shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Teacher | User CURD App",
	description: "Create teacher page of User CURD App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="grid place-items-center">
					<CardTitle className="text-2xl">Teacher Card</CardTitle>
				</CardHeader>
				<CardContent>
					<AddTeacherForm />
				</CardContent>
				<CardFooter className=""></CardFooter>
			</Card>
		</section>
	);
};

export default page;
