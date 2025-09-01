import {createEffect, onCleanup} from "solid-js";
import {CountUp, CountUpOptions} from "countup.js";

type PropsType = {
    endValue: number
    className?: string
    options?: CountUpOptions
}

const CustomCountUp = ({endValue, className, options}: PropsType) => {

    let counterEle: HTMLDivElement | undefined;

    createEffect(() => {
        if (counterEle) {
            const countUp = new CountUp(counterEle, endValue, options);

            countUp.start()

            onCleanup(() => countUp.reset());
        }
    })

    return (
        <div ref={counterEle} class={className}></div>
    )
}

export default CustomCountUp;