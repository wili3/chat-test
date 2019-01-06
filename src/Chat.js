import React from 'react';
import './index.css';
import {ChatWindow} from './ChatWindow';

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            names: ["Left", "Right"],
            left: "",
            right: "",
        };
        this.addValueLeft = this.addValueLeft.bind(this);
        this.updateInputLeft = this.updateInputLeft.bind(this);

        this.addValueRight = this.addValueRight.bind(this);
        this.updateInputRight = this.updateInputRight.bind(this);
    }

    send(i)
    {
        const messages = this.state.messages;
        const names = this.state.names;
        if(i==0)
        {
            this.setState({
                messages: messages.concat({Left: this.state.left}),
                names: names,
                left: ""
            });
        }
        else
        {
            this.setState({
                messages: messages.concat({Right: this.state.right}),
                names: names,
                right: ""
            });
        }
    }

    addValueLeft(evt)
    {
      evt.preventDefault();
      if(this.state.left != "")
      {
        this.send(0);
        evt.target.reset();
      }
      return false;
    }

    updateInputLeft(evt){
        this.setState({
            messages: this.state.messages,
            names: this.state.names,
            right: this.state.right,
            left: evt.target.value
        });   
    }

    addValueRight(evt)
    {
      evt.preventDefault();
      if(this.state.right != "")
      {
        evt.target.reset();
        this.send(1);
      }
      return false;
    }

    updateInputRight(evt){
        this.setState({
            messages: this.state.messages,
            names: this.state.names,
            right: evt.target.value,
            left: this.state.left
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
                    <form onSubmit={this.addValueLeft}>
                        <input className="input-field-text" type="text" onChange={this.updateInputLeft} /><br/><br/>
                        <input className="send-button" type="submit" value="Send"/>
                    </form>
                </div>
                <div className="input-field">
                    <form onSubmit={this.addValueRight}>
                        <input className="input-field-text" type="text" onChange={this.updateInputRight} /><br/><br/>
                        <input className="send-button" type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        );
    }
}
