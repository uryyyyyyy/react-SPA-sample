/** @jsx React.DOM */
'use strict';
import React  from 'react';
//jquery-ui

export default React.createClass({
	getInitialState: function () {
		return {$selector : null};
	},
	onChange: function(dateText){
		console.log(dateText);
		this.props.onChange(dateText);
	},
	componentDidMount: function(){
		var $selector = $(this.getDOMNode());
		this.setState({$selector:$selector});
		$selector.datepicker({
			dateFormat: 'yy/mm/dd',
			onSelect: this.onChange
			//		minDate: new Date(),
			//		maxDate: '+0d',
		});
	},
	render: function() {
		return (
			<input className="form-control" type="text" />
		);
	}
});
