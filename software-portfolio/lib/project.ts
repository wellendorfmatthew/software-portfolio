import { StaticImageData } from "next/image";
import ECOMMERCE_WEBSITE from "../public/ecommerce.png"
import PASSWORD_MANAGER_WEBSITE from "../public/pw-manager.png";

// Structure for containing bullet points
type Description = {
    description: string
}

// Structure for containing a projects name, image, and list of bullet points
export type Project = {
    name: string,
    image: StaticImageData,
    descriptions: Description[],
}

const firstBulletPoint: Description = { description: "Full Stack e-commerce application built with React, Node.js, and MongoDB" };
const secondBulletPoint: Description = { description: "Integrated payment processing via Stripe API and user authentication with JWT" };
const thirdBulletPoint: Description = { description: "Implemented SEO-optimized and responsive designs to improve user acquisition and engagement" };
const fourthBulletPoint: Description = { 
    description: "Built a secure password management tool using .NET and SQL Server, leveraging encrypted storage and advanced validation techniques." 
};
const fifthBulletPoint: Description = { description: "Created a user-friendly interface and reliable features to increase user adoption and trust." };
const ecommerceProject: Project = { name: "Ecommerce Website", image: ECOMMERCE_WEBSITE, descriptions: [firstBulletPoint, secondBulletPoint, thirdBulletPoint] };
const passwordManagerProject: Project = { name: "Password Manager", image: PASSWORD_MANAGER_WEBSITE, descriptions: [fourthBulletPoint, fifthBulletPoint] };

export const ProjectList: Project[] = [ecommerceProject, passwordManagerProject];