/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import _  from 'lodash';
import ComponentsManu  from './ComponentsManu';
import NotFoundPage  from '../utils/myComponents/NotFoundPage';
import ReactToaster  from './ReactToaster';
import ReactableC  from './ReactableC';
import ReactSelect  from './ReactSelect';
import ReactBootstrap  from './ReactBootstrap';

export default React.createClass({
	mixins: [ Router.State ],
	getInitialState: function () {
		return {
			components : [
			{ pattern: 'ReactToastr', vDOM: <ReactToaster />},
			{ pattern: 'ReactableC', vDOM: <ReactableC />},
			{ pattern: 'ReactSelect', vDOM: <ReactSelect />},
			{ pattern: 'ReactBootstrap', vDOM: <ReactBootstrap />}
			]
		};
	},
	selectComponent: function(components, selectedStr){
		var selectedComponent = _.find(components, function(elem){
			return elem.pattern === selectedStr;
		});
		if(selectedComponent){
			return selectedComponent.vDOM;
		}else{
			return <NotFoundPage />;
		}
	},
	render: function () {
		var selectedStr = this.getParams().component;
		var vDOM = this.selectComponent(this.state.components, selectedStr)
		return (
			<section className='container'>
				<p children='Components'/>
				<div className='row'>
					<ComponentsManu
					selectedStr={selectedStr}
					className='col-sm-4 list-group' />
					<div className='col-sm-8'
					children={vDOM} />
				</div>
			</section>
		);
	}
});
