"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const deleteStudent = async (sId: string) => {
	try {
		await prisma.studentTable.delete({
			where: {
				sId,
			},
		});

		revalidatePath("/", "layout");

		return {
			isSuccess: true,
			message: "User Deleted!",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User Deletetion failed!",
		};
	}
};

export default deleteStudent;
