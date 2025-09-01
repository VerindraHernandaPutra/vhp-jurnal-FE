import img8 from "@/assets/images/photos/8.jpg"
import img5 from "@/assets/images/photos/5.jpg"
import img4 from "@/assets/images/photos/4.jpg"

import google from "@/assets/images/brands/google.svg"
import amazon from "@/assets/images/brands/amazon.svg"

import avatar8 from "@/assets/images/avatars/img-8.jpg"
import avatar5 from "@/assets/images/avatars/img-5.jpg"

import {FeatureType, SpaceType, StatisticType, TestimonialType} from "@/views/landings/coworking/types";

export const statistics: StatisticType[] = [
    {
        title: 'Meeting Rooms',
        value: 21
    },
    {
        title: 'Event Spaces',
        value: 51
    },
    {
        title: 'Studio Rooms',
        value: 11
    },
    {
        title: 'Seating Spaces',
        value: 500,
        suffix: '+'
    },
]

export const features: FeatureType[] = [
    {
        icon: 'solar-home-wifi-angle-bold-duotone',
        title: 'High-Speed Wireless',
        description: 'We\'ve watched Bootstrap grow up over the years and understand it better than almost anyone.'
    },
    {
        icon: 'solar-users-group-two-rounded-bold-duotone',
        title: 'Community Events',
        description: 'You have a business to run. Stop working about cross-browser keeping your components up to date.'
    },
    {
        icon: 'solar-armchair-2-bold-duotone',
        title: 'Exercise Facilities',
        description: 'Replacing a maintains the amount of lines. When replacing a selection objectives and then create.'
    },
    {
        icon: 'solar-sofa-2-bold-duotone',
        title: 'Comfortable Lounges',
        description: 'Risus sed vulputate odio ut enim blandit. Malesuada consequat interdum mattis facilisis.'
    },
]

export const spaces: SpaceType[] = [
    {
        image: img8,
        type: "Shared Desk",
        about: "Access to shared workspace and conference rooms. Most suitable to individuals looking for company.",
        capacity: "1-5 Shared Spaces",
    },
    {
        image: img5,
        type: "Dedicated Desk",
        about: "A dedicated desk space for you, with 24/7 access to premium amenities and conference rooms.",
        capacity: "1-5 Dedicated Spaces",
    },
    {
        image: img4,
        type: "Event Space",
        about: "An exclusive venue designed specifically for events of all kinds, from conferences to celebrations.",
        capacity: "Up to 200 People",
    }
]

export const testimonials: TestimonialType[] = [
    {
        review: "Great office and great location. Worth the money if it makes sense for your business.",
        user: {
            image: avatar8,
            name: "Cersei Lannister",
            role: "Senior Project Manager",
            company: google
        }
    },
    {
        review: "Awesome vibe and great staff! Top co-working spots in the city! Loved to be here!",
        user: {
            image: avatar5,
            name: "John Stark",
            role: "Engineering Director",
            company: amazon
        }
    },
    {
        review: "Great office and great location. Worth the money if it makes sense for your business.",
        user: {
            image: avatar8,
            name: "Cersei Lannister",
            role: "Senior Project Manager",
            company: google
        }
    },
    {
        review: "Awesome vibe and great staff! Top co-working spots in the city! Loved to be here!",
        user: {
            image: avatar5,
            name: "John Stark",
            role: "Engineering Director",
            company: amazon
        }
    }
];