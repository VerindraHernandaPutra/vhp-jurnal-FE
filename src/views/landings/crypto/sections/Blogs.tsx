import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import BlogCard from "@/views/landings/crypto/components/BlogCard";
import {blogs} from "@/views/landings/crypto/data";

const Blogs = () => {
    return (
        <section class="position-relative py-xl-8 py-6 features-3">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-center">
                        <h1 class="display-5 fw-medium">Useful Reading</h1>
                        <p class="text-muted mx-auto">Few articles to read to know more about cryptocurrency</p>
                    </Col>
                </Row>
                <Row class="mt-5">
                    <For each={blogs}>
                        {
                            (blog) =>
                                <Col lg={4}>
                                    <BlogCard blog={blog}/>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Blogs;