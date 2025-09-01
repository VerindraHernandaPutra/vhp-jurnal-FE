import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/marketing/sections/Hero";
import Features from "@/views/landings/marketing/sections/Features";
import Testimonials from "@/views/landings/marketing/sections/Testimonials";
import Footer from "@/views/landings/marketing/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Marketing Landing Page"/>

            <div class="header-3">
                <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-primary"/>
                <Hero/>
            </div>

            <Features/>

            <Testimonials/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page