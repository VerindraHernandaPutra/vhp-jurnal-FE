import {Card, Col, Row} from "solid-bootstrap";
import {FiUser} from 'solid-icons/fi'
import {SpaceType} from "@/views/landings/coworking/types";

const WorkingSpaceCard = ({space}: { space: SpaceType }) => {
    return (
        <Card class="shadow-lg rounded" data-aos="fade-up" data-aos-duration="600">
            <img src={space.image} alt="" class="card-img-top"/>
            <Card.Body>
                <div class="">
                    <h4 class="mt-0"><a href="#" class="text-orange">{space.type}</a></h4>
                    <p class="text-muted mb-2">
                        {space.about}
                    </p>
                </div>
                <div class="pt-3">
                    <Row class="align-items-center">
                        <Col class="col-auto">
                            <p class="mb-0">
                                <FiUser size={20} class="icon-dual icon-xs me-2"/>
                                <a href="" class="fs-13 align-middle text-muted">{space.capacity}</a>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}

export default WorkingSpaceCard