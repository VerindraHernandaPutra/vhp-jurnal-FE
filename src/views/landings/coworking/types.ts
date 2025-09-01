export type StatisticType = {
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
}

export type FeatureType = {
    icon: string,
    title: string,
    description: string,
}

export type SpaceType = {
    image: string,
    type: string,
    about: string,
    capacity: string
}

export type TestimonialType = {
    review: string
    user: {
        image: string,
        name: string,
        role: string,
        company: string,
    }
}