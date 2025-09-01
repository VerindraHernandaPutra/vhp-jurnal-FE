import {ServiceType} from "@/views/landings/portfolio/types";
import {Card} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const ServiceCard = ({service}: { service: ServiceType }) => {
    return (
        <Card class="shadow feature-item rounded-0" data-aos="fade-up" data-aos-duration="600">
            <Card.Body class="text-start">
                <div class="bg-soft-danger avatar avatar-sm icon icon-with-bg icon-xs text-danger">
                    <Icon icon={service.icon} style="font-size:32px" />
                </div>
                <h4 class="mt-4 text-dark">{service.title}</h4>
                <p class="text-muted mb-0">{service.about}</p>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard