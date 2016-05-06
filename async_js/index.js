'use strict'

var fetch = require('./fetch.js');
var promise = fetch('fws.txt');

/*
promise.then(function (fws) {
	console.log(fws);
	// 返回promise 在下一个then中处理
	// 相当于下一个promise 处理依赖这个promise处理结果
	// 如果这里产生错误，直接抛出，那么下一个promise不会执行
	// 直接执行catch
	// throw new Error('opps')
	return fetch('versions.txt'); 
}).then(function (versions) {
	console.log(versions);
}).catch(function (err) {
	// 捕捉以上任何一个promise中有可能产生错误的场景
	console.log('Any of above promise error occured:', err);
});
*/

/*
//all中所有的promise都resolve才会执行then
//输出不会一行一行输出，而是批量输出
Promise.all([
	fetch('fws.txt'),
	fetch('versions.txt')
]).then(function (values) {
	var fws = values[0];
	var versions = values[1];
	console.log(fws, versions);
});
*/

/*
// 不借助xhr
var promise = new Promise(function (resolve, reject) {
	resolve('OK');
	// reject('ERROR');
}).then(function (value) {
	console.log('Status:', value); // Status: OK
}).catch(function (err) {
	console.log('Status:', err); // Status: ERROR
});
*/