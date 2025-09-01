import avatar8 from "@/assets/images/avatars/img-8.jpg";
import google from "@/assets/images/brands/google.svg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";
import amazon from "@/assets/images/brands/amazon.svg";

import {FeatureType, TestimonialType} from "@/views/landings/marketing/types";

export const features: FeatureType[] = [
    {
        icon: 'solar-letter-bold-duotone',
        title: "Automated Campaigns",
        description: "Praesent ipsum libero, sollicitudin elementum et, condimentum non augue.",
        variant: "primary",
    },
    {
        icon: 'solar-diagram-up-bold-duotone',
        title: "Business Analytics",
        description: "Mauris dapibus blandit hendrerit. Proin auctor est at bibendum odio faucibus sodales.",
        variant: "orange",
    },
    {
        icon: 'solar-settings-bold-duotone',
        title: "Easy Setup",
        description: "Fusce mattis nibh vel tortor scelerisque, a pretium dolor posuere.",
        variant: "info",
    },
];

export const testimonials: TestimonialType[] = [
    {
        review: "This app is a truly blessing for all professionals! A day to day project management was never easy for me. But with prompt, I can manage more than 100 projects easily.",
        user: {
            image: avatar8,
            name: "Cersei Lannister",
            role: "Senior Project Manager",
            company: google
        }
    },
    {
        review: "It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!",
        user: {
            image: avatar5,
            name: "John Stark",
            role: "Engineering Director",
            company: amazon
        }
    },
    {
        review: "This app is a truly blessing for all professionals! A day to day project management was never easy for me. But with prompt, I can manage more than 100 projects easily.",
        user: {
            image: avatar8,
            name: "Cersei Lannister",
            role: "Senior Project Manager",
            company: google
        }
    },
    {
        review: "It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!",
        user: {
            image: avatar5,
            name: "John Stark",
            role: "Engineering Director",
            company: amazon
        }
    }
];