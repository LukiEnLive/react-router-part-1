import "./contact-list-item.scss"
import { ContactData } from "../../../../models/contact-data"

type ContactListItemProperties = {
    contact: ContactData,
    isSelected: boolean,
    onClick: () => void
}

export function ContactListItem({contact, isSelected, onClick}: ContactListItemProperties)
{
    return (
        <div className={`contact-list-item ${isSelected ? "selected" : ""}`} onClick={onClick}>
            <span className="lastname">{contact.lastname}</span> {contact.firstname}
        </div>
    )
}