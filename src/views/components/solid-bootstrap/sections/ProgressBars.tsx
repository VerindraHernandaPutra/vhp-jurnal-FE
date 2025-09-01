import {Card, Col, ProgressBar, Row} from "solid-bootstrap";

const ProgressBars = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Progress</Card.Title>
                        <p class="sub-header">
                            Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and
                            text labels
                        </p>
                        <div>
                            <ProgressBar now={0} class="mb-3"/>

                            <ProgressBar now={33} class="mb-3"/>

                            <ProgressBar now={66} variant="success" class="mb-3"/>

                            <ProgressBar now={100} variant="danger" class="mb-3"/>

                            <ProgressBar now={25} label={`${25}%`} variant="info"/>
                        </div>

                        <div class="mt-5">
                            <ProgressBar striped now={10} class="mb-3"/>

                            <ProgressBar striped animated now={75}/>
                        </div>

                        <div class="mt-5">
                            <ProgressBar now={25} class="mb-3" style="height: 2px"/>

                            <ProgressBar now={25} style="height: 16px"/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ProgressBars