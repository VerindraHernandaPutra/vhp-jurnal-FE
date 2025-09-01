import {For} from "solid-js";
import {Button, Card} from "solid-bootstrap";
import {PricingPlanType} from "@/views/pages/pricing/types";
import {currency} from "@/helpers";

const PricingPlanCard = ({plan}: { plan: PricingPlanType }) => {
    return (
        <Card class="border position-relative hoverable overflow-hidden" data-aos="fade-up"
              data-aos-duration="500">
            <Card.Body class="text-center">
                {
                    plan.isPopular &&
                    <span class="ribbon2 bg-primary text-white shadow">Popular</span>
                }
                <h4 class="my-0 text-primary">{plan.name}</h4>
                <h1 class="mb-0">
                    <span class="fw-normal text-muted fs-13 align-top">{currency}</span>
                    <span class="fw-bolder display-4">{plan.price}</span>
                    <span class="fw-normal text-muted fs-13 align-middle"> / {plan.duration}</span>
                </h1>

                <ul class="list-unstyled border-top py-4 mt-4 text-start">
                    <For each={plan.features}>
                        {
                            (feature) =>
                                <li class="py-2 d-flex align-items-center">
                                    <feature.icon class="align-middle icon-dual-success me-2 icon-xs"/>
                                    <span>{feature.title}</span>
                                </li>
                        }
                    </For>
                </ul>
                <Button variant={plan.isPopular ? "primary" : "outline-primary"} href="#" class="d-block">Sign Up
                    Now</Button>
            </Card.Body>
        </Card>
    )
}

export default PricingPlanCard