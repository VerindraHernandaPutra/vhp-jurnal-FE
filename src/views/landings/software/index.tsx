import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/software/sections/Hero";
import Clients from "@/views/landings/software/sections/Clients";
import Features from "@/views/landings/software/sections/Features";
import Pricing from "@/views/landings/software/sections/Pricing";
import Testimonials from "@/views/landings/software/sections/Testimonials";
import Footer from "@/views/landings/software/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Software Landing Page"/>

            <div class="header-2">
                <NavBar linkContainerClass="mx-auto" buttonClass="btn-primary"/>

                <Hero/>
            </div>

            <Clients/>

            <Features/>

            <Pricing/>

            <Testimonials/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page