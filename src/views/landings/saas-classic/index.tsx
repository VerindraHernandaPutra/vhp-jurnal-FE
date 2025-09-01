import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/saas-classic/sections/Hero";
import Features from "@/views/landings/saas-classic/sections/Features";
import Clients from "@/views/landings/saas-classic/sections/Clients";
import Testimonials from "@/views/landings/saas-classic/sections/Testimonials";
import Pricing from "@/views/landings/saas-classic/sections/Pricing";
import FAQs from "@/views/landings/saas-classic/sections/FAQs";
import Footer from "@/views/landings/saas-classic/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Saas Application Landing Page"/>

            <NavBar linkContainerClass="mx-auto" buttonClass="btn-primary"/>

            <Hero/>

            <Features/>

            <Clients/>

            <Testimonials/>

            <Pricing/>

            <FAQs/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page