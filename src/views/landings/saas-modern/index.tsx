import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/saas-modern/sections/Hero";
import Features from "@/views/landings/saas-modern/sections/Features";
import Clients from "@/views/landings/saas-modern/sections/Clients";
import Testimonials from "@/views/landings/saas-modern/sections/Testimonials";
import Pricing from "@/views/landings/saas-modern/sections/Pricing";
import FAQs from "@/views/landings/saas-modern/sections/FAQs";
import Footer from "@/views/landings/saas-modern/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Saas Application Landing Page"/>

            <div class="header-2 primary">
                <NavBar linkContainerClass="mx-auto" buttonClass="btn-primary"/>

                <Hero/>
            </div>

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