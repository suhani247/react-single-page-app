import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

export default class ContactUs extends React.Component{
	render(){
	 return(
	 	<div className= 'inside-page'>
		 	
          <h2>CONTACT US</h2>
              <div className = "contactDetails"><img src="./assests/email.png" className= "icon-display"/> suhani24khurana@gmail.com </div>
              <div className = "contactDetails"><img src="./assests/phone.png" className= "icon-display"/>  9999595628 </div>
          
	 	</div>
	 );
	}
}