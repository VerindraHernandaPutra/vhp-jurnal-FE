import {PortfolioItemType} from "@/views/pages/portfolio/masonry/data";
import {Card} from "solid-bootstrap";

const PortfolioItemCard = ({item}: { item: PortfolioItemType }) => {
    return (
        <Card class="card-portfolio-item mb-0 shadow border filter-item">
            <div class="p-2">
                <div class="card-zoom">
                    <a class="glightbox" href={item.image} data-title={item.title}>
                        <img src={item.image} class="card-img-top"
                             alt="work-thumbnail"/>
                    </a>
                </div>
            </div>
            <Card.Body class="p-2">
                <h5 class="mt-2">{item.title}</h5>
                <p class="text-muted mb-1">{item.description}</p>
            </Card.Body>
        </Card>
    )
}

export default PortfolioItemCard