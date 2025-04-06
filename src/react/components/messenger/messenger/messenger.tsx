import "./messenger.scss"

import { MessageEditor } from "../message-editor/message-editor";
import { MessageList } from "../message-list/message-list";
import { ContactData } from "../../../../models/contact-data";
import { useEffect, useState } from "react";
import { MessageData } from "../../../../models/message-data";

type MessengerProperties = {
    from: ContactData,
    to: ContactData,
}

export function Messenger({from, to}: MessengerProperties)
{
    const [messages, setMessages] = useState<MessageData[]>([]);
    
    const loadMessages = () => {
        setMessages([
            {id: 1, from: from, to: to, content: "Salut !"},
            {id: 2, from: to, to: from, content: "Hello ! Comment vas tu ?"},
            {id: 3, from: from, to: to, content: "Ca va, et toi ?"},
            {id: 4, from: to, to: from, content: "Ca va ! Premier barbecue aujourd'hui, l'été arrive !"},
        ])
    }

    const sendMessage = (message: string) => {
        setMessages([...messages, {id: (messages[messages.length - 1]?.id ?? 0) + 1, from: from, to: to, content: message}])
    }

    useEffect(() => {
        loadMessages();
    }, [])

    return (
        <div className="messenger">
            <MessageList messages={messages} from={from} />
            <MessageEditor onSend={sendMessage} />
        </div>
    )
}