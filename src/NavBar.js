import React from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import './NavBar.css'

class NavBar extends React.Component {

	render(){
		return(
			<div  className="pa3 header">
				<NavLink to='/' ><img src="logo.png"  alt="logo" className="logo grow"/></NavLink>
				<ul className='NavLinks'>
					<li>
						<NavLink to='/' className='Link'>HOME </NavLink>
					</li>
					<li>
						<NavLink to='/about' className='Link'  >ABOUT </NavLink>
					</li>
					<li>
						<NavLink to='/profile' className='Link'  >PROFILE </NavLink>
					</li>
				</ul>
			</div>
			);
	};
};

export default NavBar