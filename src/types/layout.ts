import {IconTypes} from "solid-icons";

export type MenuItemType = {
    key: string
    label: string
    url?: string
    icon?: string
    children?: MenuItemType[]
    parentKey?: string
    variant?: string
    menuSize?: 'lg' | 'md'
}

export type LinkType = {
    label: string
    url: string
    icon?: IconTypes
    badge?: {
        text: string
        variant: string
    }
}

export type SlideType = {
    image: string
    title: string
    description: string
}