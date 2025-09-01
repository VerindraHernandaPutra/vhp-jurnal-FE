import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/company/sections/Hero";
import About from "@/views/pages/company/sections/About";
import Features from "@/views/pages/company/sections/Features";
import Statistics from "@/views/pages/company/sections/Statistics";
import Team from "@/views/pages/company/sections/Team";
import Clients from "@/views/pages/company/sections/Clients";
import Footer from "@/views/pages/company/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - About Company"/>

            <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>

            <Hero/>

            <About/>

            <Features/>

            <Statistics/>

            <Team/>

            <Clients/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page