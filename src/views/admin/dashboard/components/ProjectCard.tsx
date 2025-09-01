import {For} from "solid-js";
import {Card, Col, Dropdown, ProgressBar, Row} from "solid-bootstrap";
import {ProjectType} from "@/views/admin/dashboard/types";
import {truncateString} from "@/helpers/casing";
import {FiEdit3, FiEye, FiMoreHorizontal, FiTrash2} from 'solid-icons/fi'

const ProjectCard = ({project}: { project: ProjectType }) => {
    return (
        <Card>
            <Card.Body>
                <Row class="align-items-center">
                    <Col>
                        <p class="text-muted fs-13 fw-medium mb-0">{project.date}</p>
                    </Col>
                    <Col class="col-auto text-end">
                        <Dropdown align={{lg: 'end'}}>
                            <Dropdown.Toggle variant="link" class="p-0"><FiMoreHorizontal size={22}/></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <FiEye class="icon-xxs me-2"/>View</Dropdown.Item>
                                <Dropdown.Item>
                                    <FiEdit3 class="icon-xxs me-2"/>Edit</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item class="text-danger">
                                    <FiTrash2 class="icon-xxs me-2"/>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>


                <div class="mt-3">
                    <h4 class="mt-0 mb-1">
                        <a href="">{project.title}</a>
                    </h4>
                    <label class={`mb-1 badge badge-soft-${project.variant}`}>{project.category}</label>

                    <p class="text-muted fs-14 mt-3">{truncateString(project.description, 43)}</p>
                </div>


                <div class="mt-4">
                    <Row>
                        <Col>
                            <h6 class="mt-0">Progress</h6>
                        </Col>
                        <Col class="text-end">
                            <small class="fw-semibold">{project.progress}%</small>
                        </Col>
                    </Row>

                    <ProgressBar now={project.progress} variant={project.variant} style="height: 6px;"/>
                </div>

                <Row class="mt-3">
                    <Col>
                        <div class="avatar-group">
                            <For each={project.team}>
                                {
                                    (member) =>
                                        <a href="" class="avatar-group-item mb-0">
                                            <img src={member.avatar} alt="image"
                                                 class="img-fluid avatar-xs rounded rounded-circle avatar-border"/>
                                        </a>
                                }
                            </For>
                        </div>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}

export default ProjectCard;