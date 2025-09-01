import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import PricingPlanCard from "@/views/pages/pricing/components/PricingPlanCard";
import {plans} from "@/views/pages/pricing/data";

const Plans = () => {
    return (
        <section class="section py-6 position-relative">
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Plans</span>
                        <h1 class="display-5 fw-semibold">Pricing Plans</h1>
                        <p class="text-muted mx-auto">
                            Pricing that <span class="text-primary fw-bold">works</span> for everyone.</p>
                    </Col>
                </Row>

                <Row class="align-items-center mt-0 mt-sm-5">
                    <For each={plans}>
                        {
                            (plan) =>
                                <Col lg={4} xl={4}>
                                    <PricingPlanCard plan={plan}/>
                                </Col>
                        }
                    </For>
                </Row>
            </Container>
        </section>
    )
}

export default Plans