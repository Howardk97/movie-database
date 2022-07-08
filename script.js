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

	
		
		ratingContainer.appendChild(ratingsTitle);
		ratingContainer.style.border = "thick solid black";
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
var plotBox = document.getElementById('plot-box');

function genPlot () {
	// User input name
	var movieName = document.getElementById('search-input').value;

	console.log(movieName);


	// 1st movie API
	var moviesURL = "https://www.omdbapi.com/?t=" + movieName + "&apikey=4e92771";

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

	var imgContainer = document.getElementById('mov-img');
	var titleContainer = document.getElementById('mov-title');
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

	// plot elements
	var plotTitle = document.createElement('h1');	
	var plotShort = document.createElement('p');
	
	// placing elements on page 
	plotBox.appendChild(plotTitle);
	plotBox.appendChild(plotShort);


	plotTitle.textContent = 'Plot';
	plotShort.textContent = data.Plot;
	console.log (plotShort);
	plotBox.style.border = 'thick solid black';
		})
})
}

// Section that title will go in
var movTitle = document.getElementById('mov-title');

// Section image will go in
var movImage = document.getElementById('mov-image');


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

var relatedTitles = document.getElementById('related-titles');

function genRelated () {
	var movieName = document.getElementById('search-input').value;

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

			var relatedLabel = document.createElement('h1');
			relatedTitles.appendChild(relatedLabel);

			if (data.length != 0) {
				if(data.Search.length === 10) {
					var title0 = document.createElement('p');
					var title1 = document.createElement('p');
					var title2 = document.createElement('p');
					var title3 = document.createElement('p');
					var title4 = document.createElement('p');
					var title5 = document.createElement('p');
					var title6 = document.createElement('p');
					var title7 = document.createElement('p');
					var title8 = document.createElement('p');
					var title9 = document.createElement('p');

					console.log(title0);

					relatedLabel.textContent = "Related Searches";
					title0.textContent = data.Search[0].Title;
					title1.textContent = data.Search[1].Title;
					title2.textContent = data.Search[2].Title;
					title3.textContent = data.Search[3].Title;
					title4.textContent = data.Search[4].Title;
					title5.textContent = data.Search[5].Title;
					title6.textContent = data.Search[6].Title;
					title7.textContent = data.Search[7].Title;
					title8.textContent = data.Search[8].Title;
					title9.textContent = data.Search[9].Title;

					relatedTitles.appendChild(title0);
					relatedTitles.appendChild(title1);
					relatedTitles.appendChild(title2);
					relatedTitles.appendChild(title3);
					relatedTitles.appendChild(title4);
					relatedTitles.appendChild(title5);
					relatedTitles.appendChild(title6);
					relatedTitles.appendChild(title7);
					relatedTitles.appendChild(title8);
					relatedTitles.appendChild(title9);

					relatedTitles.style.border = "thick solid black";
		}
	}
	});
}

searchBtn.addEventListener('click', genRelated);
searchBtn.addEventListener('click', genInfo);
searchBtn.addEventListener('click', genPlot);
searchBtn.addEventListener('click', genRatings);
// searchBtn.addEventListener('click', genImage);


