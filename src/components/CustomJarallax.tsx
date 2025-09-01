import {createEffect, JSX, onCleanup} from "solid-js";
import {jarallax, JarallaxOptions} from "jarallax";
import 'jarallax/dist/jarallax.min.css';

type PropsType = {
    children?: JSX.Element
    options?: JarallaxOptions
}

const CustomJarallax = ({children, options}: PropsType) => {

    createEffect(() => {

        const element = document.querySelector('.jarallax')

        if (element) {
            jarallax(element, {...options});

            onCleanup(() => jarallax(element, "destroy"));
        }
    });

    return (
        <>
            {children}
        </>
    )
}

export default CustomJarallax