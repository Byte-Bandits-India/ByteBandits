'use client';
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

export default function Button({
    label = "Let's get started",
    link = "/",
    bgColor = "#F9373A",
    textColor = "#FFFFFF",
    width = "218px",
    height = "54px",
    radius = "12px",        // ✅ New prop
    icon = true,
    className = "",
}) {
    const isExternal = link.startsWith("http");

    const buttonClasses = clsx(
        "flex items-center justify-center gap-2 font-medium transition-all duration-200",
        "hover:opacity-90 active:scale-95",
        className
    );

    const style = {
        backgroundColor: bgColor,
        color: textColor,
        width,
        height,
        borderRadius: radius,  // ✅ applied here
    };

    const ButtonContent = (
        <>
            {label}
            {icon && <IoIosArrowForward className="text-[20px]" />}
        </>
    );

    return isExternal ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
            className={buttonClasses}
        >
            {ButtonContent}
        </a>
    ) : (
        <Link href={link} style={style} className={buttonClasses}>
            {ButtonContent}
        </Link>
    );
}
