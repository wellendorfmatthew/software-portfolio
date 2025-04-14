import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-11/12 flex flex-col gap-4 pt-4">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="font-main font-bold text-quaternary text-large">Matthew Wellendorf</Link>
        <div className="flex justify-center items-center gap-8">
            <Link href={"/"} className="font-main text-quaternary text-medium font-semibold">Home</Link>
            <Link href={"/"} className="font-main text-quaternary text-medium font-semibold">Skills</Link>
            <Link href={"/"} className="font-main text-quaternary text-medium font-semibold">Projects</Link>
        </div>
      </div>
      <hr className="w-full bg-quaternary h-0.5" />
    </div>
  );
}
