/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import PromiseButton  from './PromiseButton';
import NotFoundPage  from './pages/NotFoundPage';
import AppTemplate  from './pages/AppTemplate';

import sss   from 'bootstrap/dist/css/bootstrap.min.css';

var routes = (
    <Router.Route name='app' path='/' handler={AppTemplate}>
    <Router.Route name='components/'
    path='components/:component'
    handler={PromiseButton} />
    <Router.NotFoundRoute handler={NotFoundPage}/>
    </Router.Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
