# Budget Parent Recipe Website

A budget-friendly recipe website designed for parents looking to prepare delicious, nutritious meals for their children while keeping costs low.

## Project Overview

This website was created as part of the COIT20268 university course project. It features a collection of easy-to-make, affordable recipes organized by meal type and price range.

### Tagline
**"Eat Smart, Spend Less: Budget-Friendly Delights Await Your Palate!"**

## Features

- **Recipe Categories**: Organized by meal type (Breakfast, Dinner)
- **Price Filtering**: Recipes grouped by cost (Under $2, Under $5, Under $7)
- **Recipe Details**: Each recipe includes ingredients, step-by-step instructions, prep time, and cost
- **Nutrition Information**: Educational content about balanced meals and healthy eating
- **Favorites Collection**: Curated collection of popular recipes
- **Contact Form**: Users can reach out with inquiries
- **Responsive Design**: Mobile-friendly layout with hamburger menu
- **Modern Authentication Modals**: Login/signup with animated modal system (UI complete, backend pending)
- **Search Functionality**: (Under development)

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with Flexbox, Grid, animations, and responsive design
- **JavaScript**: Vanilla JS for interactivity and form handling
- **Google Fonts**: Poppins font family
- **Session Storage**: Client-side data persistence for contact form

## Project Structure

```
Neelprtofinal/
├── index.html                      # Home page (formerly Home.html)
├── breakfast.html                  # Breakfast menu
├── dinner.html                     # Dinner menu
├── favorites.html                  # Favorites collection (formerly fav.html)
├── contact.html                    # Contact form (formerly contactus.html)
├── signup.html                     # Signup page
├── login.html                      # Login page
├── package.json                    # Node.js project configuration
├── README.md                       # Project documentation
│
├── pages/
│   └── recipes/                    # Individual recipe pages
│       ├── avocado-toast.html
│       ├── banana-pancakes.html
│       ├── banana-smoothie.html
│       ├── cheesy-omelette.html
│       ├── fresh-salad-sandwich.html
│       ├── fruit-salad.html
│       ├── oatmeal.html
│       └── yogurt-parfait.html
│
├── assets/
│   ├── images/                     # Recipe and hero images
│   │   ├── avocado-toast.jpg
│   │   ├── bananasmo.jpg
│   │   ├── bm.jpg
│   │   ├── bpc1.avif
│   │   ├── fruit-salad.jpg
│   │   ├── heroimg.svg
│   │   ├── mt.jpg
│   │   ├── oatmeal.jpg
│   │   ├── omelette.jpg
│   │   ├── salmon.jpg
│   │   ├── sandimg.jpg
│   │   └── yogurt-parfait.jpg
│   └── icons/
│       └── Logo.svg                # Site logo
│
├── styles/
│   └── styles.css                  # Main stylesheet
│
├── scripts/
│   └── main.js                     # Consolidated JavaScript
│
├── docs/
│   └── User testing.pdf            # User testing documentation
│
└── resources/                      # Original resource files (legacy)
```

## Installation & Setup

### Prerequisites
- Node.js installed (optional, for development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Running the Project

#### Option 1: Using Node.js Development Server (Recommended)

1. Open a terminal in the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The website will open automatically at `http://localhost:8080`

#### Option 2: Direct Browser Opening

Simply open the `index.html` file in your web browser.

## Features Status

### Implemented ✅
- Responsive navigation with mobile hamburger menu
- Recipe browsing by meal type and price
- Contact form with session storage
- Recipe detail pages with ingredients and procedures
- Nutrition facts educational section
- Smooth scrolling and animations
- Modern authentication modal system (Login/Signup UI)
- Animated modals with backdrop blur
- Form validation (client-side)
- Modal switching (Login ↔ Signup)

### In Development 🚧
- Search functionality
- Backend authentication system
- Database integration
- Recipe filtering and sorting
- User favorites system (save/remove recipes)
- Password encryption and security
- Email verification
- User profile management
- Recipe submission by users
- Shopping list generator

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Issues & Limitations

1. **Search Feature**: Currently shows "under development" alert
2. **Login/Signup**: UI complete, no backend authentication yet
3. **No Backend**: All data is static HTML/CSS/JS
4. **No Database**: Contact form data stored in session storage only
5. **Image Optimization**: Some images may be large and could be optimized

## Future Enhancements

### Priority Features
- **Backend Authentication**: Connect login/signup modals to backend API
- **User Database**: Store user accounts, preferences, and favorites
- **Recipe Database**: Dynamic recipe loading from database
- **Search Implementation**: Functional search with filters (ingredients, price, meal type)
- **User Favorites**: Save/remove recipes with backend persistence

### Additional Features
- Recipe ratings and reviews system
- Shopping list generator with export functionality
- Nutritional calculator per serving
- Cooking videos/tutorials
- Multi-language support
- Meal planning calendar
- Ingredient substitution suggestions
- Print-friendly recipe cards
- Social sharing (Facebook, Pinterest, Twitter)
- User-submitted recipes with moderation

## Project Improvements Made

This restructured version includes:

1. **Organized Directory Structure**: Separated assets, pages, styles, and scripts
2. **Fixed Naming Conventions**: Renamed files to lowercase with hyphens
3. **Corrected Typos**: Fixed spelling errors (Avacardo → Avocado, recipie → recipe)
4. **Complete Recipe Content**: Added full ingredients and procedures
5. **Consolidated JavaScript**: Single `main.js` file instead of multiple scripts
6. **Improved HTML**: Added meta descriptions and semantic structure
7. **Better Documentation**: README and package.json for professional setup
8. **Updated Paths**: All file references corrected for new structure
9. **Enhanced Comments**: Added code documentation throughout

### Latest Updates (October 2025)
10. **Modern Authentication Modals**: Replaced basic popups with professional modal system
11. **CSS Architecture**: Single CSS file (styles/styles.css) with modern variables and gradients
12. **Animation System**: Smooth transitions with backdrop blur effects
13. **Consistent UI**: Yellow/green gradient theme across all pages
14. **Mobile Optimization**: Fully responsive modal design for all devices
15. **Documentation**: Added comprehensive session logs in documentation/ folder

## License

This project was created for educational purposes as part of university coursework.

---

**Note**: This is a prototype/educational project and is not intended for production use.
