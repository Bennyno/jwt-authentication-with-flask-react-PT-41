import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
				{!store.token ? 
					<Link to="/login">
						<button className="btn btn-primary">Log In Here</button>
					</Link>
					:
					<button onClick={()=>actions.logout()} className="btn btn-primary">Logout</button>
				}
				</div>
			</div>
		</nav>
	);
};
