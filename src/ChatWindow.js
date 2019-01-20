import React from 'react';
import './index.css';
import {ChatMessage} from './ChatMessage.js';

export class ChatWindow extends React.Component{
    
    render()
    {
        const chatMessages = ChatMessage(this.props);
        return (
            <div>
                <div className={this.props.className}>
                    {chatMessages}
                </div>   
            </div>
        );
    }
}
