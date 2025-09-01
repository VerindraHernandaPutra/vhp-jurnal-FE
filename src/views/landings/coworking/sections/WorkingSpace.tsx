import {Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {spaces} from "@/views/landings/coworking/data";
import WorkingSpaceCard from "@/views/landings/coworking/components/WorkingSpaceCard";

const WorkingSpace = () => {
    return (
        <section class="py-5 position-relative">
            <Container>
                <Row data-aos="fade-up">
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-orange px-2 py-1">Flexible</span>
                        <h1 class="display-5 fw-medium">Coworking Space Options</h1>
                    </Col>
                </Row>

                <Row class="mt-5">
                    <For each={spaces}>
                        {
                            (space) =>
                                <Col lg={6} xl={4}>
                                    <WorkingSpaceCard space={space}/>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default WorkingSpace;