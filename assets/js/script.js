// Global variables
const apiKey = 'f4e46f6e668c802af0710e241b819bb8';
const searches = $(".savedSearch");
// Empty array to store searches and undefined variables to be used later
let history = [];
let latitude;
let longitude;
// Added event listner using JQuery to the search button
$("#search").on('click', e => {
    // Prevents refresh on button click
    e.preventDefault();
    const city = $(".textbox").val().trim();
    // Adds searched city to the history array, saves array to local storage, clears the input, alerts if no value is searched for, & makes calls to the appropriate functions
    if (city) {
        history.push(city);
        localStorage.setItem("history", JSON.stringify(history));
        $(".textbox").val("");
        displayCity();
    } else {
        alert("Must enter a city first!")
    }
    //localStorage.clear();
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
// Function used to call OpenWeather API and receive weather data/append data to the page

// Function that changes the UV color based on conditions

// Function that generates the 5-Day Forecast section

