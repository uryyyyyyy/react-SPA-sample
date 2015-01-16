/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import ComponentsTemplate  from './routes/ComponentsTemplate';
import NotFoundPage  from './routes/NotFoundPage';
import AppTemplate  from './routes/AppTemplate';

var routes = (
    <Router.Route name='app' path='/' handler={AppTemplate}>
    <Router.Route name='components/'
    path='components/:component'
    handler={ComponentsTemplate} />
    <Router.NotFoundRoute handler={NotFoundPage}/>
    </Router.Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
