/** @jsx React.DOM */
'use strict';
import React  from 'react';

export default React.createClass({
	getInitialState: function () {
		return {
			list : [
			{ label: 'ReactToastr', url: '#/components/ReactToastr'},
			{ label: 'ReactableC', url: '#/components/ReactableC'},
			{ label: 'ReactSelect', url: '#/components/ReactSelect'},
			{ label: 'ReactBootstrap', url: '#/components/ReactBootstrap'},
			{ label: 'CustomModalTrigger', url: '#/components/CustomModalTrigger'}
			]
		};
	},
	createElement: function(reactList, selectedStr){
		return reactList.map(function(elem){
			if(elem.label === selectedStr){
				elem.className = 'list-group-item active';
			}else{
				elem.className = 'list-group-item';
			}
			return (
				<a href={elem.url}
				className={elem.className}
				key={elem.label}
				children={elem.label} />
			);
		});
	},
	render: function () {
		var listVDOM = this.createElement(this.state.list, this.props.selectedStr);
		return (
				<div className={this.props.className}>
					{listVDOM}
				</div>
		);
	}
});
