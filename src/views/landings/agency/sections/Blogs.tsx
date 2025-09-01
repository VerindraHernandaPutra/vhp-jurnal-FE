import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import BlogCard from "@/views/landings/agency/components/BlogCard";
import {blogs} from "@/views/landings/agency/data";


const Blogs = () => {
    return (
        <section class="section pt-lg-8 pt-6 pb-5 position-relative">
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-success px-2 py-1">Blog</span>
                        <h1 class="display-5 fw-semibold">Interesting Articles</h1>
                    </Col>
                </Row>
                <Row class="mt-5">
                    <For each={blogs}>
                        {
                            (blog) =>
                                <Col md={4}>
                                    <BlogCard blog={blog}/>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Blogs