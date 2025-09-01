import agency1 from "@/assets/images/features/agency1.jpg";
import agency2 from "@/assets/images/features/agency2.jpg";

import avatar8 from "@/assets/images/avatars/img-8.jpg";
import google from "@/assets/images/brands/google.svg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";
import amazon from "@/assets/images/brands/amazon.svg";

import {ProjectType, ServiceType, TestimonialType} from "@/views/landings/portfolio/types";

export const services: ServiceType[] = [
    {
        icon: 'solar-filters-bold-duotone',
        title: "UI/UX Design",
        about: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
        icon: 'solar-layers-bold-duotone',
        title: "Product Design",
        about: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making.",
    },
    {
        icon: 'solar-wallpaper-bold',
        title: "Frontend Development",
        about: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    },
];

export const projects: ProjectType[] = [
    {
        name: 'Project 1',
        tags: ['Branding', 'Interaction', 'Web Design'],
        image: agency1,
        url: ''
    },
    {
        name: 'Project 2',
        tags: ['Branding', 'Web Design', 'Development'],
        image: agency2,
        url: ''
    },
    {
        name: 'Project 3',
        tags: ['Branding', 'Interaction', 'Web Design'],
        image: agency2,
        url: ''
    },
    {
        name: 'Project 4',
        tags: ['Branding', 'Web Design', 'Development'],
        image: agency1,
        url: ''
    },
]

export const testimonials: TestimonialType[] = [
    {
        review: "A very professional, proactive, helpful, trustworthy, valuable...these are some of the words that come to mind when I think about Greeva N.",
        user: {
            image: avatar8,
            name: "Cersei Lannister",
            role: "Senior Project Manager",
            company: google
        }
    },
    {
        review: "A highly professional and gets the job done with great quality. She worked on designing our project management interface and the output was simply awesome. Just perfect!",
        user: {
            image: avatar5,
            name: "John Stark",
            role: "Engineering Director",
            company: amazon
        }
    },
    {
        review: "A very professional, proactive, helpful, trustworthy, valuable...these are some of the words that come to mind when I think about Greeva N.",
        user: {
            image: avatar8,
            name: "Cersei Lannister",
            role: "Senior Project Manager",
            company: google
        }
    },
    {
        review: "A highly professional and gets the job done with great quality. She worked on designing our project management interface and the output was simply awesome. Just perfect!",
        user: {
            image: avatar5,
            name: "John Stark",
            role: "Engineering Director",
            company: amazon
        }
    }
];
