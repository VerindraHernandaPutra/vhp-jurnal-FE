import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/portfolio/item/sections/Hero";
import Details from "@/views/pages/portfolio/item/sections/Details";
import Testimonials from "@/views/pages/portfolio/item/sections/Testimonials";
import Navigation from "@/views/pages/portfolio/item/sections/Navigation";
import Footer from "@/views/pages/portfolio/item/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Portfolio Item"/>

            <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>

            <Hero/>

            <Details/>

            <Testimonials/>

            <Navigation/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page