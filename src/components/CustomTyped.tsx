import {createEffect, onCleanup} from "solid-js";
import Typed, {TypedOptions} from "typed.js";

type PropsType = {
    strings: Array<string>,
    options?: TypedOptions
    className?: string;
}

const CustomTyped = ({strings, options, className}: PropsType) => {

    let typedEle: HTMLSpanElement | undefined;

    createEffect(() => {
        if (typedEle) {

            const typed = new Typed(typedEle, {
                strings: strings,
                ...options,
            });

            onCleanup(() => typed.destroy());
        }
    });


    return (
        <span ref={typedEle} class={className}/>
    )
}

export default CustomTyped;