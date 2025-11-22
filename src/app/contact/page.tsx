import React from "react";
import { Metadata } from "next";
import Contact from "./sections/contact";

export const metadata: Metadata = {
    title: "Contact Us | Byte Bandits",
    description:
        "Have a project in mind? Get in touch with Byte Bandits for custom software, mobile apps, branding, and cloud services.",
    openGraph: {
        title: "Contact Us | Byte Bandits",
        description:
            "Have a project in mind? Get in touch with Byte Bandits for custom software, mobile apps, branding, and cloud services.",
        url: "https://bytebandits.com/contact",
        type: "website",
    },
};

export default function Home() {

    return (
        <>
            <Contact />
        </>

    );
}
