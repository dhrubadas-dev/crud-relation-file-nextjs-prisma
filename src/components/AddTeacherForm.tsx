"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { teacherFormSchema } from "@/lib/zodSchema";
import { TeacherFormType } from "@/lib/formType";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AddTeacherForm = () => {
	const { handleSubmit, control } = useForm({
		resolver: zodResolver(teacherFormSchema),
		defaultValues: {
			tFullName: "",
			tSubject: "",
		},
		mode: "all",
	});

	const addteacherhandler = async (atData: TeacherFormType) => {
		await new Promise<void>((r) => setTimeout(r, 2000));

		console.log(atData);
	};

	return (
		<form
			onSubmit={handleSubmit(addteacherhandler)}
			className="grid gap-4"
			noValidate>
			<Controller
				name="tFullName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your full name"
							autoComplete="name"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="tSubject"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Subject Name</FieldLabel>
						<Controller
							name="tFullName"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
									<Select
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}>
										<SelectTrigger
											id={field.name}
											aria-invalid={fieldState.invalid}>
											<SelectValue placeholder="Select Subject" />
										</SelectTrigger>
										<SelectContent position="item-aligned">
											<SelectItem value="bengali">Bengali</SelectItem>
											<SelectItem value="english">English</SelectItem>
											<SelectItem value="math">Math</SelectItem>
											<SelectItem value="history">History</SelectItem>
										</SelectContent>
									</Select>

									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
		</form>
	);
};

export default AddTeacherForm;
