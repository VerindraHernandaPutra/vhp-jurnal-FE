export type CoinType = {
    icon: string;
    name: string;
    variant: string;
};

export type ServiceType = {
    icon: string;
    title: string;
    about: string;
}

export type StatisticType = {
    value: number
    title: string
    about: string
    prefix?: string
    suffix?: string
}

export type BlogType = {
    image: string;
    category: string;
    variant: string;
    publishedOn: string;
    readTime: string;
    title: string;
    url: string;
};