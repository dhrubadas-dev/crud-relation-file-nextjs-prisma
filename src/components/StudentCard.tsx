import {
	MailIcon,
	MarsIcon,
	PhoneCallIcon,
	SquareUserIcon,
} from "lucide-react";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";

const StudentCard = () => {
	return (
		<Card className="w-sm gap-2">
			<CardHeader>
				<CardTitle className="text-center text-3xl">
					{/* {asData.sFullName} */}
					Dhruba Das
				</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent className="grid place-items-center gap-4 text-lg">
				<div className="flex gap-2">
					<MailIcon />
					<span className="col-span-2 place-self-start">Email</span>
				</div>

				<div className="flex gap-6">
					<div className="flex gap-2">
						<PhoneCallIcon />
						+91 254574254
					</div>
					<div className="flex gap-2">
						<MarsIcon /> Male
					</div>
				</div>

				<div className="flex gap-2">
					<SquareUserIcon />
					Teacher Name
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
