"use server";

import prisma from "@/lib/db";
import { StudentFormType } from "@/lib/formType";
import { revalidatePath } from "next/cache";

const createStudent = async (asData: StudentFormType) => {
	try {
		await prisma.studentTable.create({
			data: asData,
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Student created successfully",
		};
	} catch (error) {
		// if (error instanceof Prisma.PrismaClientKnownRequestError) {
		// 	return {
		// 		isSuccess: false,
		// 		message: error.message,
		// 	};
		// }

		console.log(error);

		return {
			isSuccess: false,
			message: "Something went wrong!",
		};
	}
};

export default createStudent;
