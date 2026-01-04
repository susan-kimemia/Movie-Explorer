# Movie Explorer

A beautiful, responsive movie search application built with React that lets you discover, explore, and save your favorite movies. Features a sleek mobile-first design with both mobile and desktop viewing modes.

![Movie Explorer](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## Features

- **Real-time Movie Search** - Search through thousands of movies using the OMDB API
- **Responsive Design** - Beautiful mobile and desktop layouts with smooth transitions
- **Favorites System** - Save and manage your favorite movies locally
- **Modern UI** - Gradient designs, smooth animations, and intuitive navigation
- **Detailed Movie Info** - View comprehensive details including plot, cast, ratings, and more
- **View Toggle** - Switch between mobile and desktop views instantly
- **Fast & Lightweight** - Optimized performance with React hooks and efficient state management

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API Key ([Get one free here](http://www.omdbapi.com/apikey.aspx))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-explorer.git
   cd movie-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create or edit `src/services/api.js` and add your OMDB API key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Project Structure

```
movie-explorer/
├── src/
│   ├── components/
│   │   ├── mobile/              # Mobile-specific screens
│   │   │   ├── MobileHomeScreen.jsx
│   │   │   ├── MobileDetailsScreen.jsx
│   │   │   └── MobileFavoritesScreen.jsx
│   │   ├── desktop/             # Desktop-specific screens
│   │   │   ├── DesktopHomeScreen.jsx
│   │   │   ├── DesktopDetailsScreen.jsx
│   │   │   └── DesktopFavoritesScreen.jsx
│   │   ├── shared/              # Reusable components
│   │   │   ├── MovieCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── EmptyState.jsx
│   │   └── layout/              # Layout components
│   │       └── ViewToggle.jsx
│   ├── services/                # API services
│   │   └── api.js
│   ├── hooks/                   # Custom React hooks
│   │   ├── useMovies.js
│   │   └── useFavorites.js
│   ├── utils/                   # Utilities and constants
│   │   └── constants.js
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── README.md
```

## Key Components

### **Custom Hooks**

#### `useMovies.js`
Manages movie search and selection state:
- `searchMovies(query)` - Search for movies by title
- `getMovieDetails(imdbID)` - Fetch detailed movie information
- Handles loading states and error management

#### `useFavorites.js`
Manages the favorites system:
- `toggleFavorite(movie)` - Add or remove from favorites
- `isFavorite(imdbID)` - Check if a movie is favorited
- Persists favorites in localStorage

### **Services**

#### `api.js`
Centralized API configuration:
- `searchMovies(query)` - Search movies via OMDB API
- `getMovieDetails(imdbID)` - Get detailed movie info
- Error handling and response parsing

### **Component Architecture**

#### **Mobile Components**
- **MobileHomeScreen** - Search interface with scrollable results grid
- **MobileDetailsScreen** - Full movie details with poster and metadata
- **MobileFavoritesScreen** - Grid view of saved favorites

#### **Desktop Components**
- **DesktopHomeScreen** - Wider layout with enhanced search
- **DesktopDetailsScreen** - Side-by-side detail view
- **DesktopFavoritesScreen** - Multi-column favorites display

#### **Shared Components**
- **MovieCard** - Reusable card with poster, title, and year
- **SearchBar** - Search input with submit handler
- **Header** - Navigation header with favorites counter
- **EmptyState** - Contextual empty state messages

## Design Features

- **Gradient Backgrounds** - Purple to blue gradient header
- **Smooth Animations** - Card hover effects and transitions
- **Custom Scrollbars** - Styled scrollbars for better aesthetics
- **Loading States** - Animated spinner during API calls
- **Empty States** - Helpful messages with icons
- **Responsive Cards** - Adaptive movie cards with fallback images

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Lucide React** - Beautiful icon library
- **OMDB API** - Movie database API
- **Custom CSS** - No framework dependencies

## Usage Guide

### Searching for Movies

1. Type a movie title in the search bar
2. Click "Search" or press Enter
3. Browse through the results grid
4. Click any movie card to view details

### Managing Favorites

1. Open a movie's detail page
2. Click the "Add to Favorites" button
3. Access favorites via the heart icon (❤️) in the header
4. Remove favorites by clicking "Remove from Favorites"

### Switching Views

- Use the view toggle buttons (top-right) to switch between Mobile and Desktop modes
- Perfect for testing responsive designs or personal preference

## Configuration

### API Configuration

Edit `src/services/api.js`:
```javascript
const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://www.omdbapi.com/';
```

### Constants

Edit `src/utils/constants.js` to modify:
- Screen names
- View modes
- Empty state messages
- Default configurations

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add movie trailers and videos
- [ ] Implement advanced filtering (genre, year, rating)
- [ ] Add movie recommendations
- [ ] Create user accounts and cloud sync
- [ ] Add movie reviews and ratings
- [ ] Implement dark mode
- [ ] Add social sharing features
- [ ] Create watchlist functionality

## Known Issues

- Favorites are stored locally (cleared on browser cache clear)
- API rate limiting may occur with excessive searches
- Some older movies may have incomplete data

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing the movie database
- [Lucide Icons](https://lucide.dev/) for the beautiful icon set
- The React community for excellent documentation and support

## Contact

Susan - [@susanKm_](https://twitter.com/susanKm_)

Project Link: [https://github.com/susan-kimemia/movie-explorer](https://github.com/susan-kimemia/movie-explorer)

---

<div align="center">
  Made with ❤️ by Susan
  <br>
  ⭐️ Star this repo if you find it helpful!
</div>
