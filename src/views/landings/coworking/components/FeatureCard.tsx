import {FeatureType} from "@/views/landings/coworking/types";
import {Card} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const FeatureCard = ({feature}: { feature: FeatureType }) => {
    return (
        <Card class="shadow">
            <Card.Body>
                <div class="d-flex text-align-start">
                    <span
                        class="bg-soft-orange avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-orange me-4 flex-shrink-0">
                         <Icon icon={feature.icon} style="font-size:30px"/>
                    </span>
                    <div class="flex-grow-1">
                        <h5 class="mt-0">{feature.title}</h5>
                        <p class="mb-0">
                            {feature.description}
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default FeatureCard;