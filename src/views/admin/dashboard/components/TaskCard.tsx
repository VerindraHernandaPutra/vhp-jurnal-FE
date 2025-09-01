import {TaskType} from "@/views/admin/dashboard/types";
import {Card, Col, Form, OverlayTrigger, Row, Tooltip} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";
import {toSentenceCase} from "@/helpers/casing";

const TaskCard = ({task}: { task: TaskType }) => {
    return (
        <Card class="mb-0">
            <Card.Body>
                <Row class="align-items-center justify-content-sm-between">
                    <Col lg={6}>
                        <Form.Check type="checkbox" label={task.title}/>
                    </Col>

                    <Col lg={3}>
                        <span class="badge badge-soft-info rounded-pill">{task.dueDate}</span>
                    </Col>
                    <Col lg={3}>
                        <ul class="list-inline text-sm-end mb-0"
                            id="tooltip-container2">
                            <li class="list-inline-item pe-3" id="tooltip-container2">
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip>
                                            {task.subTasks.completed} Subtasks are completed
                                        </Tooltip>
                                    }
                                >
                                    <span class="d-flex align-items-center fs-13 fw-medium">
                                        <Icon icon="tabler-list" class="icon-xxs text-normal me-2"
                                              style="font-size:20px"/>
                                        {task.subTasks.completed}/{task.subTasks.total}
                                    </span>
                                </OverlayTrigger>
                            </li>

                            <li class="list-inline-item pe-3" id="tooltip-container4">
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip>
                                            {task.comments} Comments
                                        </Tooltip>
                                    }
                                >
                                    <span class="d-flex align-items-center fs-13 fw-medium">
                                        <Icon icon="tabler-message-2" class="icon-xxs text-normal me-2"
                                              style="font-size:20px"/>
                                        {task.comments}
                                    </span>
                                </OverlayTrigger>
                            </li>
                            <li class="list-inline-item">
                                <span
                                    class={`badge badge-soft-${task.priority === 'high' ? 'danger' : task.priority == 'medium' ? 'warning' : 'success'} p-1`}>{toSentenceCase(task.priority)}</span>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    )
}

export default TaskCard;