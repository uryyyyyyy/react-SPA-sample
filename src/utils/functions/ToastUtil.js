var util = {};

var random = function(){
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for( var i=0; i < 5; i++ ){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
};

util.getAjaxAsync = function(url) {
	'use strict';
	console.log('GET url:' + url);
	return $.ajax({
		type: 'GET',
		url: url,
		async: true
	});
};

util.getAjaxSync = function(url) {
	'use strict';
	console.log('GET url:' + url);
	var response;
	$.ajax({
		type: 'GET',
		url: url,
		async: false,
		success: function(res){
			response = res;
		}
	});
	return response;
};

util.postAjaxAsync = function(url, reqData) {
	'use strict';
	console.log('POST url:' + url);
	console.log(reqData);
	return $.ajax({
		type: 'POST',
		url: url,
		async: true,
		contentType: 'text/json',
		data: JSON.stringify(reqData)
	});
};

util.postFileAsync = function(url, file) {
	'use strict';
	console.log('POST url:' + url);
	return $.ajax({
		type: 'POST',
		url: url,
		async: true,
		data : file,
		processData : false, //specification (not allow jQuery to exec data)
		contentType : false //specification
	});
};

util.showServerMessage = function(response) {
	'use strict';
	var title = response.title;
	var message = response.message;
	console.log('title:'+title + ' message:'+message);
	$.toaster({ priority : 'success', title : response.title, message : response.message });
};

util.showServerError = function(response) {
	'use strict';
	var title = response.title || 'Server Error';
	var message = response.message || 'unknown Error was happened';
	console.log(response);
	console.log('title:'+title + ' message:'+message);
	$.toaster({ priority : 'danger', title : title, message : message });
};
