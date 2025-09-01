import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/help/sections/Hero";
import FAQs from "@/views/pages/help/sections/FAQs";
import Footer from "@/views/pages/help/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Get all Help"/>

            <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>

            <Hero/>

            <FAQs/>

            <Footer />

            <BackToTop />
        </>
    )
}

export default Page