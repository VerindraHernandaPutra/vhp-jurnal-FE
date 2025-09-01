import {Col, Container, Nav, Row, TabContent, TabPane} from "solid-bootstrap";
import {createSignal, For} from "solid-js";
import {chunkArray} from "@/helpers/array";
import {ProjectType} from "@/views/landings/portfolio/types";
import ProjectCard from "@/views/landings/portfolio/components/ProjectCard";
import {projects} from "@/views/landings/portfolio/data";

const tabs = [
    {id: "design", label: "UI/UX Design"},
    {id: "branding", label: "Branding"},
    {id: "marketing", label: "Marketing"},
    {id: "web", label: "Web Development"},
];

const Projects = () => {

    const [active, setActive] = createSignal("design");

    return (
        <section class="py-lg-5 pb-5 pt-2 position-relative">
            <Container>
                <Row class="justify-content-center">
                    <Col class="text-start">
                        <h1 class="display-5 fw-medium">Latest Projects</h1>
                    </Col>

                    <Col class="col-auto">
                        <Nav class="nav-pills pe-0 me-0 aling-items-center" id="pills-tab" role="tablist">
                            <For each={tabs}>
                                {
                                    (item) =>
                                        <Nav.Item>
                                            <Nav.Link class={`rounded-pill ${item.id === active() ? 'active' : ''}`}
                                                      onClick={() => {
                                                          setActive(item.id)
                                                          console.log(active())
                                                      }}>{item.label}</Nav.Link>
                                        </Nav.Item>
                                }
                            </For>
                        </Nav>
                    </Col>
                </Row>

                <Row class="mt-3">
                    <Col lg={12}>
                        <TabContent class="mt-2">
                            <TabPane class="fade active" active={active() === 'design'}>
                                <For each={chunkArray<ProjectType>(projects, 2)}>
                                    {
                                        (item) =>
                                            <Row class="features-6" data-aos="fade-up" data-aos-duration="600">
                                                <For each={item}>
                                                    {
                                                        (project) =>
                                                            <Col lg={6}>
                                                                <ProjectCard project={project}/>
                                                            </Col>
                                                    }
                                                </For>

                                            </Row>
                                    }
                                </For>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
