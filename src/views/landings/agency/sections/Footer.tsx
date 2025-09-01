import {Col, Container, Row} from "solid-bootstrap";
import LogoBox from "@/components/LogoBox";
import {author, authorWebsite, currentYear,basePath} from "@/helpers";
import {LinkType} from "@/types/layout";
import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter} from "solid-icons/fi";
import {For} from "solid-js";

type FooterLinkType = {
    title: string;
    links: LinkType[]
}

const footerLinks: FooterLinkType[] = [
    {
        title: "About",
        links: [
            {label: 'Home', url: ''},
            {label: 'Portfolio', url: ''},
            {label: 'Resources', url: ''},
            {label: 'Blog', url: ''},
        ]
    },
    {
        title: "Company",
        links: [
            {label: 'About', url: ''},
            {label: 'Career', url: ''},
            {label: 'Clients', url: ''},
        ]
    }
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
    {
        icon: FiInstagram,
        label: 'Instagram',
        url: ''
    },
]

const Footer = () => {
    return (
        <div class="pt-5 pb-3 position-relative bg-light">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div class="me-5">
                            <a class="navbar-brand me-lg-4 me-auto" href="#">
                                <LogoBox className="d-inline-block align-top"/>
                            </a>
                            <p class="mt-4">300 Park Avenue, 12th Floor New York, NY 10022</p>
                            <p class="mb-5">1499 Burwell Heights Road Port Arthur Meadow Nashville, TX 77642</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <For each={footerLinks}>
                                {
                                    (item) =>
                                        <Col class="col-auto">
                                            <div class="ps-md-5">
                                                <h5 class="text-dark mb-4 fw-semibold">{item.title}</h5>
                                                <ul class="list-unstyled">

                                                    <For each={item.links}>
                                                        {
                                                            (link) =>
                                                                <li class="my-2">
                                                                    <a href={basePath + link.url}
                                                                       class="text-muted">{link.label}</a>
                                                                </li>
                                                        }
                                                    </For>
                                                </ul>
                                            </div>
                                        </Col>
                                }
                            </For>
                            <Col class="col-auto">
                                <div class="ps-md-5">
                                    <h5 class="text-dark mb-4 fw-semibold">Get in touch</h5>
                                    <ul class="list-unstyled">
                                        <li class="my-1"><a href="#" class="text-muted">hello@prompt.com</a></li>
                                    </ul>
                                    <ul class="list-inline">
                                        <For each={socialLinks}>
                                            {
                                                (link, idx) =>
                                                    <li class={`list-inline-item ${socialLinks.length - 1 != idx() ? 'me-3' : ''}`}>
                                                        <a href={link.url} class="text-muted">
                                                            {link.icon && <link.icon size={20} class="icon-xs"/>}
                                                        </a>
                                                    </li>
                                            }
                                        </For>
                                    </ul>
                                </div>
                            </Col>
                            <Col class="col-auto">
                                <div class="ps-md-5">
                                    <h5 class="text-dark mb-4 fw-semibold">Languages</h5>
                                    <ul class="list-unstyled">
                                        <li class="my-2"><a href="#" class="text-muted">Francais</a></li>
                                        <li class="my-2"><a href="#" class="text-muted">English</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={12}>
                        <div class="text-center text-muted">
                            <p class="pb-0 mb-0 fs-14 text-center text-muted">
                                {currentYear}{" "}
                                © Prompt. All rights reserved. Crafted by <a
                                href={authorWebsite}>{author}</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer