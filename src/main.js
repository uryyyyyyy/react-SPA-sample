/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import ComponentsRoot  from './componentsPage/ComponentsRoot';
import FetchJsonRoot  from './fetchJsonPage/FetchJsonRoot';
import MultiRoutesRoot  from './multiRoutesPage/MultiRoutesRoot';
import SampleFormRoot  from './sampleFormPage/SampleFormRoot';
import NotFoundPage  from './utils/myComponents/NotFoundPage';
import AppTemplate  from './utils/myComponents/AppTemplate';

var routes = (
	<Router.Route name='app' path='/' handler={AppTemplate}>
	<Router.Route name='components/'
	path='components/:component'
	handler={ComponentsRoot} />
	<Router.Route name='fetchJson/'
	path='fetchJson/:id'
	handler={FetchJsonRoot} />
	<Router.Route name='multiRoot/'
	path='multiRoot/:subRoot'
	handler={MultiRoutesRoot} />
	<Router.Route name='sampleForm/'
	path='sampleForm/'
	handler={SampleFormRoot} />
	<Router.NotFoundRoute handler={NotFoundPage}/>
	</Router.Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});
