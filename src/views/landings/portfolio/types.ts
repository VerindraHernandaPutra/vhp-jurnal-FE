export type ServiceType = {
    icon: string;
    title: string;
    about: string;
};

export type ProjectType = {
    name: string
    tags: string[]
    image: string
    url: string
}

export type TestimonialType = {
    review: string
    user: {
        image: string
        name: string
        role: string
        company: string
    }
}