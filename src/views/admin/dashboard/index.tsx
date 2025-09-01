import {Col, Container, Row} from "solid-bootstrap";
import AccountLayout from "@/layouts/AccountLayout";
import PageMeta from "@/components/PageMeta";
import Projects from "@/views/admin/dashboard/sections/Projects";
import Statistics from "@/views/admin/dashboard/sections/Statistics";
import Tasks from "@/views/admin/dashboard/sections/Tasks";

const Page = () => {
    return (
        <AccountLayout>
            <PageMeta title="Prompt - Your Dashboard"/>

            <section class="position-relative overflow-hidden bg-gradient2 py-3 px-3">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div class="page-title">
                                <h3 class="mb-0">Hi Greeva</h3>
                                <p class="mt-1 fw-medium">Welcome to Prompt!</p>
                            </div>
                        </Col>
                    </Row>

                    <Statistics/>

                    <Projects/>

                    <Tasks/>
                </Container>
            </section>
        </AccountLayout>
    )
}

export default Page