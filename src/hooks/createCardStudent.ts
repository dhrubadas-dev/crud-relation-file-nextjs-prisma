"use server";

import prisma from "@/lib/db";
import { StudentFormType } from "@/lib/formType";
import { revalidatePath } from "next/cache";

const createCardStudent = async ({
	sFullName,
	sEmail,
	sGender,
	sPhoneNumber,
	teacherTableTId,
}: StudentFormType) => {
	try {
		await prisma.studentTable.create({
			data: {
				sFullName,
				sEmail,
				sGender,
				sPhoneNumber,
				teacherTableTId,
			},
		});

		revalidatePath("/", "layout");
	} catch (error) {
		console.log(error);
	}
};

export default createCardStudent;
