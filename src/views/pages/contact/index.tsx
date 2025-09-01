import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/contact/sections/Hero";
import ContactForm from "@/views/pages/contact/sections/ContactForm";
import Footer from "@/views/pages/contact/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Contact Us"/>

            <div class="header-7 bg-gradient2">
                <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-secondary"/>
                <Hero/>
            </div>

            <ContactForm/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page