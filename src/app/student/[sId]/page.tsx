import EditStudentForm from "@/components/EditStudentForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
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

	const allTeachers = await prisma.teacherTable.findMany();

	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-sm gap-2">
				<CardHeader className="grid place-items-center">
					<CardTitle className="text-2xl">Edit Student Form</CardTitle>
				</CardHeader>

				<Separator />

				<EditStudentForm
					studata={studentData}
					teachersInfo={allTeachers}
				/>
			</Card>
		</section>
	);
};

export default page;
