/*
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
*/

//////////////////////////////////////////////////////////////

function asyncMethod(msg) {
	return new Promise(function(resolve, reject) {
		setTimeout(function () {
			console.log(msg);
			resolve();
		}, 500);
	});
}

function findUser() {
	//asyncMethod('Find User...').then(validateUser);
	return asyncMethod('Find User...');
}

function validateUser() {
	return asyncMethod('Validate User...');
}

function dealWithUser() {
	return asyncMethod('Deal with User...');
}

asyncMethod('Connect DB...')
    .then(findUser)
    .then(validateUser)
    .then(dealWithUser)
    .then(function () {});