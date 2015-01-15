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
            <BS.Jumbotron>
            <BS.Navbar>
            <BS.Nav>
            <BS.NavItem eventKey={1} href="#">Link</BS.NavItem>
            <BS.NavItem eventKey={2} href="#">Link</BS.NavItem>
            <BS.DropdownButton eventKey={3} title="Dropdown">
            <BS.MenuItem eventKey="1">Action</BS.MenuItem>
            <BS.MenuItem eventKey="2">Another action</BS.MenuItem>
            <BS.MenuItem eventKey="3">Something else here</BS.MenuItem>
            <BS.MenuItem divider />
            <BS.MenuItem eventKey="4">Separated link</BS.MenuItem>
            </BS.DropdownButton>
            </BS.Nav>
            </BS.Navbar>

            <Router.RouteHandler />

            <footer className='footer'>
            <p children='supported by uryyyyyyy' />
            </footer>

            </BS.Jumbotron>
        );
    }
});
