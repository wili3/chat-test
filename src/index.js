import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ChatMessage(props)
{   
    const messageToReturn = props.state.messages.map((message) => {
        if(message[props.name])
        {
            return(
                <div>
                    <div className="chat-name-user">{props.name}</div>
                    <div className="chat-element-user">{message[props.name]}</div>    
                </div>
            );
        }
        else if(!message[props.name])
        {
            return(
                <div>
                    <div className="chat-name-other">{props.otherName}</div>
                    <div className="chat-element-other">{message[props.otherName]}</div>    
                </div>
            );
        }
    });

    return (
            messageToReturn // here I have to look which chatwindow I belong, if it is right or left and then return the proper elements
    );
}

class ChatWindow extends React.Component{
    render()
    {
        const chatMessages = ChatMessage(this.props);
        return (
            <div>
                <div className="chat-window">
                    {chatMessages}
                </div>   
            </div>
        );
    }
}

class Chat extends React.Component {
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
  
// ========================================

ReactDOM.render(
    <Chat/>,
    document.getElementById('root')
);
