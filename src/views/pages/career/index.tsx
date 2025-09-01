import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/career/sections/Hero";
import Benefits from "@/views/pages/career/sections/Benefits";
import Culture from "@/views/pages/career/sections/Culture";
import Openings from "@/views/pages/career/sections/Openings";
import CTA from "@/views/pages/career/sections/CTA";
import Footer from "@/views/pages/career/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Career"/>

            <div class="bg-gradient2 position-relative">
                <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>
                <Hero/>
            </div>

            <Benefits/>

            <Culture/>

            <Openings/>

            <CTA/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page