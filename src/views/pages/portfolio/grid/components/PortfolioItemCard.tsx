import {PortfolioItemType} from "@/views/pages/portfolio/grid/data";
import {Card} from "solid-bootstrap";

const PortfolioItemCard = ({item}: { item: PortfolioItemType }) => {
    return (
        <Card class="card-portfolio-item shadow border">
            <div class="p-2">
                <div class="card-zoom">
                    <a href={item.image} class="glightbox image-popup"
                       data-title={item.title}>
                        <img src={item.image} class="card-img-top"
                             alt="work-thumbnail"/>
                    </a>
                </div>
            </div>
            <Card.Body class="card-body p-2">
                <div class="mt-2">
                    <h5 class="mt-0">{item.title}</h5>
                    <p class="text-muted mb-1">{item.description}</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PortfolioItemCard;