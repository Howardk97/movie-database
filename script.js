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

	fetch(moviesURL)
		.then(function (response) {
		return response.json();
		})
		.then(function (data) {
		console.log(data)
		// console.log(data.Ratings[0].Value);
		var ratingsTitle = document.createElement('h1');

	
		
		// displays ratings on webpage
		ratingContainer.appendChild(ratingsTitle);
		ratingsTitle.textContent = movieName + " Ratings";
		console.log(data.Ratings.length);
		
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


		// imdbRating.textContent = "IMDB: " + data.Ratings[0].Value.toString();
		// rottenRating.textContent = "Rotten Tomatoes: " + data.Ratings[1].Value.toString();
		// metacriticRating.textContent = "Metacritic: " + data.Ratings[2].Value.toString();
		});

}

searchBtn.addEventListener('click', genRatings);

