import photo1 from "@/assets/images/photos/1.jpg";
import photo3 from "@/assets/images/photos/3.jpg";
import photo4 from "@/assets/images/photos/4.jpg";
import photo5 from "@/assets/images/photos/5.jpg";
import photo6 from "@/assets/images/photos/6.jpg";
import photo7 from "@/assets/images/photos/7.jpg";

export type PortfolioItemType = {
    image: string;
    title: string;
    description: string;
    categories: string[];
};

export const portfolioItems: PortfolioItemType[] = [
    {
        image: photo1,
        title: "Smart Desk v2.0",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        categories: ["web", "illustrator", "graphic"]
    },
    {
        image: photo7,
        title: "Task Manager",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        categories: ["graphic"]
    },
    {
        image: photo3,
        title: "Portfolio Manager",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        categories: ["web", "photography"]
    },
    {
        image: photo4,
        title: "Smart Office v2.0",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        categories: ["illustrator"]
    },
    {
        image: photo5,
        title: "Online Conference",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        categories: ["web", "photography"]
    },
    {
        image: photo6,
        title: "Virtual Receptionist",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        categories: ["graphic"]
    }
];
