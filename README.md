Movie Explorer - Modular File Structure

## Project Structure
```
movie-explorer/
├── src/
│   ├── components/
│   │   ├── mobile/
│   │   │   ├── MobileHomeScreen.jsx
│   │   │   ├── MobileDetailsScreen.jsx
│   │   │   └── MobileFavoritesScreen.jsx
│   │   ├── desktop/
│   │   │   ├── DesktopHomeScreen.jsx
│   │   │   ├── DesktopDetailsScreen.jsx
│   │   │   └── DesktopFavoritesScreen.jsx
│   │   ├── shared/
│   │   │   ├── MovieCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── EmptyState.jsx
│   │   └── layout/
│   │       └── ViewToggle.jsx
│   ├── services/
│   │   └── api.js
│   ├── hooks/
│   │   ├── useMovies.js
│   │   └── useFavorites.js
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## File Descriptions

### **1. services/api.js**
- API configuration and methods
- `searchMovies(query)` - Search for movies
- `getMovieDetails(imdbID)` - Get detailed movie info

### **2. hooks/useMovies.js**
- Custom hook for movie search logic
- Manages search state, loading, errors

### **3. hooks/useFavorites.js**
- Custom hook for favorites management
- Add/remove/check favorites
- Could be extended with localStorage

### **4. components/shared/**
- **MovieCard.jsx** - Reusable movie card component
- **SearchBar.jsx** - Search input and button
- **Header.jsx** - App header with logo and favorites button
- **EmptyState.jsx** - Empty state messages (no results, no favorites, etc.)

### **5. components/mobile/** & **components/desktop/**
- Screen components for each view
- Mobile: Compact, vertical layout
- Desktop: Wider, grid layout

### **6. components/layout/ViewToggle.jsx**
- Toggle between mobile and desktop views

### **7. utils/constants.js**
- API keys, URLs
- Configuration constants

### **8. App.jsx**
- Main app component
- Routes between screens
- Manages global state

## Benefits of This Structure

✅ **Separation of Concerns** - Each file has one responsibility
✅ **Reusability** - Components can be used in multiple places
✅ **Maintainability** - Easy to find and update code
✅ **Testability** - Each file can be tested independently
✅ **Scalability** - Easy to add new features
✅ **Team Collaboration** - Multiple developers can work on different files
