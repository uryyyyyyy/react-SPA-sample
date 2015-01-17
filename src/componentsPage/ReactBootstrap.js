/** @jsx React.DOM */
'use strict';
import React  from 'react';
import BS  from 'react-bootstrap';

export default React.createClass({
	render: function() {
		return(
			<div>
				<BS.Button bsStyle="primary">Primary</BS.Button>
				<BS.ButtonGroup justified>
					<BS.Button href="#" children="Left" />
					<BS.Button href="#" children="Middle" />
					<BS.DropdownButton title="Dropdown">
						<BS.MenuItem eventKey="1" children="Dropdown link" />
						<BS.MenuItem eventKey="2"  children="Dropdown link" />
					</BS.DropdownButton>
				</BS.ButtonGroup>
			</div>
		);
	}
});
