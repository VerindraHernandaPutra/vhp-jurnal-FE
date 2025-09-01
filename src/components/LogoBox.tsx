import logo from "@/assets/images/logo.png";
import logoLight from "@/assets/images/logo-light.png";


type PropsType = {
    className?: string;
    height?: number;
    width?: number;
    isInNavbar?: boolean;
}

const LogoBox = ({width, height, className, isInNavbar}: PropsType) => {
    return (
        <>
            <img src={logo} height={height ? height : 30} width={width} class={`align-top logo-dark ${className}`}
                 alt=""/>
            {
                isInNavbar &&
                <img src={logoLight} height={height ? height : 30} width={width}
                     class={`align-top logo-light ${className}`}
                     alt=""/>
            }
        </>
    )
}

export default LogoBox