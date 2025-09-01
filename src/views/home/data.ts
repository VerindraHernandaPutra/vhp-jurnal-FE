import homeAppImg from "@/assets/images/demo/landing/home-app.jpg";
import homeSaasImg from "@/assets/images/demo/landing/home-saas.jpg";
import homeSaas2Img from "@/assets/images/demo/landing/home-saas2.jpg";
import homeStartupImg from "@/assets/images/demo/landing/home-startup.jpg";
import homeSoftwareImg from "@/assets/images/demo/landing/home-software.jpg";
import homeAgencyImg from "@/assets/images/demo/landing/home-agency.jpg";
import homeCoworkingImg from "@/assets/images/demo/landing/home-coworking.jpg";
import homeCryptoImg from "@/assets/images/demo/landing/home-crypto.jpg";
import homeMarketingImg from "@/assets/images/demo/landing/home-marketing.jpg";
import homePortfolioImg from "@/assets/images/demo/landing/home-portfolio.jpg";
import companyImg from "@/assets/images/demo/pages/company.jpg";
import contactImg from "@/assets/images/demo/pages/contact.jpg";
import careerImg from "@/assets/images/demo/pages/career.jpg";
import blogImg from "@/assets/images/demo/pages/blog.jpg";
import blogPostImg from "@/assets/images/demo/pages/blog-post.jpg";
import dashboardImg from "@/assets/images/demo/pages/dashboard.jpg";
import settingsImg from "@/assets/images/demo/pages/settings.jpg";
import portfolioGridImg from "@/assets/images/demo/pages/portfolio-grid.jpg";
import portfolioMasonryImg from "@/assets/images/demo/pages/portfolio-masonry.jpg";
import portfolioItemImg from "@/assets/images/demo/pages/portfolio-item.jpg";
import pricingImg from "@/assets/images/demo/pages/pricing.jpg";
import helpImg from "@/assets/images/demo/pages/help.jpg";
import loginImg from "@/assets/images/demo/pages/auth-login.jpg";
import signupImg from "@/assets/images/demo/pages/auth-signup.jpg";
import passwordImg from "@/assets/images/demo/pages/auth-password.jpg";
import confirmImg from "@/assets/images/demo/pages/auth-confirm.jpg";

type DemoType = {
    tag: string
    title: string
    description?: string
    pages: {
        image: string
        name: string
        url: string
    }[]
}

type FeatureType = {
    icon?: string
    title: string
    description?: string
}

export const demos: DemoType[] = [
    {
        tag: 'demos',
        title: 'Landing Pages',
        description: 'Modern landing pages available for every need',
        pages: [
            {
                image: homeAppImg,
                name: 'Mobile App',
                url: '/landings/app'
            },
            {
                image: homeSaasImg,
                name: 'Saas Modern',
                url: '/landings/saas-modern'
            },
            {
                image: homeSaas2Img,
                name: 'Saas Classic',
                url: '/landings/saas-classic'
            },
            {
                image: homeStartupImg,
                name: 'Startup',
                url: '/landings/startup'
            },
            {
                image: homeSoftwareImg,
                name: 'Software',
                url: '/landings/software'
            },
            {
                image: homeAgencyImg,
                name: 'Agency',
                url: '/landings/agency'
            },
            {
                image: homeCoworkingImg,
                name: 'Co-Working',
                url: '/landings/co-working'
            },
            {
                image: homeCryptoImg,
                name: 'Crypto',
                url: '/landings/crypto'
            },
            {
                image: homeMarketingImg,
                name: 'Marketing',
                url: '/landings/marketing'
            },
            {
                image: homePortfolioImg,
                name: 'Portfolio',
                url: '/landings/portfolio'
            },
        ]
    },
    {
        tag: 'pages',
        title: 'Inner Pages',
        pages: [
            {
                image: companyImg,
                name: 'Company',
                url: '/pages/company'
            },
            {
                image: contactImg,
                name: 'Contact',
                url: '/pages/contact'
            },
            {
                image: careerImg,
                name: 'Career',
                url: '/pages/career'
            },
            {
                image: blogImg,
                name: 'Blog',
                url: '/pages/blog'
            },
            {
                image: blogPostImg,
                name: 'Blog Post',
                url: '/pages/blog/post'
            },
            {
                image: dashboardImg,
                name: 'Dashboard',
                url: '/account/dashboard'
            },
            {
                image: settingsImg,
                name: 'Settings',
                url: '/account/settings'
            },
            {
                image: portfolioGridImg,
                name: 'Portfolio Grid',
                url: '/pages/portfolio/grid'
            },
            {
                image: portfolioMasonryImg,
                name: 'Portfolio Masonry',
                url: '/pages/portfolio/masonry'
            },
            {
                image: portfolioItemImg,
                name: 'Portfolio Item',
                url: '/pages/portfolio/item'
            },
            {
                image: pricingImg,
                name: 'Pricing',
                url: '/pages/pricing'
            },
            {
                image: helpImg,
                name: 'Help',
                url: '/pages/help'
            },
        ]
    },
    {
        tag: 'account-pages',
        title: 'Inner Pages',
        pages: [
            {
                image: loginImg,
                name: 'Login',
                url: '/auth/login'
            },
            {
                image: signupImg,
                name: 'Register',
                url: '/auth/register'
            },
            {
                image: passwordImg,
                name: 'Forget Password',
                url: '/auth/forgot-password'
            },
            {
                image: confirmImg,
                name: 'Confirm Account',
                url: '/auth/confirm-mail'
            },
        ]
    },
]

export const features: FeatureType[] = [
    {
        icon: 'solar-smartphone-2-bold-duotone',
        title: 'Fully Responsive'
    },
    {
        icon: 'solar-global-bold-duotone',
        title: 'Cross-browser compatible'
    },
    {
        title: 'Bootstrap v5.3.2'
    },
    {
        title: 'Sass Powered'
    },
    {
        icon: 'solar-code-scan-bold-duotone',
        title: 'Easy to customize'
    },
    {
        icon: 'solar-smile-circle-bold-duotone',
        title: 'Developer Friendly'
    },
    {
        icon: 'solar-code-2-bold-duotone',
        title: 'Clean & Easy to Understand Code'
    },
    {
        icon: 'solar-gallery-bold-duotone',
        title: 'Premium SVG Icons'
    },
    {
        icon: 'solar-clipboard-check-bold-duotone',
        title: 'Free Updates'
    }
]