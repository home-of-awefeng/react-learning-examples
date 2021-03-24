import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './App.css';
import { IRoute, routes, Routes } from "./Routes";

function App() {
	const links = routes.filter(({ title }: IRoute) => !!title);

  return (
		<Router>
			<div className="app-header">
				<a href="/home" className="app-logo-wrapper">
					<img src={logo} className="app-logo" alt="logo" />
				</a>
				<ul className="app-link">
					{
						links.map((route: IRoute) => (
							<li key={route.path}><a href={route.path}>{route.title}</a></li>
						))
					}
				</ul>
			</div>
			<Switch>
				<Routes />
			</Switch>
		</Router>
  );
}

export default App;
