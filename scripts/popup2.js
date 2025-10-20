// Function to show the  popup
function showLp() {
    const dinnerPopup = document.getElementById("lp");
    dinnerPopup.style.display = "block";
}

// Function to close the  popup
function closeLp() {
    const dinnerPopup = document.getElementById("lp");
    dinnerPopup.style.display = "none";
}

// Event listener for opening the  popup
document.getElementById("login-link").addEventListener("click", showLp);
// Select the search button element by its ID
const searchButton = document.getElementById("search-button");

// Add a click event listener to the search button
searchButton.addEventListener("click", function() {
  // Display an alert when the button is clicked
  alert("Sorry, Search feature under development");
});

document.getElementById("login-submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    alert("Feature out of assignment scope. Click ok to be redirected to home");
  
    window.location.href = "Home.html";
    
  });
