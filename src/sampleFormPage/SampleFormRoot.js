/** @jsx React.DOM */
'use strict';
import React  from 'react';
import SampleForm  from './SampleForm';
import DatePicker  from '../utils/myComponents/DatePicker';
import EmailForm  from '../utils/myComponents/EmailForm';
import MultiSelect  from '../utils/myComponents/MultiSelect';
import MinimumLengthSelect  from '../utils/myComponents/MinimumLengthSelect';

export default React.createClass({
	getInitialState: function () {
		return {
			multi : null,
			minimum : null,
			date : null,
			email : null
		};
	},
	dateChange: function (dateStr) {
		this.setState({date: dateStr});
	},
	minimumChange: function (val) {
		this.setState({minimum: val});
	},
	multiChange: function (vals) {
		this.setState({multi: vals});
	},
	emailChange: function (str) {
		this.setState({email: str});
	},
	render: function() {
		console.log(this.state);
		var formData = JSON.stringify(this.state, null, '\n');
		return (
			<div className="panel panel-default">
				<div className="panel-heading">Panel heading without title</div>
				<div className="panel-body">
					<dl className="dl-horizontal">
						<dt>multiSelect</dt>
						<dd><MultiSelect
							onChange={this.multiChange}
							values={this.state.multi} /></dd>
						<dt>minimumlength=1</dt>
						<dd><MinimumLengthSelect
							onChange={this.minimumChange}
							value={this.state.minimum} /></dd>
				<dt>date</dt>
				<dd>
				<DatePicker onChange={this.dateChange}/>
				</dd>
				<dt>Email(regExp)</dt>
				<dd><EmailForm onChange={this.emailChange} /></dd>
				</dl>
				</div>
				<textarea value={formData} />
			</div>
		);
	}
});
