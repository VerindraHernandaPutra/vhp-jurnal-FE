type QueryType = {
    icon: string;
    title: string;
    queries: {
        label: string;
        url: string;
    }[];
};

type FAQType = {
    question: string
    answer: string
}

export const queries: QueryType[] = [
    {
        icon: "solar-code-square-line-duotone",
        title: "Getting started",
        queries: [
            {label: "General information", url: "#"},
            {label: "Signup help", url: "#"},
            {label: "Preparing the documents", url: "#"}
        ]
    },
    {
        icon: "solar-shield-user-bold-duotone",
        title: "Managing my account",
        queries: [
            {label: "Account information", url: "#"},
            {label: "Identity verification", url: "#"},
            {label: "Linking a payment method", url: "#"}
        ]
    },
    {
        icon: "solar-sort-horizontal-line-duotone",
        title: "API & Integrations",
        queries: [
            {label: "Rest API Integrations", url: "#"},
            {label: "API SDKs", url: "#"},
            {label: "Embed scripts", url: "#"}
        ]
    }
];

export const faqs: FAQType[] = [
    {
        question: 'Can I use this template for my client?',
        answer: 'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refer license terms on marketplace.'
    },
    {
        question: 'Can this theme work with WordPress?',
        answer: 'No. This is a HTML template. It won\'t directly with WordPress, though you can convert this into WordPress compatible theme.'
    },
    {
        question: 'How do I get help with the theme?',
        answer: 'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.'
    },
    {
        question: 'Will you regularly give updates of Prompt?',
        answer: 'Yes, We will update the Prompt regularly. All the future updates would be available without any cost.'
    }
]
