"use server";

import prisma from "@/lib/db";
import { StudentFormType } from "@/lib/formType";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import sharp from "sharp";
import { Prisma } from "../../generated/prisma/client";

const createStudent = async (asData: StudentFormType, file: File) => {
	try {
		const fileArrayBuffer = await file.arrayBuffer();

		const imageName = `${nanoid()}.jpeg`;

		await sharp(fileArrayBuffer)
			.resize({
				width: 250,
				height: 250,
			})
			.jpeg({
				quality: 87,
				mozjpeg: true,
			})
			.toFile(`./public/uploads/${imageName}`);

		await prisma.studentTable.create({
			data: asData,
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

export default createStudent;
