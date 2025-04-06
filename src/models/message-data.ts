import { ContactData } from "./contact-data"

export type MessageData = {
    id: number,
    from: ContactData,
    to: ContactData,
    content: string
}