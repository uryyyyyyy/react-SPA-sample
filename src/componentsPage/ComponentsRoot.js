/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Router  from 'react-router';
import NotFoundPage  from '../utils/myComponents/NotFoundPage';
import ReactToaster  from './ReactToaster';
import ReactableC  from './ReactableC';
import ReactSelect  from './ReactSelect';
import ReactBootstrap  from './ReactBootstrap';

export default React.createClass({
	mixins: [ Router.State ],
	checkActive: function(selecter, selectedComponent){
		return (selecter === selectedComponent)?
		'list-group-item active' : 'list-group-item';
	},
	selectComponent: function(component){
		switch (component){
			case 'markdown':
				return (<ReactToaster />);
			case 'ReactableC':
				return (<ReactableC />);
			case 'ReactSelect':
				return (<ReactSelect />);
			case 'ReactBootstrap':
				return (<ReactBootstrap />);
			default:
				return (<NotFoundPage />);
		}
	},
	render: function () {
		var selectedComponent = this.getParams().component;
		return (
			<section className='container'>
				<p children='Components'/>
				<div className='row'>
					<div className='col-sm-4 list-group'>
						<a href='#/components/markdown'
			className={this.checkActive('markdown', selectedComponent)}
			children='markdown' />
						<a href='#/components/ReactableC'
			className={this.checkActive('ReactableC', selectedComponent)}
			children='ReactableC' />
						<a href='#/components/ReactSelect'
			className={this.checkActive('ReactSelect', selectedComponent)}
			children='ReactSelect' />
						<a href='#/components/ReactBootstrap'
			className={this.checkActive('ReactBootstrap', selectedComponent)}
			children='ReactBootstrap' />
					</div>
				<div className='col-sm-8'
			children={this.selectComponent(selectedComponent)} />
				</div>
			</section>
		);
	}
});
