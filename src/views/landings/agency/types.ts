export type ServiceType = {
    icon: string;
    name: string;
    about: string;
    variant?: string
}

export type ProjectType = {
    name: string
    tags: string[]
    image: string
    url: string
}

export type BlogType = {
    tag: string
    image: string
    publishedOn: string
    title: string
    description: string
    url: string
}