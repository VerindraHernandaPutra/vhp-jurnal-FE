import {Card, Col, Row} from "solid-bootstrap";
import {BlogType} from "@/views/landings/agency/types";

import bottomShape from "@/assets/images/shapes/bottom.svg"
import {truncateString} from "@/helpers/casing";
import { basePath } from "@/helpers";

const BlogCard = ({blog}: { blog: BlogType }) => {
    return (
        <Card class="shadow" data-aos="fade-up" data-aos-duration="500">
            <div class="card-img-top-overlay">
                <div class="overlay"></div>
                <span class="card-badge top-right bg-secondary text-white">{blog.tag}</span>

                <div class="position-relative">
                    <img src={blog.image} alt="" class="card-img-top"/>


                </div>
            </div>
            <Card.Body>
                <div class="mt-2">
                    <Row class="align-items-center">
                        <Col class="col-auto">
                            <p class="mb-0"><span
                                class="fs-13 align-middle">{blog.publishedOn}</span></p>
                        </Col>
                    </Row>
                </div>

                <div class="mt-2">
                    <h4 class="">
                        <a href={basePath + blog.url} class="card-title-link">{blog.title}</a>
                    </h4>
                    <p class="text-muted mb-2">
                        {truncateString(blog.description, 85)}{" "}
                        <a href="">Read More</a>
                    </p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BlogCard;