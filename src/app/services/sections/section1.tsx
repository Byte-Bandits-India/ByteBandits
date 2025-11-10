export default function HeroSection() {
    return (
        <>
            <div className="overflow-x-hidden bg-white h-screen text-center flex items-center justify-center px-4 relative">
                {/* Background Overlay to Hide Fixed Background */}
                <div className="absolute inset-0 bg-white z-10"></div>

                {/* Content with higher z-index */}
                <div className="relative z-20">
                    <h1 className="text-[clamp(20px,6vw,67px)] font-medium leading-[1.1] font-inter max-w-[959px]">
                        We revolutionize how businesses build, scale, and connect through technology.
                    </h1>
                </div>
            </div>
        </>
    );
}