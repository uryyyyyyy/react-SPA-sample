/** @jsx React.DOM */
'use strict';
import React  from 'react';

export default React.createClass({
	render: function() {
		return (
			<li className='dropdown'>
			<a href='#'
			className='dropdown-toggle'
			data-toggle='dropdown'>Components<span className='caret'></span>
			</a>
			<ul className='dropdown-menu' role='menu'>
			<li><a href='#/components/button'>button</a></li>
			<li><a href='#/components/dialog'>modalDialog</a></li>
			<li><a href='#/components/select2'>select2</a></li>
			<li><a href='#/components/markdown'>markdown</a></li>
			<li><a href='#/components/CKEditor'>CKEditor</a></li>
			<li><a href='#/components/reactable'>reactable</a></li>
			</ul>
			</li>
		);
	}
});
