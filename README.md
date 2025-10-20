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
- **Search Functionality**: (Under development)
- **User Authentication**: (Placeholder - out of scope)

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
- Login/Signup popups (UI only)

### In Development 🚧
- Search functionality
- User authentication
- Backend integration
- Recipe filtering
- User favorites system

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Issues & Limitations

1. **Search Feature**: Currently shows "under development" alert
2. **Login/Signup**: Placeholder functionality - redirects to home page
3. **No Backend**: All data is static HTML/CSS/JS
4. **No Database**: Contact form data stored in session storage only
5. **Image Optimization**: Some images may be large and could be optimized

## Future Enhancements

- Implement functional search with filters
- Add user authentication with backend
- Create database for recipes and user data
- Add recipe ratings and reviews
- Implement shopping list generator
- Add nutritional calculator
- Include cooking videos
- Multi-language support

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

## Course Information

- **Course Code**: COIT20268
- **Project**: Assignment 3 - Project B Prototype
- **Author**: Neel

## License

This project was created for educational purposes as part of university coursework.

---

**Note**: This is a prototype/educational project and is not intended for production use.
