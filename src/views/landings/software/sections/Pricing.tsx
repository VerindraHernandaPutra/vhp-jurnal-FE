import {Col, Container, Row} from "solid-bootstrap";
import {For} from "solid-js";
import {plans} from "@/views/landings/software/data";
import PricingPlanCard from "@/views/landings/software/components/PricingPlanCard";

const Pricing = () => {
    return (
        <section class="section pb-4 pb-sm-6 pt-6 position-relative">
            <Container>
                <Row>
                    <Col class="text-center">
                        <h1 class="display-5 fw-medium">Pricing</h1>
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

export default Pricing