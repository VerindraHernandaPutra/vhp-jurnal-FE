import app4 from "@/assets/images/features/app4.png";
import app3 from "@/assets/images/features/app3.png";

import avatar8 from "@/assets/images/avatars/img-8.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";

type FeatureType = {
    icon: string
    title: string
    description: string
    variant?: string
}

export type TestimonialType = {
    review: string,
    rating: number,
    user: {
        image: string,
        name: string,
        role: string
    }
}

export const features1: FeatureType[] = [
    {
        icon: 'solar-letter-opened-bold-duotone',
        title: 'First feature',
        description: 'We use a customized application tobe specifically designed a testing gnose to keep away for people.',
        variant: 'primary'
    },
    {
        icon: 'solar-shield-check-bold-duotone',
        title: 'Second feature',
        description: 'In order to design a mobile app that is going to be module downloaded and accessed frequently by users.',
        variant: 'success'
    },
    {
        icon: 'solar-bolt-bold-duotone',
        title: 'Third feature',
        description: 'A Private Limited is the most popular type of partnership Malta. The limited liability',
        variant: 'orange'
    },
    {
        icon: 'solar-notification-unread-bold-duotone',
        title: 'Fourth feature',
        description: 'Few derived into talking being in merit long you\'d his the of to had the to duties, it them one',
        variant: 'info'
    },
]

export const features2: FeatureType[] = [
    {
        icon: app4,
        title: 'Quick Access to Tasks',
        description: 'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
    },
    {
        icon: app3,
        title: 'Create Task Easily',
        description: 'Speedy App provides instant information on thousands of hire and buy products.',
    },
    {
        icon: app4,
        title: 'Quick Access to Team',
        description: 'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
    },
]

export const testimonials: TestimonialType[] = [
    {
        review: 'This app is a truly blessing for all professionals! A day to day project management was never easy for me. But with prompt, I can manage more than 100 projects easily.',
        rating: 4.5,
        user: {
            image: avatar8,
            name: 'Cersei Lannister',
            role: 'Senior Project Manager'
        }
    },
    {
        review: 'It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!',
        rating: 5,
        user: {
            image: avatar5,
            name: 'John Stark',
            role: 'Engineering Director'
        }
    },
    {
        review: 'This app is a truly blessing for all professionals! A day to day project management was never easy for me. But with prompt, I can manage more than 100 projects easily.',
        rating: 4,
        user: {
            image: avatar8,
            name: 'Cersei Lannister',
            role: 'Senior Project Manager'
        }
    },
    {
        review: 'It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!',
        rating: 5,
        user: {
            image: avatar5,
            name: 'John Stark',
            role: 'Engineering Director'
        }
    },
]