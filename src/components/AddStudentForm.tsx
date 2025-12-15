"use client";

import { StudentFormType } from "@/lib/formType";
import { studentFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const AddStudentForm = () => {
	const { handleSubmit, control } = useForm({
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
		await new Promise<void>((r) => setTimeout(r, 2000));

		console.log(asData);
	};

	return <></>;
};

export default AddStudentForm;
