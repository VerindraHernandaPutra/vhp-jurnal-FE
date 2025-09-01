import {ProjectType} from "@/views/landings/agency/types";
import {FiArrowRight} from 'solid-icons/fi'
import {Col, Row} from "solid-bootstrap";
import {For} from "solid-js";
import { basePath } from "@/helpers";

const ProjectCard = ({project}: { project: ProjectType }) => {
    return (
        <div class="bg-gray-50 ps-5 pt-5 mt-4 mt-sm-5 rounded feature-item">
            <Row class="align-items-center">
                <Col class="col-auto">
                    <h3 class="text-dark my-0">{project.name}</h3>
                </Col>
                <Col class="text-end pe-5">
                    <For each={project.tags}>
                        {
                            (tag, idx) =>
                                <>{tag}{project.tags.length - 1 != idx() ? ', ' : ''}</>
                        }
                    </For>
                </Col>
            </Row>
            <Row class="mt-4">
                <Col>
                    <img src={project.image} alt=""
                         class="img-fluid shadow rounded"/>
                </Col>
            </Row>
            <div class="overlay">
                <a href={basePath + project.url} class="btn btn-secondary btn-sm btn-view shadow-lg">
                    View Project <FiArrowRight class="icon-xs ms-2"/>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard