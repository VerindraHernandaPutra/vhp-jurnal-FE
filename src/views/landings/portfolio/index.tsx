import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/portfolio/sections/Hero";
import Services from "@/views/landings/portfolio/sections/Services";
import Projects from "@/views/landings/portfolio/sections/Projects";
import Testimonials from "@/views/landings/portfolio/sections/Testimonials";
import CTA from "@/views/landings/portfolio/sections/CTA";
import Footer from "@/views/landings/portfolio/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Portfolio"/>

            <div class="header-6">
                <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-secondary"/>
                <Hero/>
            </div>

            <Services/>

            <Projects/>

            <Testimonials/>

            <CTA/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page