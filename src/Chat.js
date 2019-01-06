import React from 'react';
import './index.css';
import {ChatWindow} from './ChatWindow';

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{Left:"Hola que tal?", Timestamp:"whatever"}, {Right:"Muy bien", Timestamp:"whatever"}],
            names: ["Left", "Right"],
        };
    }

    send(i)
    {
        const messages = this.state.messages;
        const names = this.state.names;
        this.setState({
            messages: messages.concat({Left: "New message"}),
            names: names
        });
    }

    render() {
        return (
            <div>
                <div className="chat">
                    <ChatWindow  
                        state={this.state}
                        name={this.state.names[0]}
                        otherName={this.state.names[1]}
                    />
                    <ChatWindow 
                        state={this.state}
                        name={this.state.names[1]}
                        otherName={this.state.names[0]}
                    />
                </div>
                <div className="input-field">
                    <button className="send-button" onClick={() => this.send(0)}>Send</button>
                </div>
                <div className="input-field">
                    <button className="send-button" onClick={() => this.send(1)}>Send</button>
                </div>
            </div>
        );
    }
}
