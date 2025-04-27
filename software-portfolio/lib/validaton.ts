import * as z from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(1, { message: "Must contain a first name" }).max(50, { message: "First name must be less than 50 characters" }),
    lastName: z.string().min(1, { message: "Must contain a last name" }).max(50, { message: "Last name must be less than 50 characters" }),
    email: z.string().min(1, { message: "Must contain an email"}).email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Must contain a message" }).max(2000, { message: "Message must be less than 2000 characters" }),
})