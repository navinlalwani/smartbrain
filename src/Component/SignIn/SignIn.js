import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signinemail : "",
      signinpassword : ""
    }
  }

  OnEmailEntry = (event) => {
    this.setState({signinemail : event.target.value})
  };

  OnPasswordEntry = (event) => {
      this.setState({signinpassword : event.target.value})
    };

  OnSignInClick = (event) => {
    fetch('https://infinite-mountain-97746.herokuapp.com/signin', {
      method : 'post',
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }, 
      body : JSON.stringify({
        email : this.state.signinemail,
        password : this.state.signinpassword
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
          this.props.UserUpdate(data)
          this.props.RouteChanger("Home");
        };
    })
  
   
  };


	render () {
    const {RouteChanger} = this.props
    return(
		<article className="br3 shadow-5 ba  b--black-10 mv4 w-150 w-50-m w-40-l mw10 center">
		<div className = "pa4 black-80" >
			<div className ="measure">
    			<fieldset id="sign_up" className ="ba b--transparent ph0 mh0">
			      <legend className ="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className ="mt3">
			        <label className ="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange = {this.OnEmailEntry} className ="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
     			  </div>
      			  <div className ="mv3">
       				 <label className ="db fw6 lh-copy f6" htmlFor="password">Password</label>
        			 <input onChange = {this.OnPasswordEntry} className ="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      			  </div>
   				 </fieldset>
    				<div onClick = {this.OnSignInClick} className ="">
     					 <input className ="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    				</div>
    				<div onClick = {() => RouteChanger("Register")} className ="lh-copy mt3">
      					<p className ="f6 link underline dim black db pointer">Register</p>
      				
   					 </div>
  			</div>
		</div>
		</article>
		)
  }
};

export default SignIn;