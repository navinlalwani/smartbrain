import React from 'react';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : "",
      dateofbirth : "",
      email : "",
      password : ""
    }
  }

  OnNameEntry = (event) => {
    this.setState({name : event.target.value});
  };

  OnDobEntry = (event) => {
    this.setState({dateofbirth : event.target.value});
  };

  OnEmailEntry = (event) => {
    this.setState({email : event.target.value});
  };

  OnPasswordEntry = (event) => {
    this.setState({password : event.target.value});
  };

  OnRegisterClick = (event) => {

    fetch('https://infinite-mountain-97746.herokuapp.com/register', {
      method : 'post',
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }, 
      body : JSON.stringify({
        name : this.state.name,
        dateofbirth : this.state.dateofbirth,
        email : this.state.email,
        password : this.state.password,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
      this.props.UserUpdate(data)
      this.props.RouteChanger("Home")
    };
    })
    
   
  };


  render() {
	return(
		<article className="br3 shadow-5 ba  b--black-10 mv4 w-150 w-50-m w-40-l mw10 center">
		<div className = "pa4 black-80" >
			<div className ="measure">
    			<fieldset id="sign_up" className ="ba b--transparent ph0 mh0">
			      <legend className ="f4 fw6 ph0 mh0">Register</legend>
            <div className ="mt3">
              <label className ="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input className ="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="name"  
              id="name"
              onChange = {this.OnNameEntry}
              />
            </div>
            <div className ="mt3">
              <label className ="db fw6 lh-copy f6" htmlFor="email-address">Date of Birth</label>
              <input className ="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="date" 
              name="dateofbirth"  
              id="dateofbirth"
              onChange = {this.OnDobEntry}
              />
            </div>
			      <div className ="mt3">
			        <label className ="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className ="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange = {this.OnEmailEntry}
              />
     			  </div>
      			  <div className ="mv3">
       				 <label className ="db fw6 lh-copy f6" htmlFor="password">Password</label>
        			 <input className ="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
               type="password" 
               name="password"  
               id="password"
               onChange = {this.OnPasswordEntry}
               />
      			  </div>
   				 </fieldset>
    				<div onClick = {this.OnRegisterClick} className ="">
     					 <input className ="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    				</div>
  			</div>
		</div>
		</article>
		)
  };
};

export default Register;