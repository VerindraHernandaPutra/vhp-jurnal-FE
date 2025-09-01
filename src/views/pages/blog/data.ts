import post1 from "@/assets/images/blog/post1.jpg"
import avatar2 from "@/assets/images/avatars/img-2.jpg"
import avatar4 from "@/assets/images/avatars/img-4.jpg"

import crypto1 from "@/assets/images/blog/crypto1.jpg"
import crypto2 from "@/assets/images/blog/crypto2.jpg"

export type BlogType = {
    image: string;
    title: string;
    description: string;
    category: string;
    readTime?: string;
    publishedAt?: string;
    author?: {
        image: string;
        name: string;
    };
    url: string;
    variant?: string
};

export const blogs1: BlogType[] = [
    {
        image: post1,
        title: "Announcing the free upgrade for the subscribed plans",
        description:
            "We are glad to announce that we are going to upgrade all the subscribed accounts with the premium features this week...",
        category: "Announcement",
        readTime: "3 min read",
        publishedAt: "11 Mar, 2020",
        author: {
            image: avatar4,
            name: "Emily Blunt",
        },
        url: "/pages/blog/post",
        variant: 'danger'
    },
    {
        image: post1,
        title: "Will Web Design Ever Rule the World?",
        description:
            "The web has changed a lot in the current era. Many new trends are being used in the market at the moment...",
        category: "Community",
        readTime: "5 min read",
        publishedAt: "9 Mar, 2020",
        author: {
            image: avatar2,
            name: "Greeva N",
        },
        url: "/pages/blog/post",
        variant: 'info'
    }
];

export const blogs2: BlogType[] = [
    {
        image: crypto1,
        title: "Introducing new blazing fast user interface",
        description:
            "Introducing the blazing fast user interface. The new UI is fast, secure, and most user-friendly...",
        category: "Announcement",
        url: "/pages/blog/post",
        variant: 'danger'
    },
    {
        image: crypto2,
        title: "What you should know before considering the prompt",
        description:
            "We are giving a pretty extensive guideline and context before you make your decision to consider the prompt...",
        category: "Tutorial",
        url: "/pages/blog/post",
        variant: 'success'
    },
    {
        image: crypto1,
        title: "Your Way to a Successful Sales Campaign",
        description:
            "Explore the latest guidelines for creating a successful online sales campaign using Google Ads or Facebook Ads...",
        category: "Community",
        url: "/pages/blog/post",
        variant: 'info'
    }
];
