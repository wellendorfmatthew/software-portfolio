'use client'
import { useState } from "react";
import Image from "next/image";
import { ProjectList } from "../../../../lib/project";
import { Project } from "../../../../lib/project";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-8">
        <h1 className="text-extraLarge font-semibold ">Contact</h1>
        <form className="w-full flex flex-col gap-16">
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <label htmlFor="first-name" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">First Name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none text-center"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <label htmlFor="last-name" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">Last Name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none text-center"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <label htmlFor="email" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none text-center w-full"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <label htmlFor="message" className="font-(family-name:--font-noto-sans) font-bold text-quaternary text-small">Message</label>
                <input 
                    type="text" 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-quaternary rounded-lg py-names-vertical px-names-horizontal text-quinary outline-none w-full text-wrap"
                />
            </div>
        </form>
    </div>
  );
}
