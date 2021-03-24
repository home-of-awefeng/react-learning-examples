import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './App.css';
import { Routes } from "./Routes";

function App() {
  return (
		<Router>
			<div className="app-header">
				<a href="/home" className="app-logo-wrapper">
					<img src={logo} className="app-logo" alt="logo" />
				</a>
				<ul className="app-link">
					<li><a href="/home">首页</a></li>
				</ul>
			</div>
			<Switch>
				<Routes />
			</Switch>
		</Router>
  );
}

export default App;
