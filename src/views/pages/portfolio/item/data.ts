import avatar8 from "@/assets/images/avatars/img-8.jpg";
import avatar5 from "@/assets/images/avatars/img-5.jpg";

export type TestimonialType = {
    review: string,
    user: {
        image: string,
        name: string,
        role: string
    }
}

export const testimonials: TestimonialType[] = [
    {
        review: 'This app is a truly blessing for all professionals! A day to day project management was never easy for me. But with prompt, I can manage more than 100 projects easily.',
        user: {
            image: avatar8,
            name: 'Cersei Lannister',
            role: 'Senior Project Manager'
        }
    },
    {
        review: 'It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!',
        user: {
            image: avatar5,
            name: 'John Stark',
            role: 'Engineering Director'
        }
    },
    {
        review: 'This app is a truly blessing for all professionals! A day to day project management was never easy for me. But with prompt, I can manage more than 100 projects easily.',
        user: {
            image: avatar8,
            name: 'Cersei Lannister',
            role: 'Senior Project Manager'
        }
    },
    {
        review: 'It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!',
        user: {
            image: avatar5,
            name: 'John Stark',
            role: 'Engineering Director'
        }
    },
]