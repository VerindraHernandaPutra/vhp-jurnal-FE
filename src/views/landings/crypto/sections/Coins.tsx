import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {FiArrowRight} from 'solid-icons/fi'
import {coins} from "@/views/landings/crypto/data";
import {Icon} from "@iconify-icon/solid";

const Coins = () => {
    return (
        <section class="pt-8 pb-5 position-relative overflow-hidden" data-aos="fade-up">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-center">
                        <h1 class="display-5 fw-semibold">Supported coins</h1>
                        <p class="text-muted mx-auto">
                            Fastest way to buy or sell <span class="text-dark fw-medium">popular</span> crypto
                            coins.
                        </p>
                    </Col>
                </Row>
                <Row class="mt-3">
                    <For each={coins}>
                        {
                            (coin) =>
                                <Col lg={3} md={6}>
                                    <div class="d-flex align-items-center py-lg-2 my-4">
                                        <div class="rounded-circle d-flex align-items-center justify-content-center avatar-sm" style={{background: coin.variant}}>
                                            <Icon icon={coin.icon} class="" style={{"font-size": '28px', "color": 'white'}}/>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h4 class="my-0 fw-medium">{coin.name}</h4>
                                        </div>
                                    </div>
                                </Col>
                        }
                    </For>
                </Row>
                <Row class="mt-4">
                    <Col lg={12} class="mt-4 mt-lg-2 text-center">
                        <a href="#" class="btn btn-primary">
                            View complete list <FiArrowRight class="ms-2 icon-xs"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Coins;