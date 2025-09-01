import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import CustomCountUp from "@/components/CustomCountUp";
import {statistics} from "@/views/landings/coworking/data";

const About = () => {
    return (
        <section class="py-lg-6 py-4 mt-xl-10 mt-0 coworking-1">
            <Container>
                <Row class="align-items-center">
                    <Col>
                        <div class="text-center">
                            <span class="badge rounded-pill badge-soft-info px-2 py-1">About</span>
                            <h1 class="display-5 fw-semibold">More Productivity, Less Expenses</h1>
                            <p class="text-muted mx-auto w-75 mt-1">From an established enterprise or a startup, we
                                offer space that fits all.</p>

                            <Row class="mt-5 text-center" data-aos="fade-up">

                                <For each={statistics}>
                                    {
                                        (item) =>
                                            <Col md={3} xs={6} class="mb-5 mb-sm-0">
                                                <CustomCountUp endValue={item.value}
                                                               options={{
                                                                   prefix: item.prefix ?? '',
                                                                   suffix: item.suffix ?? '',
                                                                   duration: 3
                                                               }}
                                                               className="display-3 fw-bold"/>
                                                <p class="mt-1 mb-0">{item.title}</p>
                                            </Col>
                                    }
                                </For>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About