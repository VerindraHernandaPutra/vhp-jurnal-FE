import {Col, Row} from "solid-bootstrap";
import {FiArrowRight} from "solid-icons/fi";
import {For} from "solid-js";
import {tasks} from "@/views/admin/dashboard/data";
import TaskCard from "@/views/admin/dashboard/components/TaskCard";

const Tasks = () => {
    return (
        <Row>
            <Col lg={12}>
                <Row>
                    <Col>
                        <h4 class="mb-3 mt-0 fs-16">Tasks</h4>
                    </Col>
                    <Col class="col-auto text-end">
                        <a href="#" class="fw-semibold text-primary fs-13">View All
                            <FiArrowRight size={16} class="ms-1 icon-xxs"/>
                        </a>
                    </Col>
                </Row>

                <For each={tasks}>
                    {
                        (task) =>
                            <Row class="mb-2">
                                <Col>
                                    <TaskCard task={task}/>
                                </Col>
                            </Row>
                    }
                </For>

                <Row class="mb-3 mt-4">
                    <Col xs={12}>
                        <div class="text-center">
                            <button class="btn btn-outline-primary btn-sm" type="button">
                                    <span class="spinner-border spinner-border-sm me-1" role="status"
                                          aria-hidden="true"></span>
                                Load More
                            </button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Tasks;