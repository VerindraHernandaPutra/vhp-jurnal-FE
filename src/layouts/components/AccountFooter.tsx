import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {footerLinks} from "@/layouts/components/data";
import {appName, author, authorWebsite, basePath, currentYear} from "@/helpers";

const AccountFooter = () => {
    return (
        <section class="section py-4 position-relative">
            <Container>
                <Row class="align-items-center">
                    <Col>
                        <ul class="list-inline list-with-separator mb-0">
                            <For each={footerLinks}>
                                {
                                    (link) =>
                                        <li class="list-inline-item me-0">
                                            <a href={basePath + link.url}>{link.label}
                                                {
                                                    link.badge &&
                                                    <span
                                                        class={`align-middle badge badge-soft-${link.badge.variant} rounded-pill fw-normal ms-2 fs-11 px-2 py-1`}>{link.badge.text}</span>
                                                }
                                            </a>
                                        </li>
                                }
                            </For>
                        </ul>
                    </Col>
                    <Col md="auto" class="text-md-end mt-2 mt-md-0">
                        <p class="fs-14 mb-0">
                            {currentYear} {" "}
                            © {appName}. All rights reserved. Crafted by <a
                            href={authorWebsite}>{author}</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AccountFooter