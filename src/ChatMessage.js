import React from 'react';
import './index.css';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

export function ChatMessage(props)
{   
    const messageToReturn = props.state.messages.map((message) => {
        if(message[props.name])
        {
            return(
                <ScrollIntoViewIfNeeded>
                <div>
                    <div className="chat-name-user">{props.name}</div>
                    <div className="chat-element-user">{message[props.name]}</div>   
                </div>
                </ScrollIntoViewIfNeeded>
            );
        }
        else if(!message[props.name])
        {
            return(
                <ScrollIntoViewIfNeeded>
                <div>
                    <div className="chat-name-other">{props.otherName}</div>
                    <div className="chat-element-other">{message[props.otherName]}</div>    
                </div>
                </ScrollIntoViewIfNeeded>
            );
        }
    });

    return (
            messageToReturn // here I have to look which chatwindow I belong, if it is right or left and then return the proper elements
    );
}
