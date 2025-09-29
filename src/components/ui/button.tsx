import { IoIosArrowForward } from "react-icons/io";

export default function Button() {
    return (
        <>

            <button className="bg-[#F9373A] h-[54px] w-[218px] rounded-xl text-white flex items-center justify-center gap-2 px-4">
                Let&apos;s get started
                <IoIosArrowForward className="text-[20px]" />
            </button>
        </>
    )
}