// src/components/NavBar.tsx
import { Container, Nav, Navbar as BSNavbar } from "solid-bootstrap";
import { A, useLocation } from "@solidjs/router";
import { menuItems } from "@/helpers/data";
import { createSignal, For, onCleanup, onMount, Component } from "solid-js";
import LogoBox from "@/components/LogoBox";

// A simplified type for our new, flat menu structure
type MenuItem = {
  key: string;
  label: string;
  url: string;
};

// Props for the main NavBar component
type NavBarProps = {
  variant?: "light" | "dark";
  linkContainerClass?: string;
};

// Props for the MenuItemLink sub-component
type MenuItemLinkProps = {
  item: MenuItem;
};

const MenuItemLink: Component<MenuItemLinkProps> = (props) => {
  const location = useLocation();
  const isActive = () => location.pathname === props.item.url;

  return (
    <Nav.Link as={A} href={props.item.url} active={isActive()}>
      {props.item.label}
    </Nav.Link>
  );
};

const NavBar: Component<NavBarProps> = (props) => {
  const [isTop, setIsTop] = createSignal(true);
  const onScroll = () => setIsTop(window.scrollY <= 10);

  onMount(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  });
  onCleanup(() => window.removeEventListener("scroll", onScroll));

  const navbarClass = () => 
    `topnav-menu navbar-expand-lg ${isTop() ? "navbar-transparent" : "navbar-solid"}`;

  return (
    <header>
      <BSNavbar variant={props.variant ?? "light"} expand="lg" class={navbarClass()}>
        <Container>
          <BSNavbar.Brand class="logo" as={A} href="/">
            <LogoBox isInNavbar={true} />
          </BSNavbar.Brand>

          <BSNavbar.Toggle aria-controls="topnav-menu-content" />

          <BSNavbar.Collapse id="topnav-menu-content">
            <Nav class={`align-items-lg-center ${props.linkContainerClass || ""}`}>
              <For each={menuItems}>
                {(item) => <MenuItemLink item={item as MenuItem} />}
              </For>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </header>
  );
};

export default NavBar;