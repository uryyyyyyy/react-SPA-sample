/** @jsx React.DOM */
'use strict';
import React  from 'react';
import BS  from 'react-bootstrap';

export default React.createClass({
	render: function() {
		return(
			<div>
			<BS.Button bsStyle="primary">Primary</BS.Button>
			</div>
		);
	}
});
