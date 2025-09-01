import {FiCheck} from "solid-icons/fi";
import {BenefitType, FAQType, PricingPlanType} from "@/views/pages/pricing/types";

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

export const benefits: BenefitType[] = [
    {
        icon: 'solar-incoming-call-rounded-bold-duotone',
        title: 'Technical Support',
        description: 'Our professional technical support team will help you out at every step'
    },
    {
        icon: 'solar-compass-bold-duotone',
        title: 'Technology',
        description: 'A special training to get start with the platform by professionals'
    },
    {
        icon: 'solar-chart-2-bold-duotone',
        title: 'Growth Analysis',
        description: 'A dedicated team to get insights around your growth every month'
    },
    {
        icon: 'solar-cup-star-bold-duotone',
        title: 'Rewards',
        description: 'A special reward for the most performing account every month'
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