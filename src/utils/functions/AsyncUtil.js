'use strict';
import Promise  from 'bluebird';

var ajax = function(options) {
	return new Promise(function(resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.response);
			}
			else {
				reject(Error(req.statusText));
			}
		};
		req.onerror = function() {
			reject(Error("Network Error"));
		};
		req.send();
	});
}


export default {
	getAjaxAsync : function(url) {
		console.log('GET url:' + url);
		return new Promise(function(resolve, reject) {
			var req = new XMLHttpRequest();
			req.open('GET', url);
			req.onload = function() {
				if (req.status == 200) {
					resolve(req.response);
				}
				else {
					reject(Error(req.statusText));
				}
			};
			req.onerror = function() {
				reject(Error("Network Error"));
			};
			req.send();
		});
	}

}
