import {JSX} from "solid-js";
import {Container, Row} from "solid-bootstrap";

const AuthLayout = ({children}: { children: JSX.Element }) => {
    return (
        <div
            class="bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5">
            <Container>
                <Row class="justify-content-center">
                    {children}
                </Row>
            </Container>
        </div>
    )
}

export default AuthLayout