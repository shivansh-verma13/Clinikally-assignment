# Clinikally-assignment
Autocomplete Component - Clinikally

# Product Search App

A modern, responsive React application that provides intelligent product search with autocomplete functionality, dark/light theme support, and paginated results.

## Features

- **Smart Autocomplete**: Real-time product search with debounced input (300ms delay)
- **Responsive Design**: Optimized for all screen sizes with modern UI/UX
- **Theme Toggle**: Seamless dark/light mode switching with smooth animations
- **Pagination**: Navigate through large result sets efficiently
- **Error Handling**: Robust error states with retry functionality
- **Product Details**: Rich product cards with images, ratings, pricing, and discounts
- **Accessible**: Proper ARIA labels and keyboard navigation support
- **Performance Optimized**: Custom hooks for debouncing and click-outside detection

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-search-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Required Dependencies**
   The app uses the following main dependencies:
   ```json
   {
     "react": "^18.0.0",
     "react-dom": "^18.0.0",
     "lucide-react": "^0.263.1"
   }
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

## Architecture & Approach

### Component Structure

```
src 
├── components/
    ├── Layout/
        ├── AppLayout.jsx
        ├── index.js
    ├── ProductAutocomplete/
        ├── EmptyState.jsx
        ├── ErrorMessage.jsx
        ├── index.js
        ├── Pagination.jsx
        ├── ProductAutocomplete.jsx
        ├── ProductItem.jsx
    ├── UI/
        ├── Footer.jsx
        ├── Header.jsx
        ├── ThemeToggle.jsx
        ├── index.js
├── context/
    ├── ThemeContext.jsx
├── hooks/
    ├── useClickOutside.js
    ├── useDebounce.js
    ├── useTheme.js
├── services/
   ├── productAPI.js
├── App.css
├── App.jsx
└── main.jsx
```

### Key Design Decisions

#### 1. **Context-Based Theme Management**
- Used React Context to provide theme state globally
- CSS custom properties (variables) for dynamic theme switching
- Smooth transitions between light and dark modes

#### 2. **Custom Hooks for Reusability**
- `useDebounce`: Prevents excessive API calls during typing
- `useClickOutside`: Handles dropdown closing when clicking elsewhere
- `useTheme`: Centralized theme state management

#### 3. **API Integration Strategy**
- Used DummyJSON API for realistic product data
- Implemented proper error handling and loading states
- Pagination support with configurable items per page

#### 4. **Performance Optimizations**
- Debounced search queries to reduce API calls
- Memoized search function with `useCallback`
- Efficient re-renders with proper dependency arrays

#### 5. **User Experience Focus**
- Progressive disclosure (search → results → selection)
- Visual feedback for all interactions (hover, loading, errors)
- Responsive design with mobile-first approach
- Accessibility considerations throughout

### State Management

The app uses React's built-in state management:
- **Local State**: Component-specific data (search query, results, pagination)
- **Context State**: Global theme preferences
- **Derived State**: Computed values like total pages, loading states

### Styling Approach

- **CSS-in-JS**: Inline styles for component-scoped styling
- **CSS Custom Properties**: Dynamic theming with CSS variables
- **Responsive Design**: Flexible layouts that adapt to screen sizes
- **Modern Effects**: Gradients, shadows, and smooth animations

## Theme System

The application features a sophisticated theme system:

### Light Theme
- Clean, bright interface with subtle gradients
- High contrast for accessibility
- Warm color palette with blue and purple accents

### Dark Theme
- Modern dark interface with reduced eye strain
- Consistent contrast ratios
- Cool color palette maintaining brand colors

### Theme Variables
```css
--bg-primary: Background for main content
--bg-secondary: Background for secondary elements
--bg-gradient: Gradient backgrounds
--text-primary: Primary text color
--text-secondary: Secondary/muted text
--border-color: Border colors
--shadow: Box shadow definitions
--hover-bg: Hover state backgrounds
```

## Search Functionality

### Features
- **Minimum Query Length**: 2 characters to trigger search
- **Debounced Input**: 300ms delay to optimize API calls
- **Real-time Results**: Updates as you type
- **Pagination**: 10 items per page with navigation
- **Error Recovery**: Retry mechanism for failed requests

### API Integration
- **Endpoint**: DummyJSON Products API
- **Search Parameters**: Query, limit, skip for pagination
- **Response Handling**: Proper error states and data validation

## Error Handling

The app includes comprehensive error handling:
- **Network Errors**: Graceful degradation with retry options
- **Empty States**: Helpful messages when no results found
- **Image Fallbacks**: SVG placeholders for broken product images
- **Loading States**: Clear feedback during API calls

## Responsive Design

- **Mobile First**: Optimized for small screens
- **Flexible Layouts**: Adapts to various screen sizes
- **Touch Friendly**: Appropriate tap targets and spacing
- **Performance**: Optimized images and efficient rendering

## Future Enhancements

Potential improvements for the application:

1. **Advanced Filtering**: Category, price range, rating filters
2. **Search History**: Save and suggest previous searches
3. **Favorites**: Allow users to bookmark products
4. **Keyboard Navigation**: Full keyboard accessibility
5. **Virtual Scrolling**: Handle thousands of results efficiently
6. **Offline Support**: Cache results for offline browsing
7. **Analytics**: Track search patterns and popular products

## Testing Recommendations

For production deployment, consider adding:
- Unit tests for custom hooks
- Component testing with React Testing Library
- Integration tests for API interactions
- E2E tests for complete user flows
- Performance testing for large result sets

## Code Quality

The codebase follows:
- **React Best Practices**: Hooks, functional components, proper state management
- **Performance**: Memoization, debouncing, efficient re-renders
- **Accessibility**: ARIA labels, semantic HTML, keyboard support
- **Error Boundaries**: Graceful error handling throughout
- **Clean Code**: Clear naming, modular components, separation of concerns
