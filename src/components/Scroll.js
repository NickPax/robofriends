import React from 'react';

const Scroll = pr => {
	/* first braces denote js expression, second that it's returning an object */
	/* And this object can have css styles */
	return <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>{pr.children}</div>;
};

export default Scroll;
