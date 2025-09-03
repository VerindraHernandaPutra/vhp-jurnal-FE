// src/layouts/MainLayout.tsx
import { Component, JSX } from 'solid-js';
import SiteFooter from '@/components/layout/SiteFooter';
import BackToTop from '@/components/BackToTop';

type MainLayoutProps = {
  children: JSX.Element;
};

// This component no longer includes the NavBar
const MainLayout: Component<MainLayoutProps> = (props) => {
  return (
    <>
      <main>
        {props.children}
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
};

export default MainLayout;