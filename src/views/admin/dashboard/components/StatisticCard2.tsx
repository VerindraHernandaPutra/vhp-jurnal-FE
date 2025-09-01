import {For} from "solid-js";
import {Card, Col, Dropdown, Row} from "solid-bootstrap";
import {FiEdit3, FiMoreHorizontal, FiRefreshCw, FiTrendingDown, FiTrendingUp} from "solid-icons/fi";
import {StatisticType} from "@/views/admin/dashboard/types";
import {toSentenceCase} from "@/helpers/casing";

export const StatisticCard2 = ({item}: { item: StatisticType }) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <h4 class="mb-1 mt-0 fs-16">{item.title}</h4>
                    </Col>
                    <Col class="col-auto text-end">
                        <Dropdown align={{lg: 'end'}}>
                            <Dropdown.Toggle variant="link" class="p-0"><FiMoreHorizontal size={22}/></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <FiEdit3 class="icon-xxs me-2"/>Edit</Dropdown.Item>
                                <Dropdown.Item>
                                    <FiRefreshCw class="icon-xxs me-2"/>Refresh</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <h1 class="">{item.prefix}{item.value}{item.suffix}</h1>
                {
                    item.duration &&
                    <p class="text-muted">Last {toSentenceCase(item.duration)}</p>
                }

                {
                    item.growths &&
                    <>
                        <hr class="mb-1"/>
                        <Row>
                            <For each={item.growths}>
                                {
                                    (growth) =>
                                        <Col xs={6}>
                                            <div class="d-flex align-items-center mt-2">
                                                <div class="me-3 flex-shrink-0">
                                                    {
                                                        growth.value > 0 ?
                                                            <FiTrendingUp size={24} class="text-success"/> :
                                                            <FiTrendingDown size={24} class="text-danger"/>
                                                    }
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h5 class="mt-0 mb-0">{Math.abs(growth.value)}{growth.type === 'percentage' ? '%' : ''}</h5>
                                                    <p class="text-muted mb-0 fs-13">Prev {toSentenceCase(growth.duration)}</p>
                                                </div>
                                            </div>
                                        </Col>
                                }
                            </For>
                        </Row>
                    </>
                }
            </Card.Body>
        </Card>
    )
}

export default StatisticCard2