import avatar8 from "@/assets/images/avatars/img-8.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";
import {ProfileOverviewType, ProjectType, StatisticType, TaskType} from "@/views/admin/dashboard/types";
import {currency} from "@/helpers";

export const profileOverview: ProfileOverviewType = {
    image: avatar8,
    name: "Ms. Greeva Navadiya",
    role: "Web & Graphic Designer",
    email: "greeva@coderthemes.com",
    contactNo: 123456789,
    projectCompletion: 85,
    rating: 7.5,
};

export const statistics1: StatisticType[] = [
    {
        icon: 'tabler-square-rounded-check',
        title: 'Tasks Completed',
        value: 21,
        variant: 'success'
    },
    {
        icon: 'tabler-edit',
        title: 'Tasks Completed',
        value: 21,
        variant: 'info'
    },
]

export const statistics2: StatisticType =
    {
        title: "Revenue",
        value: 2100.0,
        prefix: currency,
        duration: "week",
        growths: [
            {value: 15, type: 'percentage', duration: "week"},
            {value: -10, type: 'percentage', duration: "month"},
        ],
    }

export const projects: ProjectType[] = [
    {
        date: "Aug 09, 2020",
        title: "Shreyu - Design Updates",
        category: "Designing",
        description: "Update Shreyu with modern and latest trends in industry",
        progress: 75,
        variant: "primary",
        team: [
            {name: "Member 1", avatar: avatar8},
            {name: "Member 2", avatar: avatar5},
        ],
    },
    {
        date: "Aug 10, 2020",
        title: "Prompt v2.0",
        category: "Planning",
        description: "Plan new features and functionality for Prompt landing",
        progress: 50,
        variant: "orange",
        team: [
            {name: "Member 1", avatar: avatar8},
            {name: "Member 2", avatar: avatar5},
        ],
    },
    {
        date: "Aug 11, 2020",
        title: "Hyper React v4.0",
        category: "Development",
        description: "Update Shreyu with modern and latest trends in industry",
        progress: 60,
        variant: "info",
        team: [
            {name: "Member 1", avatar: avatar8},
            {name: "Member 2", avatar: avatar5},
        ],
    },
];

export const tasks: TaskType[] = [
    {
        title: "Draft the new contract document for sales team",
        dueDate: "Today 10pm",
        subTasks: {
            completed: 3,
            total: 7,
        },
        comments: 21,
        priority: "high"
    },
    {
        title: "iOS App home page design",
        dueDate: "Today 5pm",
        subTasks: {
            completed: 10,
            total: 11,
        },
        comments: 5,
        priority: "medium"
    },
    {
        title: "Enable analytics tracking",
        dueDate: "Tomorrow 5pm",
        subTasks: {
            completed: 5,
            total: 11,
        },
        comments: 7,
        priority: "medium"
    },
    {
        title: "Kanban board design",
        dueDate: "Sep 11, 3pm",
        subTasks: {
            completed: 0,
            total: 5,
        },
        comments: 3,
        priority: "low"
    },
];
