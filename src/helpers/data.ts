import saas1 from "@/assets/images/hero/saas1.jpg";
import saas2 from "@/assets/images/hero/saas2.jpg";
import saas3 from "@/assets/images/hero/saas3.jpg";

import {MenuItemType, SlideType} from "@/types/layout";

export const menuItems: MenuItemType[] = [
    {
        key: 'home',
        label: 'Home',
        url: '/'
    },
    {
        key: 'landings',
        label: 'Landings',
        menuSize: 'lg',
        children: [
            {
                key: 'app',
                label: 'App',
                icon: 'solar-smartphone-2-bold-duotone',
                url: '/landings/app',
                parentKey: 'landings',
                variant: 'primary'
            },
            {
                key: 'saas-modern',
                label: 'Saas Modern',
                icon: 'solar-laptop-minimalistic-bold-duotone',
                url: '/landings/saas-modern',
                parentKey: 'landings',
                variant: 'success'
            },
            {
                key: 'saas-classic',
                label: 'Saas Classic',
                icon: 'solar-monitor-bold-duotone',
                url: '/landings/saas-classic',
                parentKey: 'landings',
                variant: 'info'
            },
            {
                key: 'startup',
                label: 'Startup',
                icon: 'solar-pulse-bold-duotone',
                url: '/landings/startup',
                parentKey: 'landings',
                variant: 'orange'
            },
            {
                key: 'software',
                label: 'Software',
                icon: 'solar-layers-bold-duotone',
                url: '/landings/software',
                parentKey: 'landings',
                variant: 'warning'
            },
            {
                key: 'agency',
                label: 'Agency',
                icon: 'solar-bolt-circle-bold-duotone',
                url: '/landings/agency',
                parentKey: 'landings',
                variant: 'secondary'
            },
            {
                key: 'coworking',
                label: 'Coworking',
                icon: 'solar-home-wifi-bold-duotone',
                url: '/landings/coworking',
                parentKey: 'landings',
                variant: 'info'
            },
            {
                key: 'crypto',
                label: 'Crypto',
                icon: 'solar-dollar-minimalistic-bold-duotone',
                url: '/landings/crypto',
                parentKey: 'landings',
                variant: 'orange'
            },
            {
                key: 'marketing',
                label: 'Marketing',
                icon: 'solar-letter-opened-bold-duotone',
                url: '/landings/marketing',
                parentKey: 'landings',
                variant: 'primary'
            },
            {
                key: 'portfolio',
                label: 'Portfolio',
                icon: 'solar-wallpaper-bold-duotone',
                url: '/landings/portfolio',
                parentKey: 'landings',
                variant: 'danger'
            },
        ]
    },
    {
        key: 'pages',
        label: 'Pages',
        children: [
            {
                key: 'auth',
                label: 'Auth',
                parentKey: 'pages',
                children: [
                    {
                        key: 'login',
                        label: 'Login',
                        url: '/auth/login',
                        parentKey: 'auth',
                    },
                    {
                        key: 'register',
                        label: 'Register',
                        url: '/auth/register',
                        parentKey: 'auth',
                    },
                    {
                        key: 'forgot-password',
                        label: 'Forgot Password',
                        url: '/auth/forgot-password',
                        parentKey: 'auth',
                    },
                    {
                        key: 'confirm-mail',
                        label: 'Confirm Mail',
                        url: '/auth/confirm-mail',
                        parentKey: 'auth',
                    }
                ]
            },
            {
                key: 'account',
                label: 'Account',
                parentKey: 'pages',
                children: [
                    {
                        key: 'dashboard',
                        label: 'Dashboard',
                        url: '/account/dashboard',
                        parentKey: 'account',
                    },
                    {
                        key: 'settings',
                        label: 'Settings',
                        url: '/account/settings',
                        parentKey: 'account',
                    },
                ]
            },
            {
                key: 'company',
                label: 'Company',
                url: '/pages/company',
                parentKey: 'pages'
            },
            {
                key: 'contact',
                label: 'Contact',
                url: '/pages/contact',
                parentKey: 'pages'
            },
            {
                key: 'career',
                label: 'Career',
                url: '/pages/career',
                parentKey: 'pages'
            },
            {
                key: 'pricing',
                label: 'Pricing',
                url: '/pages/pricing',
                parentKey: 'pages'
            },
            {
                key: 'help',
                label: 'Help',
                url: '/pages/help',
                parentKey: 'pages'
            },
            {
                key: 'blog',
                label: 'Blog',
                parentKey: 'pages',
                children: [
                    {
                        key: 'blog-index',
                        label: 'Blog',
                        url: '/pages/blog',
                        parentKey: 'blog',
                    },
                    {
                        key: 'blog-post',
                        label: 'Blog Post',
                        url: '/pages/blog/post',
                        parentKey: 'blog',
                    },
                ]
            },
            {
                key: 'portfolios',
                label: 'Portfolio',
                parentKey: 'pages',
                children: [
                    {
                        key: 'portfolio-grid',
                        label: 'Portfolio Grid',
                        url: '/pages/portfolio/grid',
                        parentKey: 'portfolios',
                    },
                    {
                        key: 'portfolio-masonry',
                        label: 'Portfolio Masonry',
                        url: '/pages/portfolio/masonry',
                        parentKey: 'portfolios',
                    },
                    {
                        key: 'portfolio-item',
                        label: 'Portfolio Item',
                        url: '/pages/portfolio/item',
                        parentKey: 'portfolios',
                    }
                ]
            },
        ]
    },
    {
        key: 'components',
        label: 'Components',
        children: [
            {
                key: 'colors',
                label: 'Colors',
                url: '/components/colors',
                parentKey: 'components'
            },
            {
                key: 'typography',
                label: 'Typography',
                url: '/components/typography',
                parentKey: 'components'
            },
            {
                key: 'solid-bootstrap',
                label: 'Solid Bootstrap',
                url: '/components/solid-bootstrap',
                parentKey: 'components'
            },
            {
                key: 'custom',
                label: 'Custom',
                url: '/components/custom',
                parentKey: 'components'
            },
            {
                key: 'plugins',
                label: 'Plugins',
                url: '/components/plugins',
                parentKey: 'components'
            },
        ]
    },
]

export const authSlides: SlideType[] = [
    {
        image: saas1,
        title: 'Manage your saas business with ease',
        description: 'Make your saas application stand out with high-quality landing page designed and developed by professional.'
    },
    {
        image: saas2,
        title: 'The best way to showcase your mobile app',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    },
    {
        image: saas3,
        title: 'Smart Solution that convert Lead to Customer',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    }
]
