/** @jsx React.DOM */
'use strict';
import React  from 'react';

//dupricated
export default React.createClass({
    render: function() {
        return (
            <li className='dropdown'>
            <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Samples<span className='caret'></span></a>
            <ul className='dropdown-menu' role='menu'>
            <li><a href='#/samples/button'>button</a></li>
            <li><a href='#/samples/dialog'>modalDialog</a></li>
            <li className='divider'></li>
            <li><a href='#'>Not Yet</a></li>
            </ul>
            </li>
        );
    }
});
