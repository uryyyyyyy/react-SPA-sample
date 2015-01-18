/** @jsx React.DOM */
//'use strict'; react-select has bug about `no var`
import React  from 'react';
import Select  from 'react-select';

export default React.createClass({
	getInitialState: function () {
		return {options : [
			{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' }
		]};
	},
	onChange: function(vals, selectedOptions) {
		console.log(vals);
		this.props.onChange(vals);
	},
	render: function() {
		return(
			<Select
			value={this.props.values}
			options={this.state.options}
			multi={true}
			onChange={this.onChange}
			/>
		);
	}
});
