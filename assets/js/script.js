// Global variables
const apiKey = 'f4e46f6e668c802af0710e241b819bb8';
const city = $(".textbox").val().trim();
// Empty array to store searches and undefined variables to be used later
let history = [];
let latitude;
let longitude;
// Added event listner using JQuery to the search button
$("#search").on('click', e => {
    // Prevents refresh on button click
    e.preventDefault();
    // Adds searched city to the history array and saves array to local storage
    history.pushState(city);
    localStorage.setItem("history", JSON.stringify(history));
    
});

// Added event listener using JQuery to saved cities 

// Function to display the saved searches

// Function used to call OpenWeather API and receive weather data/append data to the page

// Function that changes the UV color based on conditions

// Function that generates the 5-Day Forecast section

