# GitHub Copilot Instructions

## Project Overview
This is a high-performance React.js star rating component library (`@mil-rlib/reactjs-star-rating`) designed as a standalone, reusable NPM package. The project follows a dual-structure pattern with the main library in `/src` and a comprehensive demo app in `/example`. **Ultra-optimized bundle: 75% smaller (1.07KB brotli) with zero dependencies.**

## Architecture & Key Files

### Core Library Structure  
- **`src/index.js`**: Optimized component with hooks, memoization, half-star support
- **`src/index.d.ts`**: Comprehensive TypeScript definitions with all new props
- **`example/`**: Feature-rich demo showcasing all capabilities
- **Build target**: ES module output via `microbundle-crl` to `dist/index.js`

### Advanced Component Features
The `StarRating` component provides:
- **Half-star precision**: Click detection on left/right halves of stars 
- **Performance optimized**: `useMemo`, `useCallback` for minimal re-renders
- **Accessibility**: ARIA labels and screen reader support
- **Animation support**: Smooth scale transitions on hover/active states
- **Flexible precision**: 0.5 for half-stars, 1 for full stars only
- **Multiple interaction modes**: Interactive, read-only, disabled, clearable

### Visual Implementation
- **Unicode stars**: Single `★` character with CSS overlay for partial fills
- **Overlay technique**: Absolute positioned span with controlled width percentage
- **No external dependencies**: Zero runtime dependencies, no icon fonts/SVGs

## Development Workflows

### Performance Testing & Optimization
```bash
# Build and analyze bundle size
npm run build  # Check gzipped/brotli output in terminal

# Full test suite (unit + lint + build validation)
npm test

# Watch mode during development
npm start

# Deploy example with new features
npm run predeploy && npm run deploy
```

### Example App Development
```bash
cd example
npm start  # Uses linked parent package via "link:.."
```

## Project-Specific Conventions

### Performance Patterns
- **Memoization strategy**: `useMemo` for computed styles, `useCallback` for event handlers
- **Render optimization**: Single event handler for both click/hover with `isClick` parameter
- **Bundle size priority**: Removed PropTypes, optimized imports, minimal API surface
- **State management**: Single `hoveredValue` state, computed `currentRating`

### Half-Star Implementation
```javascript
// Half-star detection pattern
const handleStarEvent = (e, index, isClick) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const isLeftHalf = e.clientX - rect.left < rect.width / 2
  const value = isLeftHalf ? starValue - 0.5 : starValue
}

// Visual rendering with overlay
<span style={baseStarStyles}>
  ★
  {fillPercentage > 0 && <span style={overlayStyle}>★</span>}
</span>
```

### Advanced Features API
```javascript
// Modern usage patterns from example/src/App.js
<StarRating
  activeStars={3.5}        // Supports decimals
  allowHalf={true}         // Enable half-star precision
  precision={0.5}          // Half-step increments
  animate={true}           // Scale animation on hover
  clearable={true}         // Click same rating to clear

  readOnly={false}         // Interactive vs display-only
  onClear={() => {}}       // Clear callback
/>
```

### Accessibility Implementation
- **ARIA labels**: `role="radiogroup"`, individual star descriptions

- **Focus management**: `tabIndex` control based on interaction state
- **Screen reader friendly**: Descriptive labels for current rating state

## Development Guidelines

### When adding new features:
1. **Maintain performance**: Use memoization for expensive computations
2. **Update TypeScript**: Add comprehensive prop documentation in `src/index.d.ts`
3. **Demo integration**: Add interactive examples to `example/src/App.js`
4. **Bundle size awareness**: Check build output after changes
5. **Test accessibility**: Verify ARIA labels and screen reader support

### When optimizing performance:
- **Profile re-renders**: Use React DevTools Profiler to identify unnecessary renders
- **Memoization targets**: Event handlers, computed styles, expensive calculations
- **Bundle analysis**: Monitor gzipped output size in build logs
- **Dependency audit**: Avoid adding runtime dependencies

### When updating styles:
- **Overlay technique**: Preserve the percentage-based fill system for half-stars
- **Animation performance**: Use `transform` over layout-triggering properties
- **Style precedence**: `baseStarStyles` → `starStyle` → `activeStarStyle`/`inActiveStarStyle`
- **Responsive design**: Ensure proper scaling with `fontSize` changes