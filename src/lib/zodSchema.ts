import z from "zod";

export const teacherSchema = z.object({
	firstName: z.string().min(3, { message: "Invalide Name" }),
	lastName: z.string().min(3, { message: "Invalide Titel" }),
	subject: z.string({ error: "Invalide Subject" }),
});
