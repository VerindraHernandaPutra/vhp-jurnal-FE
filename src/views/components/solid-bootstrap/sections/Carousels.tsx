import {Carousel} from "solid-bootstrap";

import photo1 from "@/assets/images/photos/1.jpg"
import photo2 from "@/assets/images/photos/2.jpg"
import photo3 from "@/assets/images/photos/3.jpg"

const Carousels = () => {
    return (
        <div class="row" id="carousel">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-0">Carousel</h5>
                        <p class="sub-header">
                            A slideshow component for cycling through elements—images or slides of text—like a carousel.
                        </p>

                        <Carousel>
                            <Carousel.Item>
                                <div
                                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                                    style={{height: "400px"}}
                                >
                                    <img src={photo1} class="d-block w-100" alt="..."/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                                    style={{height: "400px"}}
                                >
                                    <img src={photo2} class="d-block w-100" alt="..."/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                                    style={{height: "400px"}}
                                >
                                    <img src={photo3} class="d-block w-100" alt="..."/>
                                </div>
                            </Carousel.Item>
                        </Carousel>


                        <Carousel class="mt-3">
                            <Carousel.Item>
                                <div
                                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                                    style={{height: "400px"}}
                                >
                                    <img src={photo1} class="d-block w-100" alt="..."/>
                                </div>

                                <Carousel.Caption>
                                    <h3 class="text-white">First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                                    style={{height: "400px"}}
                                >
                                    <img src={photo2} class="d-block w-100" alt="..."/>
                                </div>

                                <Carousel.Caption>
                                    <h3 class="text-white">Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                                    style={{height: "400px"}}
                                >
                                    <img src={photo3} class="d-block w-100" alt="..."/>
                                </div>

                                <Carousel.Caption>
                                    <h3 class="text-white">Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousels;