import {Col, Row} from "solid-bootstrap";
import {FiArrowRight} from 'solid-icons/fi'
import {For} from "solid-js";
import {projects} from "@/views/admin/dashboard/data";
import ProjectCard from "@/views/admin/dashboard/components/ProjectCard";

const Projects = () => {
    return (
        <Row>
            <Col lg={12}>
                <Row>
                    <Col>
                        <h4 class="mb-3 mt-0 fs-16">Recent Projects</h4>
                    </Col>
                    <Col class="col-auto text-end">
                        <a href="#" class="fw-semibold text-primary fs-13">View All
                            <FiArrowRight size={16} class="ms-1 icon-xxs"/>
                        </a>
                    </Col>
                </Row>

                <Row class="my-2">
                    <For each={projects}>
                        {
                            (project) =>
                                <Col md={4}>
                                    <ProjectCard project={project}/>
                                </Col>
                        }
                    </For>
                </Row>
            </Col>
        </Row>
    )
}

export default Projects 