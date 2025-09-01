import {TestimonialType} from "@/views/landings/marketing/types";
import {Card} from "solid-bootstrap";

const TestimonialCard = ({item}: { item: TestimonialType }) => {
    return (
        <Card class="mb-0 border rounded">
            <Card.Body class="testimonial-body shadow">
                <p class="quotation-mark text-muted mb-0">“</p>
                <h4 class="fw-normal mb-3 mt-0">
                    {item.review}
                </h4>
                <hr/>
                <div class="d-flex pt-2 align-items-center">
                    <img class="me-2 rounded-circle"
                         src={item.user.image} alt="" height="36"/>
                    <div class="flex-grow-1">
                        <h6 class="m-0">{item.user.name}</h6>
                        <p class="my-0 text-muted fs-13">{item.user.role}</p>
                    </div>
                    <img src={item.user.company} alt="" height="32"/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TestimonialCard