/** @jsx React.DOM */
'use strict';
import React  from 'react';

export default React.createClass({
	checkEmail : function(str){
		if(str.match(/.+@.+\..+/)==null){
			return false;
		}else{
			return true;
		}
	},
	onChange : function(e){
		var inputStr = e.target.value;
		console.log(inputStr);
		if(this.checkEmail(inputStr)){
			this.props.onChange(inputStr);
		}
	},
	render: function() {
		return (
			<input className="form-control" type="text"
			onChange={this.onChange} />
		);
	}
});
