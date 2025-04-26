import * as z from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(1, { message: "Must contain at least 1 character" }).max(50, { message: "Must contain less than 50 characters" }),
    lastName: z.string().min(1, { message: "Must contain at least 1 character" }).max(50, { message: "Must contain less than 50 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Must contain at least 1 character" }).max(2000, { message: "Must contain less than 2000 characters" }),
})