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

let main = (() => {
	var ref = _asyncToGenerator(function* () {
		var one = yield asyncMethod('Connect DB...', 1);
		var two = yield asyncMethod('Find User...', one);
		var three = yield asyncMethod('Validate User...', two);
		var two = yield asyncMethod('Deal with User...', three);
	});

	return function main() {
		return ref.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function asyncMethod(msg, step) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Step ' + step + ': ' + msg);
			resolve(step + 1);
		}, 500);
	});
}

main();
