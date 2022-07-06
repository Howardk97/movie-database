// ODDS API
// var APIKey = 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df';
// var oddsAPI = 'https://sports-odds-betapi.p.rapidapi.com/v1/events/1/0/list/20/line/ru?appid=' + APIKey;

// fetch(oddsAPI)
//     .then(function(res) {
//         console.log(res);
//         return res.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://sports-odds-betapi.p.rapidapi.com/v1/events/1/0/list/20/line/ru',
//   headers: {
//     Package: '4a788ec11cd42226e2fdcbd62253379c',
//     'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
//     'X-RapidAPI-Host': 'sports-odds-betapi.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// console.log('hello');

// const options = {
// 	method: 'GET',
// 	headers: {
// 		Package: '4a788ec11cd42226e2fdcbd62253379c',
// 		'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
// 		'X-RapidAPI-Host': 'sports-odds-betapi.p.rapidapi.com'
// 	}
// };

// fetch('https://sports-odds-betapi.p.rapidapi.com/v1/events/0/0/list/20/line/ru', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
		'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com'
	}
};

fetch('https://tennis-live-data.p.rapidapi.com/matches-by-date/2020-09-06', options1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	

// Second API
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
		'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
	}
};

fetch('https://ultimate-tennis1.p.rapidapi.com/live_scores', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));