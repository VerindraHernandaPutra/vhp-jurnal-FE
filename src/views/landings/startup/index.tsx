import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/startup/sections/Hero";
import Clients from "@/views/landings/startup/sections/Clients";
import Features from "@/views/landings/startup/sections/Features";
import Integrations from "@/views/landings/startup/sections/Integrations";
import Pricing from "@/views/landings/startup/sections/Pricing";
import Footer from "@/views/landings/startup/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Startup Landing Page"/>

            <div class="header-7">
                <NavBar linkContainerClass="mx-auto" buttonClass="btn-secondary"/>

                <Hero/>

            </div>

            <Clients/>

            <Features/>

            <Integrations/>

            <Pricing/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page