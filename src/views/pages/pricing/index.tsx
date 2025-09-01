import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/pricing/sections/Hero";
import Plans from "@/views/pages/pricing/sections/Plans";
import Benefits from "@/views/pages/pricing/sections/Benefits";
import FAQs from "@/views/pages/pricing/sections/FAQs";
import CTA from "@/views/pages/pricing/sections/CTA";
import Footer from "@/views/pages/pricing/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Pricing Page"/>

            <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>

            <Hero/>

            <Plans/>

            <Benefits />

            <FAQs/>

            <CTA />

            <Footer />

            <BackToTop />
        </>
    )
}

export default Page