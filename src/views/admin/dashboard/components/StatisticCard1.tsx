import {StatisticType} from "@/views/admin/dashboard/types";
import {Card} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

const StatisticCard1 = ({item}: { item: StatisticType }) => {
    return (
        <Card>
            <Card.Body>
                <div class="d-flex align-items-center">
                    {
                        item.icon &&
                        <div
                            class={`avatar-sm icon icon-with-bg icon-xs rounded-sm bg-soft-${item.variant ?? 'primary'} me-3`}>
                            <Icon icon={item.icon} class={`icon-dual-${item.variant ?? 'primary'}`}
                                  style="font-size:24px"/>
                        </div>
                    }
                    <div class="flex-grow-1">
                        <h3 class="mt-0 mb-0">{item.prefix}{item.value}{item.suffix}</h3>
                        <p class="text-muted mb-0">{item.title}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default StatisticCard1