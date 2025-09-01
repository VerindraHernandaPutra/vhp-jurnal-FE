import {Col, Container, Row} from "solid-bootstrap";
import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Listing from "@/views/pages/blog/sections/Listing";
import Footer from "@/views/pages/blog/sections/Footer";
import BackToTop from "@/components/BackToTop";

import heroImg from "@/assets/images/blog/hero.jpg"

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Blog"/>

            <div class="header-7" style={{background: `url(${heroImg}) no-repeat`}}>
                <div class="overlay"></div>

                <NavBar sticky={false} variant="dark" linkContainerClass="ms-auto" buttonClass="btn-white text-white"/>

                <section class="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
                    <Container>
                        <Row class="justify-content-center">
                            <Col lg={7} class="text-center position-relative">
                                <h1 class="hero-title text-white">Blog</h1>
                                <p class="mt-4 fs-17 text-white">Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur
                                    aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

            <Listing/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page