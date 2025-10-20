// Function to show the popup
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  if (!name || !phone || !age || !email) {
    
    alert("Please fill in all fields.");
    return; 
  }

  // Store data in SessionStorage
  sessionStorage.setItem("contactName", name);
  sessionStorage.setItem("contactPhone", phone);
  sessionStorage.setItem("contactAge", age);
  sessionStorage.setItem("contactEmail", email);

  // Display "Thank You" message with data
  document.getElementById("thank-you-name").textContent = name;
  document.getElementById("thank-you-phone").textContent = phone;
  document.getElementById("thank-you-age").textContent = age;
  document.getElementById("thank-you-email").textContent = email;

  // Show the "Thank You" popup by calling the showPopup function
  showPopup();
});

// Check if there is stored data and show the popup accordingly
if (sessionStorage.getItem("contactName") && document.getElementById("thank-you-name").textContent) {
  // If there is stored data, call the showPopup function to display the popup
  showPopup();
}

// Event listener for closing the "Thank You" popup
document.getElementById("close-thank-you-popup").addEventListener("click", closePopup);