import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/app/sections/Hero";
import Features from "@/views/landings/app/sections/Features";
import Testimonials from "@/views/landings/app/sections/Testimonials";
import CTA from "@/views/landings/app/sections/CTA";
import BackToTop from "@/components/BackToTop";
import Footer from "@/views/landings/app/sections/Footer";

const Page = () => {
    return (
        <>

            <PageMeta title="Prompt | Mobile Application Landing Page"/>

            <NavBar linkContainerClass="ms-auto" buttonClass="btn-orange"/>

            <Hero/>

            <Features/>

            <Testimonials/>

            <CTA/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page