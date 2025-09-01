import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import PricingPlanCard from "@/views/landings/saas-modern/components/PricingPlanCard";
import {plans} from "@/views/landings/saas-modern/data";


const Pricing = () => {
    return (
        <section class="section py-6 py-sm-8 bg-gradient3 position-relative">
            <div class="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Plans</span>
                        <h1 class="display-5 fw-medium">Pricing Plans</h1>
                        <p class="text-muted mx-auto">
                            Pricing that <span class="text-primary fw-bold">works</span> for everyone</p>
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
            <div class="divider bottom d-none d-sm-block"></div>
        </section>
    )
}

export default Pricing