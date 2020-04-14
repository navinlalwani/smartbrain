import React from 'react';

const ImageLinkForm = ({OnInputChange, OnDetect}) => {
	return(
		<div>
		<p className = "f5 ttu tracked"> We can detect faces in your picture. Please enter the link to your picture : </p>
		<div className = "center pa4 br3 shadow-5">
			<input onChange = {OnInputChange} className = "f4 pa2 w-70 center" type = 'text' placeholder = 'Yes! you can enter your link here'/>
			<button onClick = {OnDetect} className = "w-30 grow f4 link ph3 pv2 dib bg-light white bg-light-purple"> Detect </button>
		</div>

		</div>
		)
};

export default ImageLinkForm;