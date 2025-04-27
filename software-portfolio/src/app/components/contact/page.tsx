'use client'
import { useState } from "react";
import Image from "next/image";
import { ProjectList } from "../../../../lib/project";
import { Project } from "../../../../lib/project";
import { contactSchema } from "../../../../lib/validaton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * TODO
 * Add Zod for validation
 * Make a component for the form and it's functionality
 * 
 */

type ContactData = z.infer<typeof contactSchema>;

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, } = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        }
    })

    const handleContact = (data: ContactData) => {
        console.log(data);
        console.log("Yatta");
    }

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-extraLarge font-semibold ">Contact</h1>
        <form className="w-full flex flex-col gap-16" onSubmit={handleSubmit(handleContact)}>
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <label htmlFor="first-name" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">First Name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none text-center"
                        {...register("firstName")}
                    />
                    {errors?.firstName && (
                        <p className="text-error text-small font-(family-name:--font-noto-sans) font-bold">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <label htmlFor="last-name" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">Last Name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none text-center"
                        {...register("lastName")}
                    />
                    {errors?.lastName && (
                        <p className="text-error text-small font-(family-name:--font-noto-sans) font-bold">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <label htmlFor="email" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none text-center w-full"
                    {...register("email")}
                />
                {errors?.email && (
                    <p className="text-error text-small font-(family-name:--font-noto-sans) font-bold">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <label htmlFor="message" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">Message</label>
                <input 
                    type="text" 
                    id="message" 
                    className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none w-full text-wrap"
                    {...register("message")}
                />
                {errors?.message && (
                    <p className="text-error text-small font-(family-name:--font-noto-sans) font-bold">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <button className="text-quaternary bg-secondary rounded-3xl px-lg-button-horizontal py-lg-button-vertical cursor-pointer" type="submit">Send Message</button>
        </form>
    </div>
  );
}
