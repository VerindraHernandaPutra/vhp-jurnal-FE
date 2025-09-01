import {currency} from "@/helpers";
import avatar1 from "@/assets/images/avatars/img-1.jpg";
import avatar2 from "@/assets/images/avatars/img-2.jpg";
import avatar3 from "@/assets/images/avatars/img-3.jpg";
import avatar4 from "@/assets/images/avatars/img-4.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";
import avatar6 from "@/assets/images/avatars/img-6.jpg";
import avatar7 from "@/assets/images/avatars/img-7.jpg";
import avatar8 from "@/assets/images/avatars/img-8.jpg";

type StatisticType = {
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
    about: string
}

export type TeamMemberType = {
    name: string;
    role: string;
    image: string;
};

export const statistics: StatisticType[] = [
    {
        title: "Products Built",
        value: 100,
        suffix: "+",
        about: "Helped clients across the globe",
    },
    {
        title: "Revenue Generated",
        value: 21,
        prefix: currency,
        suffix: "M+",
        about: "Across 10+ countries",
    },
    {
        title: "Satisfied Clients",
        value: 100,
        suffix: "+",
        about: "Across 100+ locations",
    },
    {
        title: "Awards Won",
        value: 10,
        suffix: "+",
        about: "On Awwwards, CSS Design Awards",
    },
];

export const members: TeamMemberType[] = [
    {name: "Ana Russo", role: "CEO", image: avatar1},
    {name: "Danette Payne", role: "CTO", image: avatar2},
    {name: "Tammy Ward", role: "VP, Product Development", image: avatar3},
    {name: "Paul Moore", role: "Back-End Developer", image: avatar4},
    {name: "Harry Burris", role: "PHP Developer", image: avatar5},
    {name: "Patricia Ferraro", role: "Web Designer", image: avatar6},
    {name: "Robert Smith", role: "Graphic Designer", image: avatar7},
    {name: "Lindsay Clark", role: "Web Designer", image: avatar8},
    {name: "Lindsay Clark", role: "Front-End Developer", image: avatar2},
    {name: "Ernest Griffith", role: "PHP Developer", image: avatar4},
    {name: "Cecelia Poole", role: "Back-End Developer", image: avatar6},
    {name: "Morris Hall", role: "Graphic Designer", image: avatar3},
];