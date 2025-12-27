import {
	MailIcon,
	MarsIcon,
	PhoneCallIcon,
	SquareUserIcon,
} from "lucide-react";
import { StudentTable } from "../../generated/prisma/browser";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";

type StudentCardProps = {
	asData: StudentTable;
};

const StudentCard = ({ asData }: StudentCardProps) => {
	return (
		<Card className="w-sm gap-2">
			<CardHeader>
				<CardTitle className="text-center text-3xl">
					{asData.sFullName}
				</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent className="grid place-items-center gap-4 text-lg">
				<div className="flex gap-2">
					<MailIcon />
					<span className="col-span-2 place-self-start">{asData.sEmail}</span>
				</div>

				<div className="flex gap-6">
					<div className="flex gap-2">
						<PhoneCallIcon /> +91 {asData.sPhoneNumber}
					</div>
					<div className="flex gap-2">
						<MarsIcon /> {asData.sGender}
					</div>
				</div>

				<div className="flex gap-2">
					<SquareUserIcon /> {asData.teacherTableTId}
				</div>
			</CardContent>

			<Separator />

			<CardFooter className="grid grid-cols-2 gap-4">
				<Button
					variant={"destructive"}
					className="cursor-pointer">
					Delete
				</Button>

				<Button
					variant={"secondary"}
					className="cursor-pointer">
					Update
				</Button>
			</CardFooter>
		</Card>
	);
};

export default StudentCard;
