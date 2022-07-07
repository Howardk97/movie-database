// Holds element that ratings will be in
var ratingContainer = document.getElementById('rating-container');

// Search btn
var searchBtn = document.getElementById("search-btn");

// console.log(imdbRating);
console.log(ratingContainer);
// console.log(rottenRating);
// console.log(metacriticRating);

// ratingContainer.appendChild(imdbRating);
// console.log(ratingContainer);



// Movies API
function genRatings() {
	// Clear page
	ratingContainer.textContent = " ";

	// User input name
	var movieName = document.getElementById('search-input').value;

	console.log(movieName);

	// 1st movie API
	var moviesURL = "https://www.omdbapi.com/?t=" + movieName + "&apikey=4e92771";

	// Sanitize the data
	fetch(moviesURL)
		.then(function (response) {
		return response.json();
		})
		.then(function (data) {
		console.log(data)

		// console.log(data.Ratings[0].Value);
		var ratingsTitle = document.createElement('h1');

	
		
		// title of critic ratings section
		ratingContainer.appendChild(ratingsTitle);
		ratingsTitle.textContent = movieName + " Ratings";
		console.log(data.Ratings.length);
		
		// Display ratings
		for(var i = 0; i < data.Ratings.length; i++) {
			if (data.Ratings[i].Source === "Internet Movie Database") {
				var imdbRating = document.createElement('li');
				ratingContainer.appendChild(imdbRating);
				imdbRating.textContent = "IMDB: " + data.Ratings[i].Value.toString();
			}

			if (data.Ratings[i].Source === "Rotten Tomatoes") {
				var rottenRating = document.createElement('li');
				ratingContainer.appendChild(rottenRating);
				rottenRating.textContent = "Rotten Tomatoes: " + data.Ratings[i].Value.toString();
			}

			if (data.Ratings[i].Source === "Metacritic") {
				var metacriticRating = document.createElement('li');
				ratingContainer.appendChild(metacriticRating);
				metacriticRating.textContent = "Metacritic: " + data.Ratings[i].Value.toString();
			}

			else {
				console.log("enter a movie title");
			}

			
		}



		// second movie API
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
				'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
			}
		};
		
		fetch('https://movie-database-alternative.p.rapidapi.com/?s=' + movieName + '&r=json&page=1', options)
			.then(function(res) {
				return res.json();
			}).then(function(data) {
				console.log(data);
				
			})

		});

}

var titleContainer = document.getElementById("mov-title");
var imgContainer = document.getElementById("mov-img");
function getPost ()
{
	//resets image and title
	titleContainer.textContent = "";
	imgContainer.textContent = "";

	// User input name
	var movieName = document.getElementById('search-input').value;

	console.log(movieName);

	// 2nd movie API (Contains list of 10 movies with movie name in it)
	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
			'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
		}
	}
	var moviesURL = 'https://movie-database-alternative.p.rapidapi.com/?s=' + movieName + '&r=json&page=1';

	fetch(moviesURL, options2)
	.then(function(res2){
		return res2.json();
	})
	.then(function(data2){
		console.log(data2);
		//data2.Search[0].Title
		//data2.Search[0].Title.Poster

	if(data2.length != 0)
	{
		if(data2.Search[0] != 'N/A')
		{
		//	console.log(data2.Search[0].Poster);
		var imgPage = document.createElement('img');
		imgContainer.appendChild(imgPage);
		imgPage.src = data2.Search[0].Poster;

		}

		var titlePage = document.createElement('h1');
		titleContainer.appendChild(titlePage);
		titlePage.textContent = data2.Search[0].Title;

	}

	//for(var i = 0; i < data2.length; i++){}

	})


}

// Global variables for info container
var movInfo = document.getElementById('mov-info');

function genInfo() {
	// 1st movie API
	var movieName = document.getElementById('search-input').value;
	var moviesURL = "https://www.omdbapi.com/?t=" + movieName + "&apikey=4e92771";

	// Sanitize the data
	fetch(moviesURL)
		.then(function (response) {
		return response.json();
		})
		.then(function (data) {
	// Variables for info elements
	var infoTitle = document.createElement('h1');
	var movGenre = document.createElement('p');
	var movYear = document.createElement('p');
	var movRating = document.createElement('p');
	var movLang = document.createElement('p');

	// Attach info elements to page
	movInfo.appendChild(infoTitle);
	movInfo.appendChild(movGenre);
	movInfo.appendChild(movYear);
	movInfo.appendChild(movRating);
	movInfo.appendChild(movLang);

	infoTitle.textContent = "Info";
	// Display info in elements
	if(data.length != 0) {
		if(data.Genre != 'N/A') {
			movGenre.textContent = data.Genre;
		}
		
		if(data.Genre != 'N/A') {
			movYear.textContent = data.Year;
		}

		if(data.Genre != 'N/A') {
			movRating.textContent = data.Rated;
		}

		if(data.Genre != 'N/A') {
			movLang.textContent = data.Language;
		}

		movInfo.style.border = "thick solid black";
	}
	})
}

searchBtn.addEventListener('click', genInfo);
searchBtn.addEventListener('click', getPost);
searchBtn.addEventListener('click', genRatings);

