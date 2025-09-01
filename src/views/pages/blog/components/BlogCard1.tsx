import {BlogType} from "@/views/pages/blog/data";
import {Card, Col, Row} from "solid-bootstrap";
import {truncateString} from "@/helpers/casing";
import { basePath } from "@/helpers";

const BlogCard1 = ({blog}: { blog: BlogType }) => {
    return (
        <Card class="shadow-none">
            <Row>
                <Col md={5}>
                    <img class="img-fluid rounded-sm" src={blog.image}
                         alt="post image"/>
                </Col>
                <Col md={7}>
                    <Card.Body class="d-flex flex-column h-100 py-0 ps-2 pe-3">
                        <a class="" href="#">
                            <span class={`badge badge-soft-${blog.variant} mb-1`}>{blog.category}</span>
                        </a>

                        <h3 class="mt-1 fw-semibold">
                            <a href={basePath + blog.url}>{blog.title}</a>
                        </h3>

                        <p class="text-muted">
                            {truncateString(blog.description, 80)}
                            <a href={basePath + blog.url} class="text-primary">read more</a>
                        </p>
                        {
                            blog.author &&
                            <div class="mt-auto">
                                <div class="d-flex">
                                    <img class="me-2 rounded-sm"
                                         src={blog.author.image} alt="" height="36"/>
                                    <div class="flex-grow-1">
                                        <h6 class="m-0 fs-13"><a href="">{blog.author.name}</a></h6>
                                        {
                                            blog.publishedAt && blog.readTime &&
                                            <p class="text-muted mb-0 fs-13">{blog.publishedAt} · {blog.readTime}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default BlogCard1