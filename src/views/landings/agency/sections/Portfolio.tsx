import {Col, Container, Row} from "solid-bootstrap";
import {FiArrowRight} from 'solid-icons/fi'
import {For} from "solid-js";
import {ProjectType} from "@/views/landings/agency/types";
import ProjectCard from "@/views/landings/agency/components/ProjectCard";
import {projects} from "@/views/landings/agency/data";
import {chunkArray} from "@/helpers/array";

const Portfolio = () => {
    return (
        <section class="section py-lg-5 py-4 mb-5 mb-sm-0 position-relative">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-success px-2 py-1">Latest</span>
                        <h1 class="display-5 fw-semibold">Featured Work</h1>
                        <p class="text-muted">Explore some of our latest website projects</p>
                    </Col>
                </Row>

                <For each={chunkArray<ProjectType>(projects, 2)}>
                    {
                        (item) =>
                            <Row class="features-6" data-aos="fade-up" data-aos-duration="600">
                                <For each={item}>
                                    {
                                        (project) =>
                                            <Col lg={6}>
                                                <ProjectCard project={project}/>
                                            </Col>
                                    }
                                </For>
                            </Row>
                    }
                </For>

                <Row class="mt-6 justify-content-center">
                    <Col class="col-auto">
                        <a href="#" class="btn btn-outline-secondary mb-2">
                            Explore All Work<FiArrowRight class="icon-xxs ms-2"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio;