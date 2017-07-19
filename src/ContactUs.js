import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

export default class ContactUs extends React.Component{
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
  	window.location.href = "mailto:suhani24khurana@gmail.com;?Subject=Query&Body=" + "Hi";
  }
	render(){
    var cursor = {
      cursor : 'pointer'
    };
	 return(
	 	<div className= 'inside-page'>
		 	
          <h2>CONTACT US</h2>
              <div className = "contactDetails"><img src="./assests/email.png" className= "icon-display" onClick={this.handleClick} style={cursor}/> suhani24khurana@gmail.com </div>
              <div className = "contactDetails"><img src="./assests/phone.png" className= "icon-display"/>  9999595628 </div>
          
	 	</div>
	 );
	}
}