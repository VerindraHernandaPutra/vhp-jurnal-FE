import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/home/sections/Hero";
import Demos from "@/views/home/sections/Demos";
import Features from "@/views/home/sections/Features";
import CTA from "@/views/home/sections/CTA";
import Footer from "@/views/home/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta/>

            <div class="bg-gradient3">
                <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-primary"/>
                <Hero/>
            </div>

            <Demos/>

            <Features/>

            <CTA/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page