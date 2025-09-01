import {appName, author, authorWebsite, currentYear,basePath} from "@/helpers";
import LogoBox from "@/components/LogoBox";
import {Col, Container, Row} from "solid-bootstrap";
import {LinkType} from "@/types/layout";
import {For} from "solid-js";

const footerLinks: LinkType[] = [
    {
        label: 'About',
        url: ''
    },
    {
        label: 'Privacy',
        url: ''
    },
    {
        label: 'Terms',
        url: ''
    },
    {
        label: 'Developers',
        url: ''
    },
    {
        label: 'Support',
        url: ''
    },
    {
        label: 'Careers',
        url: '',
        badge: {
            text: 'We\'re hiring',
            variant: 'info'
        }
    }
]

const Footer = () => {
    return (
        <section class="section pt-lg-5 pt-3 pb-3 position-relative" data-aos="fade-up">
            <Container>
                <Row class="align-items-center">
                    <Col class="text-center">
                        <ul class="list-inline list-with-separator">
                            <For each={footerLinks}>
                                {
                                    (link) =>
                                        <li class="list-inline-item me-0">
                                            <a href={basePath + link.url} role="button">
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
                            © {appName}. All rights reserved. Crafted by <a href={authorWebsite}>{author}</a>
                        </p>

                        <LogoBox className="mt-2 mb-4"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;