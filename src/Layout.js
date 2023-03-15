import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
	return (
		<div className='text-gray-900 '>
			<Navbar />
			<div className='px-8'>{props.children}</div>
		</div>
	);
};

export default Layout;
