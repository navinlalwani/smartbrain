import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageurl, box}) => {
	return(
		<div className = "center ma2">
			<div className = "absolute" >
			<img alt = "" src = {imageurl} width = '500px' height = "auto" />
			<div className = "boundingbox" style = {{top: box.top, right: box.right, bottom: box.bottom, left: box.left}} > </div>
			</div>
		</div>
		)
};

export default FaceRecognition;