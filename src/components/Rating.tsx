import {For} from "solid-js";
import {BsStarFill, BsStarHalf, BsStar} from 'solid-icons/bs'
import {IconTypes} from "solid-icons";

type PropsType = {
    rating: number,
    fillIcon?: IconTypes
    halfIcon?: IconTypes
    icon?: IconTypes
    variant?: string
}

const Rating = ({rating, fillIcon, halfIcon, icon, variant}: PropsType) => {

    const FillIcon: IconTypes = fillIcon ? fillIcon : BsStarFill;
    const HalfIcon: IconTypes = halfIcon ? halfIcon : BsStarHalf;
    const Icon: IconTypes = icon ? icon : BsStar;

    const color = variant ? variant : 'warning'

    return (
        <>
            <For each={Array.from(new Array(Math.floor(rating)))}>
                {
                    (item) =>
                        <FillIcon class={`icon-xxs icon-fill-${color} text-${color}`}/>
                }
            </For>
            {
                !Number.isInteger(rating) && <HalfIcon class={`icon-xxs icon-fill-${color} text-${color}`}/>
            }
            <For each={Array.from(new Array(5 - Math.ceil(rating)))}>
                {
                    (item) =>
                        <Icon class={`icon-xxs text-${color}`}/>
                }
            </For>
        </>
    )
}

export default Rating;