"use server";

import prisma from "@/lib/db";
import { StudentFormType } from "@/lib/formType";
import { revalidatePath } from "next/cache";
import { Prisma } from "../../generated/prisma/client";

const updateStudent = async (asData: StudentFormType, sId: string) => {
	try {
		await prisma.studentTable.update({
			data: asData,
			where: {
				sId: sId,
			},
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Student created successfully",
		};
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			return {
				isSuccess: false,
				message: error.message,
			};
		}

		return {
			isSuccess: false,
			message: "Something went wrong!",
		};
	}
};

export default updateStudent;
