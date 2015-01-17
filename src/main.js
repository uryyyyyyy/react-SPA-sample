/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import ComponentsTemplate  from './routes/ComponentsTemplate';
import NotFoundPage  from './utils/pages/NotFoundPage';
import AppTemplate  from './utils/pages/AppTemplate';

var routes = (
	<Router.Route name='app' path='/' handler={AppTemplate}>
	<Router.Route name='components/'
	path='components/:component'
	handler={ComponentsTemplate} />
	<Router.Route name='multiRoute/'
	path='multiRoute/:component'
	handler={ComponentsTemplate} />
	<Router.NotFoundRoute handler={NotFoundPage}/>
	</Router.Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});
