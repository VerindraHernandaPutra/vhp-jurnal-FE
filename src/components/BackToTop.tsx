import {FiArrowUp} from 'solid-icons/fi'
import {Button} from "solid-bootstrap";
import {onMount} from "solid-js";

const BackToTop = () => {

    let backToTop: HTMLButtonElement | undefined

    onMount(() => {
        window.addEventListener('scroll', () => {
            if (backToTop) {
                backToTop.classList.toggle("show", window.scrollY > 300)
            }
        })
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Button ref={backToTop} onClick={scrollToTop} class="btn-soft-primary shadow-none btn-icon btn-back-to-top">
            <FiArrowUp size={16} class="icon-xxs"/>
        </Button>
    )
}


export default BackToTop