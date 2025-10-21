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
// MODERN AUTHENTICATION MODAL SYSTEM
// ============================================

/**
 * Opens a modal with smooth animation
 * @param {string} modalId - The ID of the modal to open ('login-modal' or 'signup-modal')
 */
function openAuthModal(modalId) {
  const backdrop = document.getElementById('auth-backdrop');
  const modal = document.getElementById(modalId);

  if (backdrop && modal) {
    // Show backdrop
    backdrop.classList.add('active');

    // Small delay for smooth animation
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Closes all authentication modals
 */
function closeAuthModal() {
  const backdrop = document.getElementById('auth-backdrop');
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');

  // Remove active class from all modals
  if (loginModal) loginModal.classList.remove('active');
  if (signupModal) signupModal.classList.remove('active');

  // Hide backdrop after modal animation completes
  setTimeout(() => {
    if (backdrop) backdrop.classList.remove('active');
  }, 300);

  // Re-enable body scroll
  document.body.style.overflow = '';
}

/**
 * Switch from login to signup modal
 */
function switchToSignup(event) {
  if (event) event.preventDefault();

  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');

  if (loginModal) loginModal.classList.remove('active');

  setTimeout(() => {
    if (signupModal) signupModal.classList.add('active');
  }, 300);
}

/**
 * Switch from signup to login modal
 */
function switchToLogin(event) {
  if (event) event.preventDefault();

  const signupModal = document.getElementById('signup-modal');
  const loginModal = document.getElementById('login-modal');

  if (signupModal) signupModal.classList.remove('active');

  setTimeout(() => {
    if (loginModal) loginModal.classList.add('active');
  }, 300);
}

// Event listener for Login/Signup nav link
const loginLink = document.getElementById("login-link");
if (loginLink) {
  loginLink.addEventListener("click", function(e) {
    e.preventDefault();
    openAuthModal('login-modal');
  });
}

// Close modal when clicking backdrop
const authBackdrop = document.getElementById('auth-backdrop');
if (authBackdrop) {
  authBackdrop.addEventListener('click', closeAuthModal);
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAuthModal();
  }
});

// Handle login form submission
const loginFormModal = document.getElementById('login-form-modal');
if (loginFormModal) {
  loginFormModal.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // For now, just show a message (backend will be implemented later)
    alert(`Welcome back, ${username}! This is a prototype - backend functionality coming soon.`);
    closeAuthModal();

    // TODO: Add actual authentication logic here when backend is ready
  });
}

// Handle signup form submission
const signupFormModal = document.getElementById('signup-form-modal');
if (signupFormModal) {
  signupFormModal.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const children = document.getElementById('signup-children').value;

    // Validate password match
    if (password !== confirmPassword) {
      alert('Passwords do not match! Please try again.');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // For now, just show a success message
    alert(`Account created successfully, ${name}! This is a prototype - backend functionality coming soon.`);
    closeAuthModal();

    // TODO: Add actual registration logic here when backend is ready
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
