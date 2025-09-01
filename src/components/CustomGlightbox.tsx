import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css'
import {createEffect, JSX, onCleanup} from "solid-js";

type PropsType = {
    children?: JSX.Element
    options?: any
}

const CustomGlightbox = ({children, options}: PropsType) => {

    createEffect(() => {

        const element = document.querySelector('.glightbox')

        if (element) {

            const element = GLightbox({...options});

            onCleanup(() => element.destroy());
        }
    });

    return (
        <>{children}</>
    )
}

export default CustomGlightbox;