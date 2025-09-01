import {appName, author, authorWebsite, currentYear,basePath} from "@/helpers";
import {Col, Container, Row} from "solid-bootstrap";
import {LinkType} from "@/types/layout";
import {For} from "solid-js";

const footerLinks: LinkType[] = [
    {
        label: 'About',
        url: ''
    },
    {
        label: 'Services',
        url: ''
    },
    {
        label: 'Contact',
        url: ''
    }
]

const Footer = () => {
    return (
        <section class="section pt-4 pb-3 position-relative">
            <Container>
                <Row class="align-items-center border-top border-light pt-4">
                    <Col class="text-center">
                        <ul class="list-inline list-with-separator">
                            <For each={footerLinks}>
                                {
                                    (link) =>
                                        <li class="list-inline-item me-0"><a href={basePath + link.url}>{link.label}</a></li>
                                }
                            </For>
                        </ul>
                        <p class="mt-2">
                            {currentYear}{" "}
                            © {appName}. All rights reserved. Crafted by <a href={authorWebsite}>{author}</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer