import {IconTypes} from "solid-icons";

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

export type BenefitType = {
    icon: string
    title: string
    description: string
}

export type FAQType = {
    question: string
    answer: string
}