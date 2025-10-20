// Budget Recipe Website - Main JavaScript
// Consolidated and improved version

// ============================================
// CONTACT FORM POPUP FUNCTIONALITY
// ============================================

// Function to show the contact popup
function showPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "block";
  }
}

// Function to close the contact popup
function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "none";
  }
}

// Handle contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
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

    // Show the "Thank You" popup
    showPopup();
  });
}

// Check if there is stored data and show the popup accordingly
const thankYouName = document.getElementById("thank-you-name");
if (sessionStorage.getItem("contactName") && thankYouName && thankYouName.textContent) {
  showPopup();
}

// Event listener for closing the "Thank You" popup
const closeThankYouBtn = document.getElementById("close-thank-you-popup");
if (closeThankYouBtn) {
  closeThankYouBtn.addEventListener("click", closePopup);
}

// ============================================
// LOGIN POPUP FUNCTIONALITY
// ============================================

// Function to show the login popup
function showLp() {
  const loginPopup = document.getElementById("lp");
  if (loginPopup) {
    loginPopup.style.display = "block";
  }
}

// Function to close the login popup
function closeLp() {
  const loginPopup = document.getElementById("lp");
  if (loginPopup) {
    loginPopup.style.display = "none";
  }
}

// Event listener for opening the login popup
const loginLink = document.getElementById("login-link");
if (loginLink) {
  loginLink.addEventListener("click", function(e) {
    e.preventDefault();
    showLp();
  });
}

// Handle login form submission
const loginSubmit = document.getElementById("login-submit");
if (loginSubmit) {
  loginSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Feature out of assignment scope. Click ok to be redirected to home");
    window.location.href = "index.html";
  });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

// Search button handler
const searchButton = document.getElementById("search-button");
if (searchButton) {
  searchButton.addEventListener("click", function() {
    alert("Sorry, Search feature under development");
  });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

// Handle mobile menu checkbox
const mobileMenuCheck = document.getElementById("check");
const navLinks = document.querySelectorAll(".nav-item");

if (mobileMenuCheck && navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      mobileMenuCheck.checked = false;
    });
  });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (header) {
    if (scrollTop > 100) {
      header.classList.add('scrolled-header');
    } else {
      header.classList.remove('scrolled-header');
    }
  }

  lastScrollTop = scrollTop;
});
