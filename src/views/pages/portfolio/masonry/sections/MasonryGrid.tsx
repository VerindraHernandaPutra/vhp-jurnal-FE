import {For} from "solid-js";
import {Button, Container} from "solid-bootstrap";
import {FiRefreshCcw} from "solid-icons/fi";

import CustomGlightbox from "@/components/CustomGlightbox";
import PortfolioItemCard from "@/views/pages/portfolio/masonry/components/PortfolioItemCard";
import {portfolioItems} from "@/views/pages/portfolio/masonry/data";

const MasonryGrid = () => {
    return (
        <section class="overflow-hidden py-5 py-md-6 py-lg-7">
            <Container>

                <CustomGlightbox>
                    <div class="masonry-grid position-relative masonry">
                        <For each={portfolioItems}>
                            {
                                (item) =>
                                    <div class="masonry-item">
                                        <PortfolioItemCard item={item}/>
                                    </div>
                            }
                        </For>
                    </div>
                </CustomGlightbox>

                <div class="text-center mt-5 pb-md-0">
                    <Button variant="primary">
                        <FiRefreshCcw class="icon-xxs me-2"/>
                        Load More
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default MasonryGrid