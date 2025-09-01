import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Hero from "@/views/pages/blog-post/sections/Hero";
import Details from "@/views/pages/blog-post/sections/Details";
import Navigation from "@/views/pages/blog-post/sections/Navigation";
import Comments from "@/views/pages/blog-post/sections/Comments";
import Footer from "@/views/pages/blog-post/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Blog Post"/>

            <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-secondary"/>

            <Hero/>

            <Details/>

            <Navigation/>

            <Comments/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page