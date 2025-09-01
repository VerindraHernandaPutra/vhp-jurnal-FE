import avatar8 from "@/assets/images/avatars/img-8.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";

import {FiCheck} from 'solid-icons/fi'

import {FeatureType, TestimonialType, PricingPlanType, FAQType} from "@/views/landings/saas-modern/types";

export const features: FeatureType[] = [
    {
        icon: 'solar-shield-user-bold-duotone',
        title: 'Improve Employee Experience',
        description: 'Before we dive into why companies must invest in employee experience (EX), it’s important to understand what this concept entails.',
        variant: 'primary'
    },
    {
        icon: 'solar-user-plus-bold-duotone',
        title: 'Hiring & Onboarding',
        description: 'Post your job, interview candidates and make offers, all on Prompt. Start hiring today.',
        variant: 'success'
    },
    {
        icon: 'solar-chart-square-bold-duotone',
        title: 'People Data & Analytics',
        description: 'Finding committed employees is one of public and private organizations top priorities.',
        variant: 'orange'
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

export const plans: PricingPlanType[] = [
    {
        name: 'Starter',
        price: 49,
        duration: 'month',
        features: [
            {icon: FiCheck, title: 'Up to 600 minutes usage time'},
            {icon: FiCheck, title: 'Use for personal only'},
            {icon: FiCheck, title: 'Add up to 10 attendees'},
            {icon: FiCheck, title: '24x7 Technical support via phone'},
            {icon: FiCheck, title: 'Technical support via email'},
        ]
    },
    {
        name: 'Professional',
        price: 99,
        duration: 'month',
        isPopular: true,
        features: [
            {icon: FiCheck, title: 'Up to 6000 minutes usage time'},
            {icon: FiCheck, title: 'Use for personal or a commercial'},
            {icon: FiCheck, title: 'Add up to 100 attendees'},
            {icon: FiCheck, title: 'Up to 5 teams'},
            {icon: FiCheck, title: 'Technical support via email'},
        ]
    },
    {
        name: 'Enterprise',
        price: 599,
        duration: 'month',
        features: [
            {icon: FiCheck, title: 'Unlimited usage time'},
            {icon: FiCheck, title: 'Use for personal or a commercial'},
            {icon: FiCheck, title: 'Add Unlimited attendees'},
            {icon: FiCheck, title: '24x7 Technical support via phone'},
            {icon: FiCheck, title: 'Technical support via email'},
        ]
    }
]

export const faqs: FAQType[] = [
    {
        question: 'Can I use this template for my client?',
        answer: 'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refer license terms on marketplace.'
    },
    {
        question: 'Can this theme work with WordPress?',
        answer: 'No. This is a HTML template. It won\'t directly with WordPress, though you can convert this into WordPress compatible theme.'
    },
    {
        question: 'How do I get help with the theme?',
        answer: 'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.'
    },
    {
        question: 'Will you regularly give updates of Prompt?',
        answer: 'Yes, We will update the Prompt regularly. All the future updates would be available without any cost.'
    }
]