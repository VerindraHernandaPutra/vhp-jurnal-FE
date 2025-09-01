import avatar8 from "@/assets/images/avatars/img-8.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";

import {FiCheck} from 'solid-icons/fi'

import {TestimonialType, PricingPlanType,} from "@/views/landings/software/types";

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