# Cozy & Coffee - React Coffee Shop Website

A modern, responsive coffee shop website built with React and Tailwind CSS. This project features a beautiful UI with a fixed header, interactive menu cards, and a fully functional shopping cart system with localStorage persistence.

## Features

- **Responsive Design**: Seamlessly works on mobile, tablet, and desktop devices
- **Interactive Menu**: Beautifully displayed coffee products with hover effects
- **Shopping Cart**: Add/remove items with quantity controls
- **Local Storage**: Cart data persists between sessions
- **Checkout Process**: Multi-step checkout form
- **Smooth Animations**: Subtle animations enhance the user experience
- **Fixed Header**: Navigation always accessible as you scroll

## Live Demo

[**View Live Demo**](https://chun-huan-lee.github.io/Cozy-Coffee-Shop-Website/)

## Technologies Used

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Local Storage API**: For persisting cart data
- **Vite**: Next-generation frontend tooling
- **SWC**: Super-fast JavaScript/TypeScript compiler

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm
- tailwindcss (v3.4.1)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cozy-coffee-shop.git
   cd cozy-coffee-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Running Tests

```bash
npm run preview
```

## Project Structure

```
Cozy-Coffee-Shop-Website/
├── public/                  # Public assets
│   ├── coffee-logo.svg      # Site logo
├── src/                     # Source files
│   ├── components(assets)/  # React components
│   ├── CoffeeShop.css       # Custom CSS styles
│   ├── CoffeeShopApp.jsx    # Main application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .gitignore               # Git ignore file
├── index.html               # HTML template
├── LICENSE                  # MIT License
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## Future Improvements

- [ ] User authentication system
- [ ] Admin panel for menu management
- [ ] Backend integration for real orders
- [ ] Payment gateway integration
- [ ] Order history for customers
- [ ] Reviews and ratings system
- [ ] Newsletter subscription

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Unsplash](https://unsplash.com/) - For the beautiful coffee images
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Screenshot

- ### PC/Laptop
![Cozy & Coffee Banner](/public/screenshot.png)

- ### Mobile
![Cozy & Coffee Banner](/public/screenshot-mobile.png)
---

Copyright © Chun-Huan Lee 2025
