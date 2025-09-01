import {Card, Col, Pagination, Row} from "solid-bootstrap";

const Paginations = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Pagination</Card.Title>
                        <p class="sub-header">
                            Examples for showing pagination to indicate a series of related content exists across
                            multiple pages
                        </p>

                        <Pagination>
                            <Pagination.Prev>Previous</Pagination.Prev>
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next>Next</Pagination.Next>
                        </Pagination>

                        <p class="sub-header mt-4">
                            You can use icon instead of showing text label for previous and next actions
                        </p>

                        <Pagination>
                            <Pagination.First/>
                            <Pagination.Prev/>
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next/>
                            <Pagination.Last/>
                        </Pagination>

                        <p class="sub-header mt-4">
                            Just add class modifier <code>.pagination-rounded</code> to <code>Pagination</code> in
                            order to have rounded page action link
                        </p>

                        <Pagination class="pagination-rounded">
                            <Pagination.First/>
                            <Pagination.Prev/>
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next/>
                            <Pagination.Last/>
                        </Pagination>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default Paginations;