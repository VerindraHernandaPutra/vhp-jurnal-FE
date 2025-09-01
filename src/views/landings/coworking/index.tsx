import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/coworking/sections/Hero";
import About from "@/views/landings/coworking/sections/About";
import Features from "@/views/landings/coworking/sections/Features";
import WorkingSpace from "@/views/landings/coworking/sections/WorkingSpace";
import Testimonials from "@/views/landings/coworking/sections/Testimonials";
import Footer from "@/views/landings/coworking/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Co-Working Space Landing Page"/>

            <div class="header-5">
                <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-orange"/>
                <Hero/>
            </div>

            <About/>

            <Features/>

            <WorkingSpace/>

            <Testimonials/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page