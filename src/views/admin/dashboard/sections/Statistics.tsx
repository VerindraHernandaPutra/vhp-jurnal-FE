import {For} from "solid-js";
import {Col, Row} from "solid-bootstrap";

import ProfileOverviewCard from "@/views/admin/dashboard/components/ProfileOverviewCard";
import StatisticCard1 from "@/views/admin/dashboard/components/StatisticCard1";
import StatisticCard2 from "@/views/admin/dashboard/components/StatisticCard2";
import {profileOverview, statistics1, statistics2} from "@/views/admin/dashboard/data";

const Statistics = () => {
    return (
        <Row class="mt-2">
            <Col lg={5}>
                <ProfileOverviewCard item={profileOverview}/>
            </Col>

            <Col lg={3}>
                <For each={statistics1}>
                    {
                        (item) => <StatisticCard1 item={item}/>
                    }
                </For>
            </Col>

            <Col lg={4}>
                <StatisticCard2 item={statistics2}/>
            </Col>
        </Row>
    )
}

export default Statistics