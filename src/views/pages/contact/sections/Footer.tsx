import {Col, Container, Row} from "solid-bootstrap";
import LogoBox from "@/components/LogoBox";
import {
  appName,
  author,
  authorWebsite,
  currentYear,
  basePath,
} from "@/helpers";
import {LinkType} from "@/types/layout";
import {FiFacebook, FiLinkedin, FiTwitter} from "solid-icons/fi";
import {For} from "solid-js";

type FooterLinkType = {
    title: string;
    links: LinkType[]
}

const footerLinks: FooterLinkType[] = [
    {
        title: "Resources",
        links: [
            {label: 'Blog', url: ''},
            {label: 'FAQ', url: ''},
            {label: 'Team of service', url: ''},
            {label: 'Privacy policy', url: ''},
        ]
    },
    {
        title: "Company",
        links: [
            {label: 'About', url: ''},
            {label: 'Contact Us', url: ''},
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
                    <Col>
                        <a class="navbar-brand me-lg-4 mb-2 me-auto d-flex align-items-center pt-0" href="/">
                            <LogoBox/>
                        </a>
                        <p class="text-muted mb-4 w-50">On the other hand, we denounce with righteous indignation
                            and dislike men who are so beguiled and demoralized.</p>
                    </Col>

                    <For each={footerLinks}>
                        {
                            (item) =>
                                <Col sm="auto">
                                    <div class="px-md-5">
                                        <h5 class="mb-4 mt-5 mt-md-0">{item.title}</h5>
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
                    <Col md="6">
                        <p class="pb-0 mb-0 text-muted">
                            {currentYear}{" "}
                            © {appName}. All rights reserved. Crafted
                            by <a href={authorWebsite}>{author}</a></p>
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

export default Footer;