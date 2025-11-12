import ScrollReveal from "@/components/ui/ScrollReveal";
export default function HeroSection() {
    return (
        <>
            <div className="relative z-20 h-screen flex items-center justify-center text-center px-4">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={12}>
                    We revolutionize how businesses build, scale, and connect through technology.
                </ScrollReveal>
            </div>
        </>
    );
}