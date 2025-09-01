import { Container, Dropdown, Form, Nav, Navbar as BSNavbar, Button } from "solid-bootstrap";
import { A, useLocation } from "@solidjs/router";
import { menuItems } from "@/helpers/data";
import { FaSolidChevronDown } from "solid-icons/fa";
import { MenuItemType } from "@/types/layout";
import { createEffect, createSignal, For, onCleanup, onMount } from "solid-js";
import LogoBox from "@/components/LogoBox";
import { Icon } from "@iconify-icon/solid";
import { findAllParent, findMenuItem, getMenuItemFromURL } from "@/helpers/menu";
import { basePath } from "@/helpers";
import { useAuth } from "@/stores/auth";

type PropsType = {
  showSearch?: boolean;
  variant?: "light" | "dark";
  linkContainerClass?: string;
};

type SubMenus = {
  item: MenuItemType;
  activeMenuItems: string[];
  level?: number;
};

const MenuItemWithChildren = ({ item, activeMenuItems, level }: SubMenus) => {
  const [active, setActive] = createSignal<boolean>(activeMenuItems.includes(item.key));
  createEffect(() => setActive(activeMenuItems.includes(item.key)));

  return (
    <Dropdown>
      <Dropdown.Toggle as={Nav.Link} variant="link" active={active()}>
        <div class="d-flex justify-content-between align-items-center">
          {item.label}
          <FaSolidChevronDown size={10} class="d-inline-block icon-xxs ms-2 mt-lg-0 mt-1" />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        class={`${item.menuSize === "lg" && "dropdown-menu-lg"} ${level && level > 1 ? "dropdown-submenu" : ""}`}
      >
        <For each={item.children}>
          {(child) =>
            child.children ? (
              <MenuItemWithChildren item={child} activeMenuItems={activeMenuItems} level={2} />
            ) : (
              <MenuItemLink item={child} activeMenuItems={activeMenuItems} level={2} />
            )
          }
        </For>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const MenuItemLink = ({ item, activeMenuItems }: SubMenus) => {
  const [active, setActive] = createSignal<boolean>(activeMenuItems.includes(item.key));
  createEffect(() => setActive(activeMenuItems.includes(item.key)));

  return (
    <Nav.Link href={basePath + item.url} active={active()}>
      <div class="d-flex align-items-center">
        {item.icon && (
          <span
            class={`bg-soft-${item.variant ?? "primary"} text-${item.variant ?? "primary"} avatar avatar-xs shadow rounded icon icon-with-bg icon-xs me-3 flex-shrink-0`}
          >
            <Icon icon={item.icon} style="font-size:20px" />
          </span>
        )}
        <div class="flex-grow-1">{item.label}</div>
      </div>
    </Nav.Link>
  );
};

const NavBar = ({ showSearch, variant, linkContainerClass }: PropsType) => {
  const location = useLocation();
  const [activeMenuItems, setActiveMenuItems] = createSignal<string[]>([]);
  const { user, logout } = useAuth();

  // Transparent at top, solid after you scroll a bit
  const [isTop, setIsTop] = createSignal(true);
  const onScroll = () => setIsTop(window.scrollY <= 10);

  onMount(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  });
  onCleanup(() => window.removeEventListener("scroll", onScroll));

  // Sync active menu
  createEffect(() => {
    const matching = getMenuItemFromURL(menuItems, basePath + location.pathname);
    if (matching) {
      const mt = findMenuItem(menuItems, matching.key);
      if (mt) setActiveMenuItems([mt.key, ...findAllParent(menuItems, mt)]);
    }
  });

  // Apply the bg state class; DO NOT fix position (per your request)
  const navbarClass =
    `topnav-menu navbar-expand-lg ${isTop() ? "navbar-transparent" : "navbar-solid"}`;

  return (
    <header>
      <BSNavbar variant={variant ?? "light"} expand="lg" class={navbarClass}>
        <Container>
          <BSNavbar.Brand class="logo" as={A} href="/">
            <LogoBox isInNavbar={true} />
          </BSNavbar.Brand>

          <BSNavbar.Toggle aria-controls="topnav-menu-content">
            <span class="navbar-toggler-icon"></span>
          </BSNavbar.Toggle>

          <BSNavbar.Collapse id="topnav-menu-content">
            {showSearch && (
              <Nav class="align-items-lg-center d-flex me-auto">
                <li>
                  <Form class="form-inline d-none d-sm-flex">
                    <Form.Group>
                      <Form.Control type="text" placeholder="What are you looking for?" />
                    </Form.Group>
                  </Form>
                </li>
              </Nav>
            )}

            <Nav class={`align-items-lg-center ms-auto navbar-${variant ?? "light"} ${linkContainerClass || ""}`}>
              {activeMenuItems().length > 0 && (
                <For each={menuItems}>
                  {(item) =>
                    item.children ? (
                      <MenuItemWithChildren item={item} activeMenuItems={activeMenuItems()} />
                    ) : (
                      <MenuItemLink item={item} activeMenuItems={activeMenuItems()} />
                    )
                  }
                </For>
              )}
            </Nav>

            {/* Auth Section */}
            <Nav class="align-items-lg-center d-flex ms-3">
              {user() ? (
                <>
                  <span class="me-3">Hello, {user()!.name}</span>
                  <Button variant="outline-danger" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <></>
              )}
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </header>
  );
};

export default NavBar;
