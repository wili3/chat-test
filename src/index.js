import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Chat} from './Chat.js'
  
// ========================================

ReactDOM.render(
	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
    	<Chat/>
	</div>,
    document.getElementById('root')
);
