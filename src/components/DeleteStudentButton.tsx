"use client";

import deleteStudent from "@/server/deleteStudent";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";

type DeleteButtonProps = {
	sId: string;
};

const DeleteStudentButton = ({ sId }: DeleteButtonProps) => {
	const [loading, setLoading] = useState(false);

	const deleteStudentHandeler = async () => {
		setLoading(true);

		await new Promise((r) => setTimeout(r, 2000));

		const { isSuccess, message } = await deleteStudent(sId);

		if (!isSuccess) {
			toast.error(message);
		}

		if (isSuccess) {
			toast.success(message);
		}

		setLoading(false);
	};

	return (
		<Button
			variant={"destructive"}
			className="cursor-pointer"
			onClick={deleteStudentHandeler}
			disabled={loading}>
			{loading ? (
				<>
					<LoaderIcon className="animate-spin" /> Deleting..
				</>
			) : (
				<>
					<Trash2Icon /> Delete
				</>
			)}
		</Button>
	);
};

export default DeleteStudentButton;
