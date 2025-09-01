export type FeatureType = {
    icon: string;
    title: string;
    description: string;
    variant: string;
};

export type TestimonialType = {
    review: string
    user: {
        image: string
        name: string
        role: string
        company: string
    }
}