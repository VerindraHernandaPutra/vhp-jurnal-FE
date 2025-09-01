import {Col, Container, Row} from "solid-bootstrap";
import LogoBox from "@/components/LogoBox";
import {LinkType} from "@/types/layout";
import {FiFacebook, FiLinkedin, FiTwitter} from "solid-icons/fi";
import {For} from "solid-js";
import {
  appName,
  author,
  authorWebsite,
  currentYear,
  basePath,
} from "@/helpers";

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
        <section class="py-3 bg-gradient3 position-relative">
            <Container>
                <Row class="align-items-center mt-3 mb-4 pb-1">
                    <Col lg={6}>
                        <h2 class="text-dark fw-medium mt-0 mb-1">Ready to get started?</h2>
                        <p class="text-muted mb-0">Create your free 14-day trial account now</p>
                    </Col>

                    <Col lg={6}>
                        <div class="text-lg-end mb-4 mb-xl-0">
                            <a href="#" class="btn btn-primary rounded-pill">Try it free for 14 days</a>
                            <a href="#" class="btn btn-link rounded-pill">Chat with us</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr class="my-0"/>
            <Container class="pt-4">
                <Row>
                    <Col>
                        <a class="navbar-brand me-lg-4 mb-4 me-auto" href="/">
                            <LogoBox className="d-inline-block align-top"/>
                        </a>
                        <h5 class="fw-normal text-muted w-75">Make your saas application stand out with high-quality
                            landing page</h5>
                    </Col>
                    <For each={footerLinks}>
                        {
                            (item) =>
                                <Col sm="auto">
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