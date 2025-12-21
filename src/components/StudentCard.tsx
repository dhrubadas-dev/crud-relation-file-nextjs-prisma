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
				<CardTitle className="text-center text-3xl">Dhruba Das</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent className="grid place-items-center gap-4 text-lg">
				{/* <MailIcon />
				<span className="col-span-3 place-self-start">dhruba@gmail.com</span>
				<div className="grid">
					<div className="">
						<PhoneIcon />
						<span className="col-span-3 place-self-start">+91 6297781575</span>
					</div>
					<div className="">
						<MarsStrokeIcon />
						<span className="col-span-3 place-self-start"></span>
					</div>
				</div>
				<SquareUserRoundIcon />
				<span className="col-span-3 place-self-start">Teacher Name</span> */}
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
