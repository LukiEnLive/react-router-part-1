import { ContactList } from "../../components/contacts/contact-list/contact-list";
import { Messenger } from "../../components/messenger/messenger/messenger";
import { ContactData } from "../../../models/contact-data";
import { useEffect, useState } from "react";
import { authService } from "../../../services/auth-service";
import { useNavigate } from "react-router";
import "./MessengerView.css";

export function MessengerView() {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    
    useEffect(() => {
        if (!authService.isConnected()){
            goToLogin();   
        }
    }, []);

    const [selectedContact, setSelectedContact] = useState<ContactData | null>(null);

    const contacts: ContactData[] = [
        { id: 1, lastname: "Chassel", firstname: "Quentin", online: true },
        { id: 2, lastname: "Seculardon", firstname: "Bastinos", online: false },
    ];

    const from: ContactData = { id: 0, lastname: "BG", firstname: "Luki", online: true };

    return (
        <div className="messenger-view">
            <ContactList 
                contacts={contacts} 
                selection={selectedContact} 
                onClick={(contact) => setSelectedContact(contact)} 
            />
            {selectedContact && <Messenger from={from} to={selectedContact} />}
        </div>
    );
}