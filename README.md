# Around the World 🌍

A modern, responsive React application that provides comprehensive information about countries worldwide. Built with React, Tailwind CSS, and the REST Countries API.

**🔗 Live Demo:** [https://around-the-world-mustafamsaad.vercel.app/](https://around-the-world-mustafamsaad.vercel.app/)

## ✨ Features

### 🔍 **Search & Filter**

- Real-time country search with instant results
- Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- Combined search and filter functionality

### 🎨 **User Experience**

- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Loading States** - Smooth loading indicators for better UX
- **Error Handling** - Custom 404 page with theme-aware SVG illustrations

### 📊 **Country Information**

- Detailed country profiles with flag, population, region, and capital
- Comprehensive country pages with native names, currencies, languages, and more
- Interactive navigation with back button functionality

### ⚡ **Performance & Optimization**

- **Local Storage Caching** - Stores API data locally for faster subsequent visits
- **Optimized API Calls** - Efficient data fetching with error handling
- **Clean Code Architecture** - Modular components and reusable hooks

## 🛠️ Technologies Used

- **React** - Component-based UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **REST Countries API** - Country data source
- **Vite** - Fast build tool and development server

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.jsx        # Country card component
│   ├── Header.jsx      # Navigation header
│   ├── SearchInput.jsx # Search functionality
│   └── ...
├── pages/              # Page components
│   ├── HomePage.jsx    # Main country listing
│   ├── CountryPage.jsx # Country details
│   └── NoPage.jsx      # 404 error page
├── useFetchData.js     # Custom hook for API calls
└── App.jsx            # Main app component
```

## 🚀 Key Implementation Highlights

### Custom Hook Architecture

- **`useFetchData`** - Centralized data fetching logic with caching
- Handles both individual country queries and full country lists
- Implements error handling and loading states

### Theme Management

- Automatic dark/light mode detection
- Theme persistence across sessions
- SVG illustrations adapt to theme changes

### Performance Optimizations

- Local storage caching reduces API calls
- Optimized re-renders with proper state management
- Efficient search and filtering algorithms

## 🎯 Skills Demonstrated

- **React Fundamentals** - Hooks, state management, component lifecycle
- **Modern JavaScript** - ES6+, async/await, destructuring
- **Responsive Design** - Mobile-first approach, CSS Grid/Flexbox
- **API Integration** - REST API consumption, error handling
- **User Experience** - Loading states, error handling, accessibility
- **Performance** - Caching, optimization techniques
- **Clean Code** - Modular architecture, reusable components

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/around-the-world.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Screenshots

The application features a clean, modern interface that works seamlessly across all devices with both light and dark themes.

---

_Built with ❤️ by [Your Name] - Showcasing modern React development practices_
