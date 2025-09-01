import {Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {statistics} from "@/views/pages/company/data";
import CustomCountUp from "@/components/CustomCountUp";

const Statistics = () => {
    return (
        <section class="pt-8 pb-6 mb-4 mt-lg-4 bg-light position-relative" data-aos="fade-up">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-info px-2 py-1">Stats</span>
                        <h1 class="display-5 fw-medium">Prompt In Numbers</h1>
                        <p class="text-muted mx-auto"></p>
                    </Col>
                </Row>
                <Row class="mt-5 text-center">
                    <For each={statistics}>
                        {
                            (item) =>
                                <Col md={3} xs={6} class="mb-4 mb-sm-0">
                                    <div class="display-4 fw-normal">
                                        <CustomCountUp endValue={item.value}
                                                       options={{
                                                           prefix: item.prefix ?? '',
                                                           suffix: item.suffix ?? '',
                                                           duration: 5
                                                       }}
                                        />
                                    </div>
                                    <p class="mt-2 mb-0 fw-semibold">{item.title}</p>
                                    <p>{item.about}</p>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Statistics;