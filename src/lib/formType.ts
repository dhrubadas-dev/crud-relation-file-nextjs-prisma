import z from "zod";
import { teacherSchema } from "./zodSchema";

export type TeacherFormType = z.infer<typeof teacherSchema>;
