import BlogContentPage from "./sections/BlogsContentPage";

const BlogSection = () => {


    return (
        <section className="">
            <div className="h-dvh w-full border-[2px] border-white rounded-[20px] overflow-hidden bg-[url('/images/blog/blog-hero.webp')] bg-cover bg-center">
                <div className="flex items-end h-dvh">
                    <div className="relative w-full h-full max-h-[153px]">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 z-0"></div>

                        {/* Text */}
                        <h1 className="relative z-10 text-[clamp(20px,8vw,44px)] max-w-[1440px] mx-auto leading-[60px] md:leading-[70px] lg:leading-[85px] xl:leading-[120px] font-[anton] tracking-tight text-white text-left flex h-full px-4">
                            10 UI Mistakes Beginners Make And How to Fix Them
                        </h1>
                    </div>
                </div>
            </div>

            <div>
                <BlogContentPage />
            </div>

        </section>

    );
};

export default BlogSection;
