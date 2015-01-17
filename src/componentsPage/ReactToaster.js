/** @jsx React.DOM */
'use strict';
import React  from 'react';
import ReactToastr  from 'react-toastr';
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.jQuery);

export default React.createClass({
	addAlert: function () {
		this.refs.container.success(
			"Hello!!",
			"World", {
				timeOut: 30000,
				extendedTimeOut: 10000
			});
		},
		render: function() {
			return (
				<div>
				<ToastContainer ref="container"
				toastMessageFactory={ToastMessageFactory}
				className="toast-top-right" />
				<button onClick={this.addAlert}>Toast!</button>
				</div>
			);
		}
	});
