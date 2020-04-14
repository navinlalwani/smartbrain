import React from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import tachyons from 'tachyons';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import Particles from 'react-particles-js';
import SignIn from './Component/SignIn/SignIn';
import Register from './Component/Register/Register';

const particleoptions = {
  particles : {number : {value:80,density: {enable:true,value_area:800}}}
}


const initialState = {
      input : "",
      imageurl : "",
      box : {},
      route : "SignIn",
      user : {
        id : "",
        name : "",
        dateofbirth : "",
        email : "",
        password : "",
        entries : "",
        joined : ""
      }
    }


class App extends React.Component {
  constructor(){
    super()
    this.state = initialState
  }


  UserUpdate = (data) => {
    this.setState({user : {
      id : data.id,
      name : data.name,
      dateofbirth : data.dateofbirth,
      email : data.email,
      password : data.password,
      entries : data.entries,
      joined : data.joined
    }})

  };

  OnInputChange = (event) => {
    this.setState({input : event.target.value})
  };

  settingbox = (data) => {

    const obj = {
      top : data.top_row*100 + "%",
      right : (1-data.right_col)*100 + "%",
      bottom : (1 - data.bottom_row)*100 + "%",
      left : data.left_col*100 + "%"
    };
    this.setState({box : obj})
  }


  OnDetect = (event) => {
    this.setState({imageurl : this.state.input})
    fetch('https://infinite-mountain-97746.herokuapp.com/imageurl', {
      method : 'post',
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }, 
      body : JSON.stringify({
        input : this.state.input
      })
    })
    .then (response => response.json())
    .then( (response) => {
      this.settingbox(response.outputs[0].data.regions[0].region_info.bounding_box);
      fetch('https://infinite-mountain-97746.herokuapp.com/image', {
      method : 'put',
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }, 
      body : JSON.stringify({
        id : this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState({user : Object.assign(this.state.user,{entries : count})});
    })
    .catch(console.log)
    })
    .catch((err) => console.log(err))
      // there was an error
    };

  RouteChanger = (route) => {
      if (route === 'SignOut') {
        this.setState(initialState)
      }
      this.setState({route : route})
    }
  

  render(){
  return (
    <div className="App">
      <Particles className = "particles" params = {particleoptions}/>
      <Navigation currentroute = {this.state.route} RouteChanger = {this.RouteChanger} />
      {this.state.route === "SignIn" || this.state.route === "SignOut"
      ? <SignIn UserUpdate = {this.UserUpdate} RouteChanger = {this.RouteChanger} /> 
      : this.state.route === "Register"
      ? <Register UserUpdate = {this.UserUpdate} RouteChanger = {this.RouteChanger} />
      : <div>
          <Logo />
          <Rank name = {this.state.user.name} entries = {this.state.user.entries} />
          <ImageLinkForm OnDetect = {this.OnDetect} OnInputChange = {this.OnInputChange}/>
          <FaceRecognition box = {this.state.box} imageurl = {this.state.imageurl}/>
        </div>
        }
    </div>

    )
}

}

export default App;
