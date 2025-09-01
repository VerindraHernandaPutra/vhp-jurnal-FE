import {Button, Col, Container, FormControl, InputGroup, Row} from "solid-bootstrap";
import {FiMail} from 'solid-icons/fi'

import LogoBox from "@/components/LogoBox";
import {appName, currentYear,basePath} from "@/helpers";
import {LinkType} from "@/types/layout";
import {For} from "solid-js";

type FooterLinkType = {
    title: string;
    links: LinkType[]
}

const footerLinks: FooterLinkType[] = [
    {
        title: "Navigations",
        links: [
            {label: 'Home', url: ''},
            {label: 'Locations', url: ''},
            {label: 'Plans', url: ''},
            {label: 'Events', url: ''},
        ]
    },
    {
        title: "Contact",
        links: [
            {label: 'Support', url: ''},
            {label: 'Developers', url: ''},
            {label: 'Customer Service', url: ''},
            {label: 'Get Started Guide', url: ''},
        ]
    }
]

const Footer = () => {
    return (
        <section class="py-5 py-sm-6 bg-gradient5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <a class="navbar-brand me-lg-4 me-auto pt-0" href="/">
                            <LogoBox className="d-inline-block align-top"/>
                        </a>
                        <div class="">
                            <p class="mt-3 mb-1 text-dark">At vero eos et accusamus et iusto dignissimos ducimus
                                odio.</p>
                            <p class="mt-lg-5 pt-4 mb-lg-0 mb-4 text-dark">{appName} {currentYear}. All rights
                                reserved.</p>
                        </div>
                    </Col>

                    <Col lg={7} class="offset-lg-1">
                        <Row>
                            <For each={footerLinks}>
                                {
                                    (item) =>
                                        <Col md={3} sm={6}>
                                            <h6 class="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">{item.title}</h6>
                                            <ul class="list-unstyled">
                                                <For each={item.links}>
                                                    {
                                                        (link) =>
                                                            <li class="my-3"><a href={basePath + link.url}
                                                                                class="text-dark">{link.label}</a></li>
                                                    }
                                                </For>
                                            </ul>
                                        </Col>
                                }
                            </For>
                            <Col md={5} class="offset-md-1">
                                <h6 class="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">Subscribe To
                                    Newsletters</h6>

                                <InputGroup class="my-3">
                                    <FormControl type="email" placeholder="Your email" class="h-auto"/>
                                    <Button variant="secondary"><FiMail class="icon-xs"/></Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer