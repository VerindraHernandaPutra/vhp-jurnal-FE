import {createSignal, For} from "solid-js";
import {Button, Col, Container, Row} from "solid-bootstrap";

import CustomGlightbox from "@/components/CustomGlightbox";
import PortfolioItemCard from "@/views/pages/portfolio/grid/components/PortfolioItemCard";
import {portfolioItems} from "@/views/pages/portfolio/grid/data";

import {FiRefreshCcw} from 'solid-icons/fi'

const filters = [
    {id: 'all', label: 'All'},
    {id: 'web', label: 'Web Design'},
    {id: 'graphic', label: 'Graphic Design'},
    {id: 'illustrator', label: 'Illustrator'},
    {id: 'photography', label: 'Photography'},
]

const Grid = () => {

    const [items, setItems] = createSignal(portfolioItems)

    const [filter, setFilter] = createSignal('all')

    const filterItems = (filter: string) => {
        setFilter(filter)
        if (filter === 'all') {
            return setItems(portfolioItems)
        }
        return setItems(portfolioItems.filter(i => i.categories.includes(filter)))
    }

    return (
        <section class="overflow-hidden py-5 py-md-6 py-lg-7">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div class="text-center filter-menu">
                            <For each={filters}>
                                {
                                    (item) =>
                                        <a class={`filter-menu-item ${item.id === filter() ? 'active' : ''}`}
                                           onClick={() => filterItems(item.id)}>{item.label}</a>
                                }
                            </For>
                        </div>
                    </Col>
                </Row>


                <div data-toggle="image-gallery" data-delegate="a" data-type="image" data-enable-gallery="true"
                     class="mt-5">
                    <CustomGlightbox>
                        <Row class="grid-portfolio">
                            <For each={items()}>
                                {
                                    (item) =>
                                        <Col sm={6} xl={4} class="filter-item">
                                            <PortfolioItemCard item={item}/>
                                        </Col>
                                }
                            </For>
                        </Row>
                    </CustomGlightbox>
                </div>

                <div class="text-center mt-5 pb-md-0">
                    <Button variant="primary">
                        <FiRefreshCcw class="icon-xxs me-2"/>Load More
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default Grid