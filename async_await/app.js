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
/*
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
*/

//////////////////////////////////////////////////////////////

'use strict';

function asyncMethod(msg, step) {
	return new Promise(function(resolve, reject) {
		setTimeout(function () {
			console.log('Step ' + step + ': ' + msg);
			resolve(step + 1);
		}, 500);
	});
}

// async说明函数体内的执行流程是异步的
async function main() {
	// one的返回值相当于回调函数的参数
	// asyncMethod(function (value) {})
	var one = await asyncMethod('Connect DB...', 1);
	var two = await asyncMethod('Find User...', one);
	var three = await asyncMethod('Validate User...', two);
	var two = await asyncMethod('Deal with User...', three);
}

main();