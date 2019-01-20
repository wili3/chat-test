import React from 'react';
import './index.css';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

export function ChatMessage(props)
{   
    const messageToReturn = props.state.messages.map((message) => {
        if(message[props.name])
        {
            return(
                <div>
                <div className="chat-row-user"></div>
                <div className="chat-box-user">
                    <ScrollIntoViewIfNeeded>
                        <div>
                            <div className="chat-name-user">{props.name}</div>
                            <div className="chat-element-user">{message[props.name]}</div>   
                        </div>
                    </ScrollIntoViewIfNeeded>
                </div>
                </div>
            );
        }
        else if(!message[props.name])
        {
            return(
                <div>
                <div className="chat-row-other"></div>
                <div className="chat-box-other">
                    <ScrollIntoViewIfNeeded>
                    <div>
                        <div className="chat-name-other">{props.otherName}</div>
                        <div className="chat-element-other">{message[props.otherName]}</div>    
                    </div>
                    </ScrollIntoViewIfNeeded>
                </div>
                </div>
            );
        }
    });

    return (
            messageToReturn // here I have to look which chatwindow I belong, if it is right or left and then return the proper elements
    );
}
