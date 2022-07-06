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
	ratingContainer.textContent = " ";
	var movieName = document.getElementById('search-input').value;

	console.log(movieName);
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



		// imdbRating.textContent = "IMDB: " + data.Ratings[0].Value.toString();
		// rottenRating.textContent = "Rotten Tomatoes: " + data.Ratings[1].Value.toString();
		// metacriticRating.textContent = "Metacritic: " + data.Ratings[2].Value.toString();
		});

}

searchBtn.addEventListener('click', genRatings);

// Google API
let map, infoWindow;

function initMap() {
	console.log(google);
  	map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;