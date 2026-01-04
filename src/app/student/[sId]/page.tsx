import EditStudentForm from "@/components/EditStudentForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Update Student | User CURD App",
	description: "Update student page of User CURD App",
};

type EditPageProps = {
	params: Promise<{ sId: string }>;
};

const page = async ({ params }: EditPageProps) => {
	const { sId } = await params;

	const studentData = await prisma.studentTable.findUniqueOrThrow({
		where: {
			sId: sId,
		},
	});

	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Edit Student Form
					</CardTitle>
				</CardHeader>

				<CardContent>
					<EditStudentForm studata={studentData} />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
