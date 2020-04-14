import React from 'react';

const Rank = ({name, entries}) => {
	return(
		<div>
			<div className = 'white f3'>
				<p>  {`${name}, your current entry count is.... `} </p>
			</div>
			<div className = 'white f3'>
				<p> {`# ${entries}`} </p>
			</div>
		</div>
		)
};

export default Rank;