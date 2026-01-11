import {
	MailIcon,
	MarsIcon,
	PhoneCallIcon,
	SquareUserIcon,
	TransgenderIcon,
	VenusIcon,
} from "lucide-react";
import Link from "next/link";
import { Prisma } from "../../generated/prisma/client";
import { Badge } from "./shadcnui/badge";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";
import DeleteStudentButton from "./DeleteStudentButton";

type StudentCardProps = {
	student: Prisma.StudentTableGetPayload<{
		include: {
			teacherTable: true;
		};
	}>;
};

const StudentCard = ({ student }: StudentCardProps) => {
	const {
		sId,
		sFullName,
		sEmail,
		sPhoneNumber,
		sGender,
		teacherTable: { tFullName, tSubject },
	} = student;

	return (
		<Card className="w-sm gap-2">
			<CardHeader>
				<CardTitle className="text-center text-3xl">
					{sGender === "male" ? "Mr." : sGender === "female" ? "Ms." : null}{" "}
					{sFullName}
				</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent className="grid place-items-center gap-4 text-lg">
				<div className="flex items-center gap-2">
					<MailIcon />
					<span className="col-span-2 place-self-start">{sEmail}</span>
				</div>

				<div className="flex gap-6">
					<div className="flex items-center gap-2">
						<PhoneCallIcon />
						+91 {sPhoneNumber}
					</div>

					<div className="flex items-center justify-center gap-2">
						{sGender === "male" && (
							<>
								<MarsIcon /> Male
							</>
						)}
						{sGender === "female" && (
							<>
								<VenusIcon /> Female
							</>
						)}
						{sGender === "others" && (
							<>
								<TransgenderIcon /> Others
							</>
						)}
					</div>
				</div>

				<div className="flex items-center gap-2">
					<SquareUserIcon />
					<span>{tFullName}</span>
					<Badge className="capitalize">{tSubject}</Badge>
				</div>
			</CardContent>

			<Separator />

			<CardFooter className="grid grid-cols-2 gap-4">
				<DeleteStudentButton sId={sId} />

				<Link href={`/student/${sId}`}>
					<Button
						variant={"secondary"}
						className="w-full cursor-pointer">
						Update
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default StudentCard;
