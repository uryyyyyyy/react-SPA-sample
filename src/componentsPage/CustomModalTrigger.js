/** @jsx React.DOM */
'use strict';
import React  from 'react';
import BS  from 'react-bootstrap';

export default React.createClass({
	mixins: [BS.OverlayMixin],
	getInitialState: function () {
		return {
			isModalOpen: false
		};
	},
	handleToggle: function () {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},
	render: function () {
		return (
			<BS.Button onClick={this.handleToggle} bsStyle="primary">Launch</BS.Button>
		);
	},
	// This is called by the `OverlayMixin` when this component
	// is mounted or updated and the return value is appended to the body.
	renderOverlay: function () {
		if (!this.state.isModalOpen) {
			return <span/>;
		}

		return (
			<BS.Modal title="Modal heading" onRequestHide={this.handleToggle}>
			<div className="modal-body">
			This modal is controlled by our custom trigger component.
			</div>
			<div className="modal-footer">
			<BS.Button onClick={this.handleToggle}>Close</BS.Button>
			</div>
			</BS.Modal>
		);
	}
});
