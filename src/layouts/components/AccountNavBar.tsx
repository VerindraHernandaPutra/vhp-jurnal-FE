import {For} from "solid-js";
import {useLocation} from "@solidjs/router";
import {Container, Nav, Navbar, NavDropdown} from "solid-bootstrap";
import {Icon} from "@iconify-icon/solid";

import LogoBox from "@/components/LogoBox";
import {accountMenuItems, notifications, profileMenuItems} from "@/layouts/components/data";

import avatar8 from "@/assets/images/avatars/img-8.jpg"
import {basePath} from "@/helpers";

const AccountNavBar = () => {

    const location = useLocation();

    return (
        <header>
            <Navbar class="navbar-expand-lg topnav-menu mx-auto">

                <Container>
                    <a class="navbar-brand me-lg-3 me-auto" href="/">
                        <LogoBox className="d-inline-block align-top"/>
                    </a>

                    <Navbar.Toggle class="me-3" aria-controls="account-menu-content">
                        <span class="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="account-menu-content">
                        <Nav class="mx-auto">

                            <For each={accountMenuItems}>
                                {
                                    (item) =>
                                        <Nav.Item class="pe-3">
                                            <Nav.Link href={basePath + (item.url ?? '/')}
                                                      class={location.pathname === basePath + item.url ? 'active' : ''}>
                                                <div>
                                                    <span class="d-flex align-items-center">
                                                    {
                                                        item.icon &&
                                                        <Icon icon={item.icon} style="font-size:20px"
                                                              class="icon-xs me-1 flex-shrink-0"/>
                                                    }
                                                        <div class="flex-grow-1">{item.label}</div>
                                                    </span>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                }
                            </For>
                        </Nav>

                        <Nav class="align-items-center">

                            <NavDropdown title={
                                <span class="d-flex align-items-center">
                                <Icon icon="solar-notification-unread-lines-bold-duotone"
                                      style="font-size:24px"/>
                                </span>
                            }>
                                <div class="p-2">
                                    <For each={notifications}>
                                        {
                                            (notification) =>
                                                <NavDropdown.Item class="p-2">
                                                    <div class="d-flex align-items-center">
                                                        <span
                                                            class={`bg-soft-${notification.variant} avatar avatar-xs rounded icon icon-with-bg icon-xxs text-${notification.variant} me-3 flex-shrink-0`}>
                                                            <Icon icon={notification.icon} style="font-size:20px"/>
                                                        </span>
                                                        <div class="flex-grow-1">
                                                            <h6 class="fw-medium my-0 fs-13">{notification.text}</h6>
                                                            <span
                                                                class="text-muted"><small>{notification.timestamp}</small></span>
                                                        </div>
                                                    </div>
                                                </NavDropdown.Item>
                                        }
                                    </For>

                                    <a href="#" class="mt-2 text-center bg-light fs-13 btn btn-light btn-sm d-block">View
                                        All</a>

                                </div>
                            </NavDropdown>

                            <NavDropdown title={
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src={avatar8} class="avatar avatar-xs rounded-circle me-2" alt=""/>
                                    </div>
                                    <div class="flex-grow-1 ms-1 lh-base">
                                        <span class="fw-semibold fs-13 d-block line-height-normal">Greeva N</span>
                                        <span class="text-muted fs-13">Admin</span>
                                    </div>
                                </div>
                            }>

                                <div class="p-2">
                                    <For each={profileMenuItems}>
                                        {
                                            (item) =>
                                                <NavDropdown.Item class="p-2" href="#">
                                                    <item.icon class="me-2"/>
                                                    {item.label}
                                                </NavDropdown.Item>
                                        }
                                    </For>
                                </div>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default AccountNavBar