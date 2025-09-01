import {Card, Col, Container, Row} from "solid-bootstrap";
import {FiFacebook, FiInstagram, FiMinus, FiTwitter} from 'solid-icons/fi'

import photo3 from "@/assets/images/photos/3.jpg"
import photo4 from "@/assets/images/photos/4.jpg"
import photo5 from "@/assets/images/photos/5.jpg"
import photo10 from "@/assets/images/photos/10.jpg"
import {For} from "solid-js";
import CustomGlightbox from "@/components/CustomGlightbox";

const images = [photo3, photo4, photo10, photo5]

const Details = () => {
    return (
        <section class="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque
                            sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta
                            maiores,
                            eos culpa.
                        </p>
                        <p class="mb-4">
                            Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis,
                            rem
                            illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse
                            quidem
                            minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.
                        </p>

                        <figure class="figure">
                            <img src="https://source.unsplash.com/GXNo-OJynTQ/1920x720" alt=""
                                 class="figure-img img-fluid rounded"/>

                            <figcaption class="figure-caption text-center">
                                The image caption referencing the above image
                            </figcaption>
                        </figure>

                        <h3 class="mt-4">Itaque earum rerum hic tenetur sapiente delectu</h3>
                        <p class="mb-2">
                            Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt
                            explicabo Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum
                            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                            possimus omnis voluptas
                            assumenda est omnis dolor repellendus.
                        </p>

                        <blockquote class="blockquote p-4 my-4 bg-light">
                            <p class="">
                                Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium
                                totam
                                rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beataevitae
                                dicta sunt explicabo
                                tempore cum soluta.
                            </p>
                            <footer class="blockquote-footer mt-0">
                                <small class="fs-13">Christian Hall</small>
                            </footer>
                        </blockquote>

                        <p class="pb-2">
                            At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate provident similique
                            sunt in culpa qui officia deserunt mollitia animi id est laborum et fuga.
                        </p>
                        <p class="pb-2">
                            Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias
                            consequ perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem
                            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore
                            veritatisquasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p class="pb-2">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam
                            nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                            voluptate lit esse quam nihil
                            molestiae consequatur eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                            facere possimus omnis voluptas assumenda est vel illum qui dolorem eum fugiat quo voluptas
                            aperiam, eaque ipsa quae ab
                            illo inventore.
                        </p>

                        <div class="mt-4">
                            <CustomGlightbox>
                                <Row>
                                    <For each={images}>
                                        {
                                            (img) =>
                                                <Col lg={6}>
                                                    <a href={img} class="glightbox">
                                                        <Card class="shadow rounded-sm">
                                                            <Card.Body class="p-1">
                                                                <img src={img} alt=""
                                                                     class="img-fluid rounded-sm"/>
                                                            </Card.Body>
                                                        </Card>
                                                    </a>
                                                </Col>
                                        }
                                    </For>
                                </Row>
                            </CustomGlightbox>
                        </div>

                        <h5 class="mt-2">Conclusion</h5>
                        <p>
                            Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias
                            consequatur aut perferendis doloribus asperiores repellat qui dolorem ipsum quia dolor sit
                            amet consectetur velitsedquia
                            non numquam eius modi tempora incidunt.
                        </p>

                        <p class="mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                        <p class="mb-2"><FiMinus class="icon-xs me-2"/> Dream places</p>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/> Walking/Hiking
                            tours</p>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/> Tennis lessons
                            with expert coaches</p>
                        <p class="mb-2"><FiMinus class="icon-xs me-2"/> Sailing
                            adventures</p>

                        <div class="mt-5">
                            <a class="btn btn-sm btn-soft-secondary mb-1 me-1" href="#">Startup</a>
                            <a class="btn btn-sm btn-soft-secondary mb-1 me-1" href="#">Website Design</a>
                            <a class="btn btn-sm btn-soft-secondary mb-1 me-1" href="#">Website Development</a>
                            <a class="btn btn-sm btn-soft-secondary mb-1" href="#">Bootstrap</a>
                        </div>

                        <ul class="list-inline mb-0 mt-4">
                            <li class="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">Share:</li>
                            <li class="list-inline-item me-2 align-middle">
                                <a href="#">
                                    <FiFacebook size={20} class="icon-xs icon-dual-primary"/>
                                </a>
                            </li>
                            <li class="list-inline-item me-2 align-middle">
                                <a href="#">
                                    <FiTwitter size={20} class="icon-xs icon-dual-info"/>
                                </a>
                            </li>
                            <li class="list-inline-item align-middle">
                                <a href="#">
                                    <FiInstagram size={20} class="icon-xs icon-dual-danger"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details