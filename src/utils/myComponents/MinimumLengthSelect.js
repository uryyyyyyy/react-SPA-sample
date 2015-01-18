/** @jsx React.DOM */
'use strict';
import React  from 'react';
import Select  from 'react-select';

export default React.createClass({
	getInitialState: function () {
		return {options : [
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' }
		]};
	},
	onChange: function(val) {
		console.log(val);
		this.props.onChange(val);
	},
	filterFunc: function(oneOfList, inputStr){
		if(inputStr===''){
			return false;
		}
		if(oneOfList.label.indexOf(inputStr) === -1){
			return false;
		}
		return true;
	},
	render: function() {
		return(
			<Select
			value={this.props.value}
			options={this.state.options}
			filterOption={this.filterFunc}
			onChange={this.onChange}
			/>
		);
	}
});
