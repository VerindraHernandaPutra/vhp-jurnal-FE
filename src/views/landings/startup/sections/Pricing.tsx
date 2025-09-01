import {Col, Container, Row, Table} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const Pricing = () => {
    return (
        <section class="my-5 py-5 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col class="text-center">
                        <span class="badge rounded-pill badge-soft-primary px-2 py-1">Pricing</span>
                        <h1 class="display-5 fw-medium">Pricing Plans</h1>
                        <p class="text-muted mx-auto">
                            Pricing that <span class="text-primary fw-bold">works</span> for everyone.
                        </p>
                    </Col>
                </Row>

                <Row class="mt-5 align-items-center justify-content-center">
                    <Col lg={12}>
                        <div class="w-lg-75 mx-lg-auto">
                            <Table responsive size="lg">
                                <thead class="text-center">
                                <tr class="border-top">
                                    <th scope="col" class="w-50"></th>
                                    <th scope="col">
                                        <span class="text-dark">Starter</span>
                                        <small class="d-block text-body fw-normal">$40/mo</small>
                                    </th>
                                    <th scope="col" class="border-start border-end">
                                        <span class="text-dark">Professional</span>
                                        <span class="badge bg-orange rounded-pill ms-1">Popular</span>
                                        <small class="d-block text-body fw-normal">$60/mo</small>
                                    </th>
                                    <th scope="col" class="">
                                        <span class="text-dark">Enterprise</span>
                                        <small class="d-block text-body fw-normal">$300/mo</small>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="border-top">
                                    <td>Landing pages</td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center border-start border-end">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>Drag-and-drop editor</td>
                                    <td></td>
                                    <td class="text-center border-start border-end">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>Email marketing</td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center border-start border-end">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>Ad retargeting</td>
                                    <td class="text-center">
                                        <span class="badge bg-info rounded-pill">Add-on Available</span>
                                    </td>
                                    <td class="text-center border-start border-end"></td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>Messenger integration</td>
                                    <td class="text-center"></td>
                                    <td class="text-center border-start border-end"></td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>Live chat</td>
                                    <td class="text-center"></td>
                                    <td class="text-center border-start border-end">
                                        <span class="badge bg-info rounded-pill">Add-on Available</span>
                                    </td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>Conversational bots</td>
                                    <td class="text-center"></td>
                                    <td class="text-center border-start border-end">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                <tr class="border-top">
                                    <td>SEO recommendations & optimizations</td>
                                    <td class="text-center"></td>
                                    <td class="text-center border-start border-end">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                    <td class="text-center">
                                    <span class="icon icon-xs text-success">
                                        <Icon icon="fa6-solid:check" style="font-size:20px"/>
                                    </span>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Pricing