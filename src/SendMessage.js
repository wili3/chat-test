import React from 'react';
import './index.css';

export class SendMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            text: ""
        };
        this.addValue = this.addValue.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.text != "")
      {
        console.log(this.props);
        this.props.func(this.state.text,this.state.index);
        this.setState({
            index: this.state.index,
            text: ""
        });
        evt.target.reset();
      }

      return false;
    }

    updateInput(evt){
        this.setState({
            index: this.state.index,
            text: evt.target.value
        });   
    }

    render()
    {
        return (
            <div className="input-field">
            <form onSubmit={this.addValue}>
                <input className="input-field-text" type="text" onChange={this.updateInput} /><br/><br/>
                <input className="send-button" type="submit" value="Send"/>
            </form>
        </div>
        );
    }
}