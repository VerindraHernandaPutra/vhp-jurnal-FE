import {Col, Container, Row} from "solid-bootstrap";
import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Avatars from "@/views/components/custom/sections/Avatars";
import BlogItems from "@/views/components/custom/sections/BlogItems";
import Pricing from "@/views/components/custom/sections/Pricing";
import Icons from "@/views/components/custom/sections/Icons";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | UI Custom"/>

            <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-primary"/>

            <section class="py-4 bg-light">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Avatars/>
                            <BlogItems/>
                            <Pricing/>
                            <Icons/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Page