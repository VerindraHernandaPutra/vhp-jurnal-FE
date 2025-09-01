export type ProjectType = {
    date: string;
    title: string;
    category: string;
    description: string;
    progress: number;
    variant: string;
    team: { name: string; avatar: string }[];
};

export type ProfileOverviewType = {
    image: string
    name: string
    role: string
    email: string
    contactNo: number
    projectCompletion: number
    rating: number
}

type GrowthType = {
    value: number;
    type: 'amount' | 'percentage'
    duration: 'week' | 'month' | 'year';
}

export type StatisticType = {
    icon?: string;
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: 'week' | 'month' | 'year';
    growths?: GrowthType[];
    variant?: string;
}

export type TaskType = {
    title: string;
    dueDate: string;
    subTasks: {
        completed: number
        total: number
    }
    comments: number;
    priority: "high" | "medium" | "low";
};
