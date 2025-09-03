// src/components/NavBar.tsx
import { Component } from 'solid-js';
import { Container, Nav, Navbar as BSNavbar } from "solid-bootstrap";
import { A, useLocation } from "@solidjs/router";
import { menuItems } from "@/helpers/data";
import { createSignal, For, onCleanup, onMount } from "solid-js";
import LogoBox from "@/components/LogoBox";
import './NavBar.css';

type MenuItem = { key: string; label: string; url: string; };
type NavBarProps = { variant?: "light" | "dark"; }; // Removed linkContainerClass
type MenuItemLinkProps = { item: MenuItem; };

const MenuItemLink: Component<MenuItemLinkProps> = (props) => {
  const location = useLocation();

  const isActive = () => {
    if (props.item.url === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(props.item.url);
  };

  return (
    // THE FIX: Add the `end` prop to the link for the homepage
    <Nav.Link as={A} href={props.item.url} active={isActive()} end={props.item.url === '/'}>
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
            {/* THE FIX: Added mx-auto to center the nav links */}
            <Nav class="align-items-lg-center mx-auto">
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