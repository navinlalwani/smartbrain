import React from 'react';

const Navigation = ({RouteChanger, currentroute}) => {
	
	
		if (currentroute === "SignIn") {
		return(
		<nav style = {{display:'flex', justifyContent:'flex-end'}}>
			<p onClick = {() => RouteChanger("SignIn")} className = 'f3 pointer dim pa3 underline' >SignIn</p>
			<p onClick = {() => RouteChanger("Register")} className = 'f3 pointer dim pa3 underline' >Register</p>
		</nav>
		);
		} else if (currentroute === "Register") {
		return(
		<nav style = {{display:'flex', justifyContent:'flex-end'}}>
			<p onClick = {() => RouteChanger("SignIn")} className = 'f3 pointer dim pa3 underline' >SignIn</p>
		</nav>
		);
		} else {
		return(
		<nav style = {{display:'flex', justifyContent:'flex-end'}}>
			<p onClick = {() => RouteChanger("SignOut")} className = 'f3 pointer dim pa3 underline' >SignOut</p>
		</nav>
		);
		}
	
	
};

export default Navigation;