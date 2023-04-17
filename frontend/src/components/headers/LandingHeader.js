import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../static/img/logo.png';

const LandingHeader = () => {
	return (
		<header className="landing-header">
			<div className="landing-header__section">
				{/* <img className="landing-header__logo" src={logo} alt="landing-header"/> */}
				<h1 style={{fontSize:"27px"}}>Aareez</h1>
			</div>

			<div className="landing-header__section">
				{/* <ul className="landing-header__list">
					<li className="landing-header__li">
						<div>
							Tour
						</div>
					</li>
					<li className="landing-header__li">
						<div>
							Pricing
						</div>
					</li>
					<li className="landing-header__li">
						<div>
							Learn
						</div>
					</li>
				</ul> */}
			</div>

			<div className="landing-header__section">
				<ul className="landing-header__list">
					<li className="landing-header__li">
						<Link to="/login">
							Login
						</Link>
					</li>
					<li className="landing-header__li">
						<Link to="/register" className="btn">
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default LandingHeader;
