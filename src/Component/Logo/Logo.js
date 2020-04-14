import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
	return (
		<div className = 'ma5 mt0'>
			<Tilt className="Tilt br1 shadow-2" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
 			<div className="Tilt-inner"> <img className = "w-80 h-80 pt3" src = {brain} alt = "logo"/> </div>
			</Tilt>
		</div>
		);
};

export default Logo;