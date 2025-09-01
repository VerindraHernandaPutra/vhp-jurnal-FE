import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/landings/crypto/sections/Hero";
import Coins from "@/views/landings/crypto/sections/Coins";
import Services from "@/views/landings/crypto/sections/Services";
import Integration from "@/views/landings/crypto/sections/Integration";
import Statistics from "@/views/landings/crypto/sections/Statistics";
import Footer from "@/views/landings/crypto/sections/Footer";
import BackToTop from "@/components/BackToTop";
import Blogs from "@/views/landings/crypto/sections/Blogs";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | Crypto Landing Page"/>

            <div class="header-1">
                <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-primary"/>
                <Hero/>
            </div>

            <Coins/>

            <Services/>

            <Integration/>

            <Statistics/>

            <Blogs/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page