import React from 'react';
import './index.css';
import {ChatWindow} from './ChatWindow';
import { SendMessage } from './SendMessage';

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            names: ["Left", "Right"],
        };
    }

    sendMessage(message, index)
    {
        const messages = this.state.messages;
        const names = this.state.names;
        if(index==0)
        {
            this.setState({
                messages: messages.concat({Left: message}),
                names: names,
            });
        }
        else
        {
            this.setState({
                messages: messages.concat({Right: message}),
                names: names
            });
        }
    }

    render() {
        return (
            <div>
                <div className="chat">
                    <ChatWindow  
                        state={this.state}
                        name={this.state.names[0]}
                        otherName={this.state.names[1]}
                        className="chat-window-left"
                    />
                    <ChatWindow 
                        state={this.state}
                        name={this.state.names[1]}
                        otherName={this.state.names[0]}
                        className="chat-window-right"
                    />
                </div>
                    <SendMessage
                        index={0}
                        func={(message,index)=> this.sendMessage(message,index)}
                    />
                    <SendMessage
                        index={1}
                        func={(message,index)=> this.sendMessage(message,index)}
                    />
            </div>
        );
    }
}
