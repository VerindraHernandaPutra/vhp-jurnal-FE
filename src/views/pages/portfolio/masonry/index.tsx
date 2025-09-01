import {Col, Container, Row} from "solid-bootstrap";
import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import MasonryGrid from "@/views/pages/portfolio/masonry/sections/MasonryGrid";
import Footer from "@/views/pages/portfolio/masonry/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt - Portfolio Masonry Example"/>

            <div>
                <NavBar linkContainerClass="ms-auto" buttonClass="btn-outline-secondary"/>

                <section class="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
                    <Container>
                        <Row class="justify-content-center">
                            <Col lg={7} class="text-center">
                                <h1 class="hero-title">Portfolio Masonry</h1>
                                <p class="fs-17 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                    aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

            <MasonryGrid/>

            <Footer/>

            <BackToTop/>
        </>
    )
}

export default Page