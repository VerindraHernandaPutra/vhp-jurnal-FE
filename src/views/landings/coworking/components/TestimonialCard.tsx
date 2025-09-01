import {TestimonialType} from "@/views/landings/coworking/types";
import {Card} from "solid-bootstrap";

const TestimonialCard = ({item}: { item: TestimonialType }) => {
    return (
        <Card class="mb-0 shadow border">
            <Card.Body class="p-md-5">
                <h5 class="fw-normal mb-4 mt-0">{item.review}</h5>
                <div class="d-flex text-align-start">
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

export default TestimonialCard;