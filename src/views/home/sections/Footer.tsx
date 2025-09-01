import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import LogoBox from "@/components/LogoBox";
import {appName, author, authorContact, currentYear,basePath} from "@/helpers";
import {LinkType} from "@/types/layout";

const footerLinks: LinkType[] = [
    {
        label: 'About',
        url: ''
    },
    {
        label: 'Support',
        url: ''
    },
    {
        label: 'Version',
        url: '',
        badge: {
            text: 'v1.0',
            variant: 'info'
        }
    }
]

const Footer = () => {
    return (
        <section class="section pt-lg-6 pt-3 pb-3 position-relative" data-aos="fade-up">
            <Container>
                <Row class="align-items-center">
                    <Col class="text-center">
                        <ul class="list-inline list-with-separator">
                            <For each={footerLinks}>
                                {
                                    (link) =>
                                        <li class="list-inline-item me-0">
                                            <a href={basePath + link.url}>
                                                {link.label}
                                                {
                                                    link.badge &&
                                                    <span
                                                        class={`align-middle badge badge-soft-${link.badge.variant} rounded-pill px-2 py-1 ms-1`}>{link.badge.text}</span>
                                                }
                                            </a>
                                        </li>
                                }
                            </For>
                        </ul>
                        <p class="mt-2 fs-14">
                            {currentYear}
                            © {appName}. All rights reserved. Crafted by <a href={authorContact}>{author}</a>
                        </p>
                        <LogoBox className="mt-2 mb-4"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer