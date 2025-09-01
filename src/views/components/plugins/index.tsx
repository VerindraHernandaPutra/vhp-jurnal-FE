import {Container} from "solid-bootstrap";
import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import AOS from "@/views/components/plugins/sections/AOS";
import CountUp from "@/views/components/plugins/sections/CountUp";
import Jarallax from "@/views/components/plugins/sections/Jarallax";
import Glightbox from "@/views/components/plugins/sections/Glightbox";
import SwiperPlugin from "@/views/components/plugins/sections/SwiperPlugin";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | UI Plugins"/>

            <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-primary"/>

            <section class="py-4 bg-light">
                <Container>
                    <AOS/>
                    <CountUp/>
                    <Jarallax/>
                    <Glightbox/>
                    <SwiperPlugin/>
                </Container>
            </section>
        </>
    )
}

export default Page