//****************************************************************************************
//This is an example of the benifits of using promises in asynchronus calls over callbacks
//****************************************************************************************

// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Chicago', function (err, temp) {
// 	if(err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp)
// 	}
// });

// function getTempPromise(location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function (){
// 			resolve(79);
// 			reject('City not found');
// 		}, 3000);
// 	});
// }

// getTempPromise('Chicago').then(function(temp){
// 	console.log('promise success', temp);
// }, function(err){
// 	console.log('promise error', err);
// })

// Chalenge Area

function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		} else {
			reject('Can not add non numeral values');
		}
	});
}

addPromise(1, 2).then(function(sum){
		console.log('success', sum);
	}, function(err){
		console.log('err', err);
});

addPromise('andrew', 2).then(function(sum){
		console.log('this should not show up');
	}, function(err){
		console.log('This should appear ', err);
});