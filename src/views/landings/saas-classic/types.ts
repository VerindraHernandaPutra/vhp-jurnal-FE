import {IconTypes} from "solid-icons";

export type FeatureType = {
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

export type PricingPlanType = {
    name: string
    price: number
    duration: 'week' | 'month' | 'year'
    features: {
        icon: IconTypes
        title: string
    }[]
    isPopular?: boolean
}

export type FAQType = {
    question: string
    answer: string
}