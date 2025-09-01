import {Card} from "solid-bootstrap";
import {TestimonialType} from "@/views/landings/software/types";
import Rating from "@/components/Rating";

const TestimonialCard = ({item}: { item: TestimonialType }) => {
    return (
        <Card class="mb-0">
            <Card.Body class="p-md-5">
                <p class="mb-4 mt-0">{item.review}</p>
                <div class="d-flex text-align-start">
                    <img class="me-2 rounded-circle"
                         src={item.user.image} alt="" height="36"/>
                    <div class="flex-grow-1">
                        <h6 class="m-0">{item.user.name}</h6>
                        <p class="my-0 text-muted fs-13">{item.user.role}</p>
                    </div>
                    <div class="align-self-center">
                        <Rating rating={item.rating}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TestimonialCard