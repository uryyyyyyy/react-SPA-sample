/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import ComponentManu  from '../components/ComponentManu';
import SamplesManu  from '../components/SamplesManu';
import BS   from 'react-bootstrap';

export default React.createClass({
	render: function () {
		return (
			<div className='container'>

			<header className="navbar navbar-inverse">
			<a className="navbar-brand" href="#">React-Sample</a>
			<ul className="nav navbar-nav">
			<li className="dropdown">
			<a href="#" className="dropdown-toggle" data-toggle="dropdown">Components<span className="caret"></span></a>
			<ul className="dropdown-menu" role="menu">
			<li><a href="#/components/import">import</a></li>
			<li><a href="#/components/list">show list</a></li>
			<li className="divider"></li>
			<li><a href="#">Not Yet</a></li>
			</ul>
			</li>
			<li className="dropdown">
			<a href="#" className="dropdown-toggle" data-toggle="dropdown">SamplePages<span className="caret"></span></a>
			<ul className="dropdown-menu" role="menu">
			<li><a href="#/SamplePages/cache">Cache Reload</a></li>
			</ul>
			</li>
			</ul>
			</header>

			<Router.RouteHandler />

			<footer className='footer'>
			<p children='supported by uryyyyyyy' />
			</footer>

			</div>
		);
	}
});
