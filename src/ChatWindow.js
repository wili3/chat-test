import React from 'react';
import './index.css';
import {ChatMessage} from './ChatMessage.js';

export class ChatWindow extends React.Component{
    handleShow(i)
    {
        
    }
    
    render()
    {
        const chatMessages = ChatMessage(this.props);
        if(chatMessages.length > 0)
        {   
            const lastMessage = chatMessages[chatMessages.length-1];
        }

        return (
            <div>
                <div className="chat-window">
                    <ul>
                    {chatMessages}
                    </ul>
                </div>   
            </div>
        );
    }
}
