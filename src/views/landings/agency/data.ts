import agency1 from "@/assets/images/features/agency1.jpg"
import agency2 from "@/assets/images/features/agency2.jpg"

import coworking1 from "@/assets/images/hero/coworking1.jpg"
import coworking2 from "@/assets/images/hero/coworking2.jpg"

import {BlogType, ProjectType, ServiceType} from "@/views/landings/agency/types";

export const services: ServiceType[] = [
    {
        icon: 'solar-pallete-2-bold-duotone',
        name: 'User Experience Design',
        about: 'Following the best process that a great design teams use to create products that provide meaningful and relevant experiences to users',
        variant: 'primary'
    },
    {
        icon: 'solar-album-bold-duotone',
        name: 'Front End Development',
        about: 'Development of the websites for businesses of all sizes and shapes and covering a small to enterprise organizations',
        variant: 'orange'
    },
    {
        icon: 'solar-settings-bold-duotone',
        name: 'Brand Identity Design',
        about: 'Making a new identities for your brand with an effective collaboration and considered design. We treat your brand like our own',
        variant: 'success'
    }
]

export const projects: ProjectType[] = [
    {
        name: 'Project 1',
        tags: ['Branding', 'Interaction', 'Web Design'],
        image: agency1,
        url: ''
    },
    {
        name: 'Project 2',
        tags: ['Branding', 'Web Design', 'Development'],
        image: agency2,
        url: ''
    },
    {
        name: 'Project 3',
        tags: ['Branding', 'Interaction', 'Web Design'],
        image: agency2,
        url: ''
    },
    {
        name: 'Project 4',
        tags: ['Branding', 'Web Design', 'Development'],
        image: agency1,
        url: ''
    },
]

export const blogs: BlogType[] = [
    {
        tag: 'Design',
        image: coworking1,
        publishedOn: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'Single page websites are taking over the world, and that\'s why I would like you to present the best',
        url: ''
    },
    {
        tag: 'Development',
        image: coworking2,
        publishedOn: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to',
        url: ''
    },
    {
        tag: 'Design',
        image: coworking1,
        publishedOn: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop features',
        url: ''
    },
]

export const openings = [
    {
        position: 'Front-End Developer',
        place: 'Los Angeles',
        type: 'Remote'
    },
    {
        position: 'Community Manager',
        place: 'New York',
        type: 'Full-Time'
    },
    {
        position: 'UX/UI Designer',
        place: 'New York',
        type: 'Full-Time'
    },
]