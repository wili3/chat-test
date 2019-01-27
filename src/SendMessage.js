import React from 'react';
import './index.css';
import posed from 'react-pose';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  },
  press: {
    scale: 1.05,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

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
            <form className="form-class" onSubmit={this.addValue}>
                <input className="input-field-text" type="text" placeholder="Write a message" onChange={this.updateInput} />
                <Box className="box"> 
                    <input className="send-button" type="submit" value="Send"/>
                </Box>
            </form>
            </div>
        );
    }
}