import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class App extends React.Component{
	render(){
	 return(
	 	<div>
		 	<h1> Simple Single Page Application </h1>
		 	<ul className= "outer-list"> 
			 	<li className="list"><IndexLink to="/" activeClassName="active"> Home </IndexLink></li>
			 	<li className="list"><Link to="/about" activeClassName="active"> About Us </Link></li>
			 	<li className="list"><Link to="/contact" activeClassName="active"> Contact Us </Link></li>
		 	</ul>
		 	<div>
          		{this.props.children}
        	</div>
	 	</div>
	 );
	}
}