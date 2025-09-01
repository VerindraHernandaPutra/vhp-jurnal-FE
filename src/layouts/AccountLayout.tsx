import AccountNavBar from "@/layouts/components/AccountNavBar";
import {JSX} from "solid-js";
import AccountFooter from "@/layouts/components/AccountFooter";

const Page = ({children}: { children: JSX.Element }) => {
    return (
        <>
            <AccountNavBar/>
                {children}
            <AccountFooter/>
        </>
    )
}

export default Page