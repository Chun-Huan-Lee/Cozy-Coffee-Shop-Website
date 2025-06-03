# Cozy & Coffee <img src="/public/coffee-logo.svg" alt="logo" width="32" height="32" style="vertical-align: middle;">

<div align="center">
  <img src="/public/project-image.png" alt="Cozy & Coffee Banner" width="100%"  style="object-fit: cover; border-radius: 10px;" />
  
  <p align="center">
    <strong>A modern, responsive coffee shop website built with React and Tailwind CSS</strong>
  </p>

  <p align="center">
    <a href="https://chun-huan-lee.github.io/Cozy-Coffee-Shop-Website/">🌐 Live Demo</a> •
    <a href="#-features">✨ Features</a> •
    <a href="#-quick-start">🚀 Quick Start</a> •
    <a href="#-documentation">📖 Documentation</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
  </p>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#%EF%B8%8F-usage)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Technologies](#-technologies)
- [Configuration](#%EF%B8%8F-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#%EF%B8%8F-roadmap)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🌟 Overview

Cozy & Coffee is a modern, fully responsive coffee shop website that showcases a beautiful user interface with interactive menu cards and a complete shopping cart system. Built with React 19 and styled with Tailwind CSS, it demonstrates modern web development practices and provides an excellent user experience across all devices.

### Key Highlights

- **🎨 Beautiful Design**: Modern, coffee-themed UI with warm color palette
- **📱 Fully Responsive**: Seamless experience on mobile, tablet, and desktop
- **🛒 Shopping Cart**: Complete cart system with localStorage persistence
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **♿ Accessible**: Following web accessibility best practices

## ✨ Features

### Core Features
- [x] **Responsive Design** - Mobile-first approach with seamless desktop experience
- [x] **Interactive Menu** - Beautifully displayed coffee products with hover effects
- [x] **Shopping Cart System** - Add/remove items with quantity controls
- [x] **Local Storage** - Cart data persists between browser sessions
- [x] **Checkout Process** - Multi-step checkout form simulation
- [x] **Smooth Animations** - Subtle animations enhance user experience
- [x] **Fixed Header** - Navigation always accessible while scrolling

### User Experience
- [x] **Hero Section** - Engaging landing area with call-to-action
- [x] **Product Cards** - Interactive cards with images and descriptions
- [x] **Contact Form** - Functional contact form for customer inquiries
- [x] **About Section** - Company information and values
- [x] **Footer** - Complete site information and links

### Technical Features
- [x] **React Context** - Global state management for cart functionality
- [x] **Custom Hooks** - Reusable cart logic with useCart hook
- [x] **Component Architecture** - Modular, maintainable component structure
- [x] **CSS Animations** - Smooth transitions and hover effects
- [x] **SEO Optimized** - Proper meta tags and semantic HTML

## 🎯 Demo

### 🌐 Live Demo
**[View Live Website](https://chun-huan-lee.github.io/Cozy-Coffee-Shop-Website/)**

### 📱 Screenshots

<details>
<summary>Desktop View</summary>

![Desktop Screenshot](/public/screenshot.png)
</details>

<details>
<summary>Mobile View</summary>

![Mobile Screenshot](/public/screenshot-mobile.png)
</details>

### 🎥 Demo Features
- Browse the interactive coffee menu
- Add items to cart and manage quantities
- Experience the responsive design across devices
- Test the checkout process simulation

## 🚀 Quick Start

Get up and running in less than 5 minutes:

```bash
# Clone the repository
git clone https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website.git

# Navigate to project directory
cd Cozy-Coffee-Shop-Website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 📦 Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website.git
   cd Cozy-Coffee-Shop-Website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:5173
   ```

### Alternative Installation Methods

<details>
<summary>Using Yarn</summary>

```bash
yarn install
yarn dev
```
</details>

<details>
<summary>Using pnpm</summary>

```bash
pnpm install
pnpm dev
```
</details>

## 🛠️ Usage

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

### Environment Setup

Create a `.env` file in the root directory (optional):

```env
# Optional environment variables
VITE_APP_NAME=Cozy & Coffee
VITE_API_URL=your-api-url
```

### Customization

#### Updating Coffee Menu
Edit the `coffeeMenu` array in `src/CoffeeShopApp.jsx`:

```javascript
const coffeeMenu = [
  {
    id: 1,
    name: 'Your Coffee Name',
    description: 'Your coffee description',
    price: 4.50,
    image: 'your-image-url'
  },
  // Add more items...
];
```

#### Styling Customization
- **Colors**: Update Tailwind classes in components
- **Fonts**: Modify `src/CoffeeShop.css` and `index.html`
- **Layout**: Adjust component structure in `src/CoffeeShopApp.jsx`

## 📁 Project Structure

```
Cozy-Coffee-Shop-Website/
├── public/                  # Static assets
│   ├── coffee-logo.svg         # Site logo
│   ├── screenshot.png          # Desktop screenshot
│   └── screenshot-mobile.png   # Mobile screenshot
├── src/                     # Source files
│   ├── components/          # Reusable components (future)
│   ├── CoffeeShop.css         # Custom styles
│   ├── CoffeeShopApp.jsx      # Main application component
│   ├── index.css              # Global styles & Tailwind
│   └── main.jsx               # Application entry point
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## 🧩 Components

### Core Components

#### `CoffeeShopApp`
Main application component that provides cart context and renders all sections.

#### `CartProvider`
Context provider for global cart state management.

#### `Header`
Fixed navigation header with cart button and mobile menu.

#### `Hero`
Landing section with main call-to-action.

#### `Menu`
Coffee menu grid layout with product cards.

#### `CoffeeCard`
Individual product card with add-to-cart functionality.

#### `Cart`
Sliding cart panel with checkout process.

#### `About`
Company information section.

#### `Contact`
Contact form and location information.

#### `Footer`
Site footer with links and contact details.

### Custom Hooks

#### `useCart`
```javascript
const {
  cart,           // Cart items array
  addToCart,      // Add item to cart
  removeFromCart, // Remove/decrease item quantity
  clearCart,      // Clear entire cart
  getCartTotal,   // Calculate total price
  getCartCount,   // Get total item count
  isCartOpen,     // Cart visibility state
  toggleCart      // Toggle cart visibility
} = useCart();
```

## 🔧 Technologies

### Frontend Stack
- **[React 19.0.0](https://reactjs.org/)** - UI library with latest features
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite 6.2.0](https://vitejs.dev/)** - Next-generation frontend tooling

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

### Build & Deployment
- **[SWC](https://swc.rs/)** - Fast JavaScript/TypeScript compiler
- **[GitHub Pages](https://pages.github.com/)** - Static site hosting
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Deployment automation

## ⚙️ Configuration

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom extensions here
    },
  },
  plugins: [],
}
```

### Vite Configuration

```javascript
// vite.config.js
export default defineConfig({
  base: "/Cozy-Coffee-Shop-Website/",
  plugins: [react()],
})
```

### ESLint Configuration
The project uses ESLint 9 with React-specific rules for code quality.

## 🚀 Deployment

### GitHub Pages Deployment

1. **Automatic Deployment**
   ```bash
   npm run deploy
   ```

2. **Manual Deployment**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

### Other Deployment Options

<details>
<summary>Vercel</summary>

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push
</details>

<details>
<summary>Netlify</summary>

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable automatic deployments
</details>

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit Changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open Pull Request**
   - Provide clear description
   - Reference any related issues

### Development Guidelines

- Follow the [JavaScript Style Guide](CONTRIBUTING.md#javascript-style-guide)
- Use meaningful commit messages
- Write clear, concise code comments
- Ensure responsiveness across devices
- Test thoroughly before submitting

### Code of Conduct
Please read our [Code of Conduct](CONTRIBUTING.md#code-of-conduct) before contributing.

## 🐛 Troubleshooting

### Common Issues

<details>
<summary>Node.js Version Issues</summary>

**Problem**: Build fails with Node.js version errors

**Solution**: 
```bash
# Check Node.js version
node --version

# Upgrade to Node.js 18+ if needed
nvm install 18
nvm use 18
```
</details>

<details>
<summary>Port Already in Use</summary>

**Problem**: Development server won't start (port 5173 in use)

**Solution**:
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```
</details>

<details>
<summary>Cart Data Not Persisting</summary>

**Problem**: Cart items disappear on page refresh

**Solution**: 
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Ensure JavaScript is enabled
</details>

### Getting Help

- 📧 **Email**: [issues](mailto:vincent741516899@gmail.com)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website/discussions) (Coming in the future)

## 🗺️ Roadmap

### Phase 1: Current Features ✅
- [x] Responsive design
- [x] Shopping cart functionality
- [x] Product catalog
- [x] Basic checkout process

### Phase 2: Enhancements 🚧
- [ ] User authentication system
- [ ] Product search and filtering
- [ ] Customer reviews and ratings
- [ ] Newsletter subscription
- [ ] Order history tracking

### Phase 3: Advanced Features 🔮
- [ ] Admin panel for menu management
- [ ] Real-time order tracking
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] PWA capabilities

### Phase 4: Business Features 📈
- [ ] Analytics dashboard
- [ ] Inventory management
- [ ] Customer loyalty program
- [ ] Email marketing integration
- [ ] Social media integration

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Resources & Inspiration
- **[Unsplash](https://unsplash.com/)** - Beautiful coffee photography
- **[React Documentation](https://reactjs.org/)** - Comprehensive React guides
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool

### Special Thanks
- Coffee shop owners who inspired this design
- Open source community for amazing tools

### Built by
**[Chun-Huan Lee](https://github.com/Chun-Huan-Lee)**

---

<div align="center">
  <p>
    <strong>⭐ Star this repo if you found it helpful!</strong>
  </p>
  
  <p>
    <a href="https://github.com/Chun-Huan-Lee/Cozy-Coffee-Shop-Website">🔗 GitHub Repository</a> •
    <a href="https://chun-huan-lee.github.io/Cozy-Coffee-Shop-Website/">🌐 Live Demo</a>
  </p>
  
  <p>
    <sub>Copyright © 2025 Chun-Huan Lee. All rights reserved.</sub>
  </p>
</div>
