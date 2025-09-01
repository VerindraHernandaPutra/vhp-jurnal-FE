import slack from "@/assets/images/brands/slack.png"
import fb from "@/assets/images/brands/fb.png"
import salesforce from "@/assets/images/brands/salesforce.jpg"
import at from "@/assets/images/brands/at.png"
import gSheet from "@/assets/images/brands/gsheet.png"
import ac from "@/assets/images/brands/ac.jpeg"

export type AppType = {
    image: string
    name: string
    about: string
}

export const apps: AppType[] = [
    {
        image: slack,
        name: 'Slack',
        about: 'Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go'
    },
    {
        image: fb,
        name: 'Facebook Lead Ads',
        about: 'Facebook lead ads make signing up for business information easy for people and more valuable for businesses'
    },
    {
        image: salesforce,
        name: 'Salesforce',
        about: 'Salesforce is a leading enterprise customer relationship manager (CRM) application'
    },
    {
        image: at,
        name: 'Airtable',
        about: 'Organize anything with Airtable, a modern database created for everyone'
    },
    {
        image: gSheet,
        name: 'GSheet',
        about: 'Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data'
    },
    {
        image: ac,
        name: 'ActiveCampaign',
        about: 'ActiveCampaign combines all aspects of email marketing into a single and easy-to-use platform'
    },
]