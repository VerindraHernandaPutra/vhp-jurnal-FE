import {Card, Col, Dropdown, ProgressBar, Row} from "solid-bootstrap";
import {FiEdit3, FiMail, FiMoreHorizontal, FiPhone, FiRefreshCw, FiTrash2} from "solid-icons/fi";
import {ProfileOverviewType} from "@/views/admin/dashboard/types";

const ProfileOverviewCard = ({item}: { item: ProfileOverviewType }) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <div class="d-flex">
                            <img src={item.image}
                                 class="img-fluid avatar-sm rounded-sm me-3" alt="..."/>
                            <div class="flex-grow-1">
                                <h4 class="mb-1 mt-0 fs-16">{item.name}</h4>
                                <p class="text-muted pb-0 fs-14">{item.role}</p>
                            </div>
                        </div>
                    </Col>
                    <Col class="col-auto text-end">
                        <Dropdown align={{lg: 'end'}}>
                            <Dropdown.Toggle variant="link" class="p-0"><FiMoreHorizontal size={22}/></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <FiEdit3 class="icon-xxs me-2"/>Edit</Dropdown.Item>
                                <Dropdown.Item>
                                    <FiRefreshCw class="icon-xxs me-2"/>Refresh</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item class="text-danger">
                                    <FiTrash2 class="icon-xxs me-2"/>Deactivate</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <ul class="list-inline py-3 border-bottom">
                    <li class="list-inline-item mb-sm-0 mb-2 me-sm-2">
                        <a href="#" class="text-muted fs-14">
                            <FiMail size={18} class="icon-xs me-1"/>{item.email}</a>
                    </li>
                    <li class="list-inline-item mb-sm-0 mb-2">
                        <a href="#" class="text-muted fs-14">
                            <FiPhone size={16} class="icon-xs me-2"/>{item.contactNo}</a>
                    </li>
                </ul>

                <Row class="align-items-center pt-1">
                    <Col md={6}>
                        <p class="float-end mb-0">{item.projectCompletion}%</p>
                        <h6 class="fw-medium my-0">Project Completion</h6>
                        <ProgressBar now={item.projectCompletion} variant="primary" class="mt-3" style="height: 6px;"/>
                    </Col>
                    <Col md={6} class="mt-sm-0 mt-4">
                        <p class="float-end mb-0">{item.rating}</p>
                        <h6 class="fw-medium my-0">Overall Rating</h6>
                        <ProgressBar max={10} now={item.rating} variant="orange" class="mt-3" style="height: 6px;"/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProfileOverviewCard;