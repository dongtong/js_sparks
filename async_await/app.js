function asyncMethod(msg, callback) {
	setTimeout(function () {
		console.log(msg);
		callback();
	}, 500);
}

asyncMethod('Connect DB...', function () {
	asyncMethod('Find User...', function () {
		asyncMethod('Validate User...', function () {
			asyncMethod('Deal with User...', function () {});
		});
	});
});