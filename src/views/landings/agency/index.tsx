import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/agency/sections/Hero";
import Services from "@/views/landings/agency/sections/Services";
import Portfolio from "@/views/landings/agency/sections/Portfolio";
import Clients from "@/views/landings/agency/sections/Clients";
import Blogs from "@/views/landings/agency/sections/Blogs";
import Openings from "@/views/landings/agency/sections/Openings";
import Footer from "@/views/landings/agency/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | A Landing Page for an Agency"/>

            <div class="header-4">
                <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>

                <Hero/>
            </div>

            <Services/>

            <Portfolio/>

            <Clients/>

            <Blogs/>

            <Openings/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page