/** @jsx React.DOM */
'use strict';
import React  from 'react';
import SampleForm  from './SampleForm';

export default React.createClass({
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">Panel heading without title</div>
				<div className="panel-body">
					<dl className="dl-horizontal">
						<dt>multiSelect</dt>
						<dd></dd>
						<dt>minimumlength=1</dt>
						<dd></dd>
				<dt>enter date</dt>
				<dd class="form-inline">
				from : <input id="from_date_picker" class="form-control" maxlength="10" type="text" style="width:100px">
				to : <input id="to_date_picker" class="form-control" maxlength="10" type="text" style="width:100px">
				</dd>
				<dt>Free Word</dt>
				<dd><input type="text" id="full_text_search_form" style="width:300px"/></dd>
				</dl>
				</div>
			</div>
		);
	}
});
