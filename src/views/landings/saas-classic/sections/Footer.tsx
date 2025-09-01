import {For} from "solid-js";
import {Col, Container, Row} from "solid-bootstrap";
import {FiFacebook, FiTwitter, FiLinkedin} from 'solid-icons/fi'

import LogoBox from "@/components/LogoBox";
import {
  appName,
  author,
  authorWebsite,
  currentYear,
  basePath,
} from "@/helpers";
import {LinkType} from "@/types/layout";

type FooterLinkType = {
    title: string;
    links: LinkType[]
}

const footerLinks: FooterLinkType[] = [
    {
        title: "Platform",
        links: [
            {label: 'Demo', url: ''},
            {label: 'Pricing', url: ''},
            {label: 'Integrations', url: ''},
            {label: 'Status', url: ''},
        ]
    },
    {
        title: "Knowledge Base",
        links: [
            {label: 'Blog', url: ''},
            {label: 'Help Center', url: ''},
            {label: 'Sales Tools Catalog', url: ''},
            {label: 'API', url: ''},
        ]
    },
    {
        title: "Company",
        links: [
            {label: 'About Us', url: ''},
            {label: 'Career', url: ''},
            {label: 'Contact Us', url: ''},
        ]
    },
    {
        title: "Legal",
        links: [
            {label: 'Usage Policy', url: ''},
            {label: 'Privacy Policy', url: ''},
            {label: 'Terms of Service', url: ''},
            {label: 'Trust', url: ''},
        ]
    },
]

const socialLinks: LinkType[] = [
    {
        icon: FiFacebook,
        label: 'Facebook',
        url: ''
    },
    {
        icon: FiTwitter,
        label: 'Twitter',
        url: ''
    },
    {
        icon: FiLinkedin,
        label: 'Linkedin',
        url: ''
    },
]

const Footer = () => {
    return (
        <section class="pt-5 pb-4 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col md={4}>
                        <a class="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" href="/">
                            <LogoBox/>
                        </a>
                        <p class="text-muted w-75">
                            Make your web application stand out with high-quality landing page
                        </p>
                    </Col>
                    <For each={footerLinks}>
                        {
                            (item) =>
                                <Col sm={6} md="auto">
                                    <div class="ps-md-5">
                                        <h6 class="mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase">{item.title}</h6>
                                        <ul class="list-unstyled">
                                            <For each={item.links}>
                                                {
                                                    (link) =>
                                                        <li class="my-3">
                                                            <a href={basePath + link.url} class="text-muted">{link.label}</a>
                                                        </li>
                                                }
                                            </For>
                                        </ul>
                                    </div>
                                </Col>
                        }
                    </For>
                </Row>
                <hr/>
                <Row class="text-md-start text-center">
                    <Col md={6}>
                        <p class="pb-0 mb-0 text-muted">
                            {currentYear}{" "}
                            © {appName}. All rights reserved. Crafted
                            by <a href={authorWebsite}>{author}</a>
                        </p>
                    </Col>
                    <Col md={6} class="text-md-end">
                        <div class="align-items-end mt-md-0 mt-4">
                            <ul class="list-unstyled mb-0">
                                <For each={socialLinks}>
                                    {
                                        (link, idx) =>
                                            <li class={`d-inline-block ${socialLinks.length - 1 != idx() ? 'me-4' : ''}`}>
                                                <a href={link.url}>
                                                    {link.icon && <link.icon size={20} class="icon-xs"/>}
                                                </a>
                                            </li>
                                    }
                                </For>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer