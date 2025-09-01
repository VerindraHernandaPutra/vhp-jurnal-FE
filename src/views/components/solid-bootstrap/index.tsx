import {Col, Container, Row} from "solid-bootstrap";
import PageMeta from "@/components/PageMeta";
import NavBar from "@/components/NavBar";
import Alerts from "@/views/components/solid-bootstrap/sections/Alerts";
import Accordions from "@/views/components/solid-bootstrap/sections/Accordions";
import Badges from "@/views/components/solid-bootstrap/sections/Badges";
import Breadcrumbs from "@/views/components/solid-bootstrap/sections/Breadcrumbs";
import Buttons from "@/views/components/solid-bootstrap/sections/Buttons";
import Cards from "@/views/components/solid-bootstrap/sections/Cards";
import Tabs from "@/views/components/solid-bootstrap/sections/Tabs";
import Carousels from "@/views/components/solid-bootstrap/sections/Carousels";
import Dropdowns from "@/views/components/solid-bootstrap/sections/Dropdowns";
import FormElements from "@/views/components/solid-bootstrap/sections/FormElements";
import Modals from "@/views/components/solid-bootstrap/sections/Modals";
import ProgressBars from "@/views/components/solid-bootstrap/sections/ProgressBars";
import Paginations from "@/views/components/solid-bootstrap/sections/Paginations";
import Spinners from "@/views/components/solid-bootstrap/sections/Spinners";
import Offcanvases from "@/views/components/solid-bootstrap/sections/Offcanvases";
import Popovers from "@/views/components/solid-bootstrap/sections/Popovers";
import Tooltips from "@/views/components/solid-bootstrap/sections/Tooltips";

const Page = () => {
    return (
        <>
            <PageMeta title="Prompt | UI Components"/>

            <NavBar linkContainerClass="mx-auto" buttonClass="btn-outline-primary"/>

            <section class="py-4 bg-light">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Alerts/>
                            <Accordions/>
                            <Badges/>
                            <Breadcrumbs/>
                            <Buttons/>
                            <Cards/>
                            <Tabs/>
                            <Carousels/>
                            <Dropdowns/>
                            <FormElements/>
                            <Modals/>
                            <ProgressBars/>
                            <Paginations/>
                            <Spinners/>
                            <Offcanvases/>
                            <Popovers/>
                            <Tooltips />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Page