import {ServiceType} from "@/views/landings/agency/types";
import {Card} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const ServiceCard = ({service}: { service: ServiceType }) => {
    return (
        <Card class="border-0 shadow-none feature-item" data-aos="fade-up" data-aos-duration="500">
            <Card.Body>
                <span
                    class={`bg-soft-${service.variant} avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-${service.variant} me-3`}>
                     <Icon icon={service.icon} style="font-size: 24px" />
                </span>

                <h4 class="mt-3 mb-2 fw-semibold">{service.name}</h4>
                <p class="text-muted mb-0">{service.about}</p>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard