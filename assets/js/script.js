// Global variables
const apiKey = 'f4e46f6e668c802af0710e241b819bb8';
const searches = $(".savedSearch");
const today = new Date();
const date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
// Empty array to store searches and undefined variables to be used later
let history = [];
let latitude;
let longitude;

// A jQuery function that is available only after the document is loaded and ready for DOM manipulation
$(document).ready(() => {
    // Added event listner using JQuery to the search button
    $("#search").on('click', e => {
        // Prevents refresh on button click
        e.preventDefault();
        const city = $(".textbox").val().trim();
        // Adds searched city to the history array, saves array to local storage, clears the input, alerts if no value is searched for, & makes calls to the appropriate functions
        if (city) {
            history.push(city);
            localStorage.setItem("history", JSON.stringify(history));
            $(".main").removeClass("hide");
            $(".textbox").val("");
            displayCity();
        } else if (city.value===undefined) {
            alert("Cannot locate weather for this city.")
        } else {
            alert("Must enter a city first!")
        }
        //localStorage.clear();
        // Makes the fetch call to OpenWeather Api to get the weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".date").text(data.name + " " + date);
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                $(".temp").text('Temp: ' + data.current.temp + '°F');
                $(".wind").text('Wind: ' + data.current.wind_speed + ' MPH');
                $(".humidity").text('Humidity: ' + data.current.humidity + ' %');
                $(".index").text(data.current.uvi);
                console.log(data);
            })
        })
    });
    
    // Added event listener using JQuery to saved cities 
    
    // Function to dynamically create elements for each searched city and display them on the page 
    function displayCity() {
        searches.empty();
        for (let i = 0; i < history.length; i++) {
            let pEl = element = $("<p>").text(history[i]);
            pEl.addClass("cities");
            searches.prepend(pEl);
        }
    }

    // Function that changes the UV color based on conditions
    
    // Function that generates the 5-Day Forecast section
    function fiveDayForecast() {
        
    }
});

