import {ServiceType} from "@/views/landings/crypto/types";
import {Card} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const ServiceCard = ({service}: { service: ServiceType }) => {
    return (
        <Card class="shadow">
            <Card.Body>
                <div class="d-flex text-align-start">
                    <span
                        class="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-4 flex-shrink-0">
                        <Icon icon={service.icon} style="font-size:28px" />
                    </span>
                    <div class="flex-grow-1">
                        <h5 class="mt-0">{service.title}</h5>
                        <p class="mb-0">
                            {service.about}
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard;