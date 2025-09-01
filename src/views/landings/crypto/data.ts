import crypto1 from "@/assets/images/blog/crypto1.jpg";
import crypto2 from "@/assets/images/blog/crypto2.jpg";
import crypto3 from "@/assets/images/blog/crypto3.jpg";

import {BlogType, CoinType, ServiceType, StatisticType} from "@/views/landings/crypto/types";
import {currency} from "@/helpers";

export const coins: CoinType[] = [
    {
        icon: 'fa6-brands:bitcoin',
        name: "Bitcoin",
        variant: '#F7931A'
    },
    {
        icon: 'fa6-brands:ethereum',
        name: "Ethereum",
        variant: '#627EEA'
    },
    {
        icon: 'fa6-solid:t',
        name: "Tether",
        variant: '#26A17B'
    },
    {
        icon: 'fa6-solid:lock',
        name: "Chainlink",
        variant: '#01a6fb'
    },
    {
        icon: 'fa6-solid:diamond',
        name: "Basic Attention Token",
        variant: '#FF5000'
    },
    {
        icon: 'fa6-brands:dochub',
        name: "Dash",
        variant: '#008CE7'
    },
    {
        icon: 'fa6-brands:dropbox',
        name: "Binance Coin",
        variant: '#F3BA2F'
    },
    {
        icon: 'fa6-brands:tiktok',
        name: "Tezos",
        variant: '#A6E000'
    }
];

export const services: ServiceType[] = [
    {
        icon: 'solar-shield-check-bold-duotone',
        title: "Secure & Encrypted Transactions",
        about: "Advanced payment and processing technologies, fine-tuned from more than 3 years of development.",
    },
    {
        icon: 'solar-card-bold-duotone',
        title: "Transparent Fees",
        about: "Barbelless catfish pelican gulper candlefish thornfish Gulf menhaden ribbonbearer riffle.",
    },
    {
        icon: 'solar-smile-circle-bold-duotone',
        title: "Easy to Use",
        about: "Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!",
    },
    {
        icon: 'solar-phone-calling-bold-duotone',
        title: "Quality Support",
        about: "Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.",
    }
];

export const statistics: StatisticType[] = [
    {
        value: 50,
        title: "Value transacted",
        about: "in overall sell/buy transactions",
        prefix: currency,
        suffix: "M+",
    },
    {
        value: 2.1,
        title: "Transactions Processed",
        about: "across 10+ countries",
        suffix: "M+",
    },
    {
        value: 2,
        title: "Satisfied Customers",
        about: "across 100+ locations",
        suffix: "M+",
    },
    {
        value: 4.5,
        title: "Star App Rating",
        about: "on Google Play & Apple Store",
    }
];

export const blogs: BlogType[] = [
    {
        image: crypto1,
        category: "Announcement",
        variant: "orange",
        publishedOn: "May 19 2020",
        readTime: "5 min",
        title: "Introducing blazing fast new user interface",
        url: "",
    },
    {
        image: crypto3,
        category: "Bitcoin",
        variant: "danger",
        publishedOn: "May 18 2020",
        readTime: "8 min",
        title: "What you should know before buying bitcoin",
        url: "",
    },
    {
        image: crypto2,
        category: "Event",
        variant: "primary",
        publishedOn: "May 13 2020",
        readTime: "2 min",
        title: "A biggest crypto event to attend this month",
        url: "",
    }
];