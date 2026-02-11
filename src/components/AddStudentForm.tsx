"use client";

import fakerGenerator from "@/hooks/fakerGenerator";
import { StudentFormType } from "@/lib/formType";
import { studentFormSchema } from "@/lib/zodSchema";
import createStudent from "@/server/createStudent";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUpIcon, Loader2Icon, SendIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";
import { TeacherTable } from "../../generated/prisma/client";
import { Button } from "./shadcnui/button";
import { CardContent, CardFooter } from "./shadcnui/card";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";
import { Separator } from "./shadcnui/separator";

type StudentFormProps = {
	teachersInfo: TeacherTable[];
};

const AddStudentForm = ({ teachersInfo }: StudentFormProps) => {
	const [isGenerating, setIsGenerating] = useState(false);
	const [myImage, setMyImage] = useState(false);

	const { push } = useRouter();

	const { openFilePicker, filesContent, plainFiles } = useFilePicker({
		multiple: false,
		accept: "image/*",
		readAs: "DataURL",
		onFilesSuccessfullySelected: () => setMyImage(true),
		onClear: () => setMyImage(false),
	});

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
		setValue,
		clearErrors,
	} = useForm({
		resolver: zodResolver(studentFormSchema),
		defaultValues: {
			sFullName: "",
			sEmail: "",
			sGender: "",
			sPhoneNumber: "",
			teacherTableTId: "",
		},
		mode: "all",
	});

	const addStudentHandler = async (asData: StudentFormType) => {
		const { isSuccess, message } = await createStudent(asData, plainFiles[0]);

		await new Promise<void>((r) => setTimeout(r, 1000));

		if (isSuccess) {
			toast.success(message);

			reset();

			push("/");
		} else {
			toast.error(message);
		}
	};

	const generateStudent = async () => {
		setIsGenerating(true);

		const { fullName, email, sex, phoneNumber } = fakerGenerator();

		await new Promise<void>((r) => setTimeout(r, 1000));

		// console.log(fullName);

		setValue("sFullName", fullName);
		setValue("sEmail", email);
		setValue("sGender", sex);
		setValue("sPhoneNumber", phoneNumber);

		clearErrors();

		setIsGenerating(false);
	};

	return (
		<>
			<CardContent className="pb-3">
				<div className="grid cursor-pointer place-items-center pb-4">
					{!myImage && (
						<button
							type="button"
							onClick={openFilePicker}
							className="bg-background/50 grid h-[250px] w-[250px] cursor-pointer place-items-center rounded-2xl">
							<ImageUpIcon size={120} />
						</button>
					)}

					{filesContent.map((file, index) => (
						
							<Image
								key={index}
								// src={"https://placehold.co/250.png"}
								src={file.content}
								alt={file.name}
								width={250}
								height={250}
								className="h-[250px] w-[250px] rounded-2xl"
							/>
						
					))}
				</div>

				<form
					onSubmit={handleSubmit(addStudentHandler)}
					className="grid grid-cols-2 gap-4"
					noValidate>
					<Controller
						name="sFullName"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
								<Input
									{...field}
									id={field.name}
									placeholder="Enter your full name"
									aria-invalid={fieldState.invalid}
									autoComplete="name"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="sEmail"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="email"
									placeholder="Enter your Email"
									aria-invalid={fieldState.invalid}
									autoComplete="email"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="sPhoneNumber"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="number"
									placeholder="Enter your phone number"
									aria-invalid={fieldState.invalid}
									autoComplete="cc-number"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="sGender"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Gender</FieldLabel>
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}>
									<SelectTrigger
										id={field.name}
										aria-invalid={fieldState.invalid}>
										<SelectValue placeholder="Select your Gender" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										<SelectItem value="male">Male</SelectItem>
										<SelectItem value="female">Female</SelectItem>
										<SelectItem value="others">Others</SelectItem>
									</SelectContent>
								</Select>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="teacherTableTId"
						control={control}
						render={({ field, fieldState }) => (
							<Field
								className="col-span-2"
								data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Teacher</FieldLabel>
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}>
									<SelectTrigger
										id={field.name}
										aria-invalid={fieldState.invalid}>
										<SelectValue placeholder="Select your Teacher" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										{teachersInfo.map(({ tId, tFullName, tSubject }) => (
											<SelectItem
												key={tId}
												value={tId}>
												{tFullName}
												<span className="capitalize">({tSubject})</span>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Button
						className="col-span-2 cursor-pointer"
						type="submit"
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2Icon className="animate-spin" /> Submitting..
							</>
						) : (
							<>
								<SendIcon /> Submit
							</>
						)}
					</Button>
				</form>
			</CardContent>

			<Separator />

			<CardFooter className="grid pt-3">
				<Button
					type="button"
					className="cursor-pointer"
					onClick={generateStudent}
					disabled={isGenerating}>
					{isGenerating ? (
						<>
							<SparklesIcon className="animate-bounce" /> Generating..
						</>
					) : (
						<>
							<SparklesIcon /> Generate
						</>
					)}
				</Button>
			</CardFooter>
		</>
	);
};

export default AddStudentForm;
