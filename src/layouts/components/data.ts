import {FiAperture, FiSettings, FiUnlock, FiUser} from "solid-icons/fi";
import {LinkType, MenuItemType} from "@/types/layout";

type NotificationType = {
    icon: string;
    text: string;
    timestamp: string;
    variant: string;
}

export const accountMenuItems: MenuItemType[] = [
    {
        key: 'home',
        icon: 'solar-widget-5-bold-duotone',
        label: 'Home',
        url: '/admin/dashboard'
    },
    {
        key: 'projects',
        icon: 'solar-folder-2-bold-duotone',
        label: 'Blog',
        url: ''
    },
    {
        key: 'tasks',
        icon: 'solar-hamburger-menu-bold-duotone',
        label: 'Tasks',
        url: ''
    },
    {
        key: 'reports',
        icon: 'solar-chart-square-bold-duotone',
        label: 'Reports',
        url: ''
    },
    {
        key: 'settings',
        icon: 'solar-tuning-square-2-bold-duotone',
        label: 'Settings',
        url: '/admin/settings'
    },
]

export const notifications: NotificationType[] = [
    {
        icon: 'tabler-user-plus',
        text: 'New User Registered',
        timestamp: '2 min ago',
        variant: 'primary'
    },
    {
        icon: 'tabler-photo-plus',
        text: 'A new comment on your post',
        timestamp: '3 min ago',
        variant: 'orange'
    },
    {
        icon: 'tabler-mail-plus',
        text: 'A new message from Anant',
        timestamp: '10 min ago',
        variant: 'success'
    },
    {
        icon: 'tabler-thumb-up',
        text: 'A new like on your comment',
        timestamp: '14 min ago',
        variant: 'danger'
    },
]

export const profileMenuItems = [
    {
        icon: FiUser,
        label: 'Profile'
    },
    {
        icon: FiSettings,
        label: 'Settings'
    },
    {
        icon: FiAperture,
        label: 'Support'
    },
    {
        icon: FiUnlock,
        label: 'Sign Out'
    },
]

export const footerLinks: LinkType[] = [
    {
        label: 'About',
        url: ''
    },
    {
        label: 'Privacy',
        url: ''
    },
    {
        label: 'Terms',
        url: ''
    },
    {
        label: 'Developers',
        url: ''
    },
    {
        label: 'Support',
        url: ''
    },
    {
        label: 'Careers',
        url: '',
        badge: {
            text: 'We\'re hiring',
            variant: 'info'
        }
    }
]