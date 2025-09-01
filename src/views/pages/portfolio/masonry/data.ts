import photo3 from "@/assets/images/photos/3.jpg"
import photo4 from "@/assets/images/photos/4.jpg"
import photo5 from "@/assets/images/photos/5.jpg"
import photo6 from "@/assets/images/photos/6.jpg"
import photo9 from "@/assets/images/photos/9.jpg"
import photo12 from "@/assets/images/photos/12.jpg"
import photo13 from "@/assets/images/photos/13.jpg"
import photo14 from "@/assets/images/photos/14.jpg"
import photo15 from "@/assets/images/photos/15.jpg"


export type PortfolioItemType = {
    image: string;
    title: string;
    description: string;
    category: string;
};

export const portfolioItems: PortfolioItemType[] = [
    {
        image: photo9,
        title: "Smart Desk v2.0",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "graphic",
    },
    {
        image: photo14,
        title: "iPhone App",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "graphic",
    },
    {
        image: photo15,
        title: "iPhone App 2",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "photography",
    },
    {
        image: photo6,
        title: "Virtual Receptionist",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "graphic",
    },
    {
        image: photo5,
        title: "Task Manager",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "web",
    },
    {
        image: photo12,
        title: "Task Manager 2",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "illustrator",
    },
    {
        image: photo3,
        title: "Portfolio Manager",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "photography",
    },
    {
        image: photo15,
        title: "Online Conference",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "web",
    },
    {
        image: photo4,
        title: "Smart Office v2.0",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "illustrator",
    },
    {
        image: photo13,
        title: "Virtual Receptionist 2",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        category: "illustrator",
    }
];
