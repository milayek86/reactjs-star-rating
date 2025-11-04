# @mil-rlib/reactjs-star-rating

🌟 **Ultra-lightweight React Star Rating Component** - Professional-grade rating system with half-star precision, zero dependencies, and **889 bytes brotli** compressed!

[![NPM Version](https://img.shields.io/npm/v/@mil-rlib/reactjs-star-rating.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-889B%20brotli-brightgreen)](https://bundlephobia.com/package/@mil-rlib/reactjs-star-rating)
[![NPM Downloads](https://img.shields.io/npm/dm/@mil-rlib/reactjs-star-rating.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating)
[![GitHub Stars](https://img.shields.io/github/stars/milayek86/reactjs-star-rating.svg)](https://github.com/milayek86/reactjs-star-rating/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating)

🔗 **[View Live Demo & Examples](https://milayek86.github.io/reactjs-star-rating/)** - Interactive playground showcasing all features

## Why Choose This Component?

✨ **Ultra-Performance** - Only 889 bytes brotli compressed, 75% smaller than alternatives  
🎯 **Half-Star Precision** - Click detection on left/right star halves for 0.5 increments  
♿ **Accessibility First** - Complete ARIA support and screen reader compatibility  
🎨 **Highly Customizable** - Extensive styling options with CSS-in-JS approach  
📱 **Mobile Ready** - Perfect touch interactions and responsive design  
⚡ **Zero Dependencies** - No external libraries, framework agnostic  
🔧 **TypeScript Ready** - Full TypeScript definitions included

## 🚀 Quick Start

```bash
npm install @mil-rlib/reactjs-star-rating
```

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

function App() {
  const [rating, setRating] = useState(3.5)
  
  return (
    <StarRating
      activeStars={rating}
      onStarsChange={setRating}
      allowHalf={true}
      totalStars={5}
    />
  )
}
```

## ✨ Key Features

### 🎯 **Half-Star Precision**
Click the left or right half of any star for precise 0.5 increment ratings
```jsx
<StarRating allowHalf={true} precision={0.5} />
```

### ⚡ **Ultra Performance** 
- **889 bytes brotli** compressed (75% smaller than v1.0)
- **Zero runtime dependencies**
- **Tree-shakeable ES modules**
- **Optimized React hooks** with memoization

### ♿ **Accessibility First**
- **ARIA labels** and roles for screen readers
- **Semantic HTML** structure
- **High contrast** support
- **Focus indicators** for better UX

### 🎨 **Rich Customization**
- **CSS-in-JS styling** - no external stylesheets needed
- **Animation support** with smooth transitions
- **Flexible theming** with custom colors and sizes
- **Multiple interaction modes** - interactive, read-only, disabled

### 📱 **Mobile Optimized**
- **Touch-friendly** interactions
- **Responsive design** works on all screen sizes  
- **High DPI support** for retina displays

## 📦 Installation

**NPM:**
```bash
npm install @mil-rlib/reactjs-star-rating
```

**Yarn:**
```bash
yarn add @mil-rlib/reactjs-star-rating
```

**CDN (ES Modules):**
```html
<script type="module">
  import StarRating from 'https://unpkg.com/@mil-rlib/reactjs-star-rating/dist/index.js'
</script>
```

## 📖 Usage Guide

### 🔰 Basic Rating

Simple interactive star rating with click handling:

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

function BasicRating() {
  const [rating, setRating] = useState(0)

  return (
    <div>
      <StarRating 
        activeStars={rating} 
        totalStars={5} 
        onClick={setRating} 
      />
      <p>Selected rating: {rating}</p>
    </div>
  )
}
```

### ⭐ Half-Star Precision

Enable half-star ratings by clicking left/right halves of stars:

```jsx
function HalfStarRating() {
  const [rating, setRating] = useState(3.5)

  return (
    <StarRating
      activeStars={rating}
      totalStars={5}
      onClick={setRating}
      allowHalf={true}           // Enable half-star precision
      precision={0.5}            // 0.5 increment steps
      starStyle={{ fontSize: '32px', margin: '0 2px' }}
      activeStarStyle={{ color: '#ffa534' }}
      inActiveStarStyle={{ color: '#e0e0e0' }}
    />
  )
}
```

### 🎨 Custom Styling

Fully customize appearance with CSS-in-JS:

```jsx
function CustomStyledRating() {
  const [rating, setRating] = useState(4)

  return (
    <StarRating
      activeStars={rating}
      onClick={setRating}
      totalStars={5}
      starStyle={{
        fontSize: '28px',
        margin: '0 4px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      activeStarStyle={{
        color: '#ff4757',
        textShadow: '0 0 10px rgba(255,71,87,0.5)',
      }}
      inActiveStarStyle={{
        color: '#ddd',
        opacity: 0.7,
      }}
      containerStyle={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        display: 'inline-block',
      }}
    />
  )
}
```

### 🎭 Interactive Modes

Different interaction modes for various use cases:

```jsx
function InteractionModes() {
  const [rating, setRating] = useState(4.5)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Interactive Mode - Full Control */}
      <div>
        <h4>Interactive (Default)</h4>
        <StarRating 
          activeStars={rating} 
          onClick={setRating}
          allowHalf={true}
          animate={true}
        />
      </div>

      {/* Read-Only Mode - Display Only */}
      <div>
        <h4>Read-Only Display</h4>
        <StarRating 
          activeStars={4.7} 
          readOnly={true}
          allowHalf={true}
          starStyle={{ color: '#ffc107' }}
        />
        <small>Perfect for showing average ratings</small>
      </div>

      {/* Disabled Mode - No Interactions */}
      <div>
        <h4>Disabled State</h4>
        <StarRating 
          activeStars={3} 
          disabled={true}
          starStyle={{ opacity: 0.5 }}
        />
      </div>

      {/* Clearable Mode - Click to Clear */}
      <div>
        <h4>Clearable Rating</h4>
        <StarRating 
          activeStars={rating} 
          onClick={setRating}
          clearable={true}
          onClear={() => setRating(0)}
        />
        <small>Click same rating to clear</small>
      </div>
      
    </div>
  )
}
```

### 🎬 Animations & Effects

Add smooth animations for better user experience:

```jsx
function AnimatedRating() {
  const [rating, setRating] = useState(2.5)

  return (
    <StarRating
      activeStars={rating}
      onClick={setRating}
      allowHalf={true}
      animate={true}              // Enable scale animation
      starStyle={{
        fontSize: '36px',
        margin: '0 5px',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
      }}
      activeStarStyle={{
        color: '#ff6b6b',
        filter: 'drop-shadow(0 0 8px rgba(255,107,107,0.4))',
      }}
      containerStyle={{
        padding: '20px',
      }}
    />
  )
}
```

## 📋 Complete API Reference

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`activeStars`** | `number` | `0` | **Current rating value**. Supports decimals for half-stars (e.g., `3.5`). This is the displayed rating. |
| **`totalStars`** | `number` | `5` | **Total number of stars** to display. Common values: `5`, `10`. |
| **`onClick`** | `(rating: number) => void` | `() => {}` | **Click handler** - receives the new rating value when a star is clicked. |

```jsx
// Basic usage
<StarRating 
  activeStars={3.5} 
  totalStars={5} 
  onClick={(rating) => console.log('New rating:', rating)} 
/>
```

### Precision & Half-Stars

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`allowHalf`** | `boolean` | `false` | **Enable half-star ratings**. Users can click left/right halves of stars for 0.5 increments. |
| **`precision`** | `number` | `1` | **Rating step precision**. Use `0.5` for half-stars, `1` for full stars only. |

```jsx
// Half-star precision example
<StarRating 
  activeStars={2.5}
  allowHalf={true}
  precision={0.5}        // Allows 0.5 increments: 1, 1.5, 2, 2.5, etc.
  onClick={setRating}
/>
```

### Interaction Modes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`readOnly`** | `boolean` | `false` | **Display-only mode**. No interactions, perfect for showing average ratings or reviews. |
| **`disabled`** | `boolean` | `false` | **Disable all interactions**. Stars become non-interactive and typically styled differently. |
| **`clearable`** | `boolean` | `false` | **Allow clearing rating**. Clicking the same rating sets it to 0. Requires `onClear` or uses `onClick(0)`. |
| **`onClear`** | `() => void` | `undefined` | **Clear callback**. Called when rating is cleared. If not provided, falls back to `onClick(0)`. |

```jsx
// Different interaction modes
<StarRating activeStars={4} readOnly={true} />              {/* Display only */}
<StarRating activeStars={4} disabled={true} />              {/* No interactions */}
<StarRating clearable={true} onClear={() => setRating(0)} /> {/* Clearable */}
```

### Visual Customization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`animate`** | `boolean` | `false` | **Enable hover animations**. Stars scale smoothly on hover and click for better UX. |
| **`direction`** | `'horizontal' \| 'vertical'` | `'horizontal'` | **Layout direction**. Display stars horizontally or vertically. |

```jsx
// Animation and direction
<StarRating animate={true} direction="vertical" />
```

### Styling Props (CSS-in-JS)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`containerStyle`** | `CSSProperties` | `{}` | **Container element styles**. Applied to the wrapper div containing all stars. |
| **`starStyle`** | `CSSProperties` | `{}` | **Base star styles**. Applied to all star elements. Controls size, spacing, transitions. |
| **`activeStarStyle`** | `CSSProperties` | `{}` | **Active star styles**. Applied to filled/active star portions. Controls color, effects. |
| **`inActiveStarStyle`** | `CSSProperties` | `{}` | **Inactive star styles**. Applied to empty/inactive star portions. |

```jsx
// Complete styling example
<StarRating
  containerStyle={{
    padding: '16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  }}
  starStyle={{
    fontSize: '32px',
    margin: '0 4px',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }}
  activeStarStyle={{
    color: '#ff6b35',
    textShadow: '0 0 8px rgba(255,107,53,0.4)',
    filter: 'drop-shadow(0 2px 4px rgba(255,107,53,0.3))',
  }}
  inActiveStarStyle={{
    color: '#e1e5e9',
    opacity: 0.8,
  }}
/>
```

### Advanced Examples

**E-commerce Product Rating:**
```jsx
function ProductRating({ averageRating, totalReviews }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <StarRating
        activeStars={averageRating}
        readOnly={true}
        allowHalf={true}
        starStyle={{ fontSize: '18px', color: '#ffc107' }}
      />
      <span style={{ color: '#666', fontSize: '14px' }}>
        ({totalReviews} reviews)
      </span>
    </div>
  )
}

// Usage
<ProductRating averageRating={4.3} totalReviews={127} />
```

**User Review Form:**
```jsx
function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (rating > 0) {
      // Submit review logic
      setSubmitted(true)
    }
  }

  return (
    <div>
      <h3>Rate this product:</h3>
      <StarRating
        activeStars={rating}
        onClick={setRating}
        allowHalf={true}
        clearable={true}
        animate={true}
        starStyle={{ fontSize: '28px', margin: '0 3px' }}
        activeStarStyle={{ color: '#4caf50' }}
        onClear={() => setRating(0)}
      />
      <p>Your rating: {rating || 'Not rated'}</p>
      <button 
        onClick={handleSubmit} 
        disabled={rating === 0}
        style={{ 
          marginTop: '16px',
          opacity: rating > 0 ? 1 : 0.5 
        }}
      >
        Submit Review
      </button>
    </div>
  )
}
```

## ⚡ Performance & Bundle Size

This component is meticulously optimized for performance:

### 📦 **Ultra-Small Bundle**
```bash
Build Output:
  889 B  - index.js.br     # 🎉 Brotli compressed (75% smaller!)
  1057 B - index.js.gz     # 🗜️ Gzip compressed  
  ~3.8KB - index.js        # 📦 Raw ES module
```

### 🚀 **Performance Features**
- **Zero runtime dependencies** - No PropTypes, lodash, or external libs
- **Tree-shakeable ES modules** - Only import what you need
- **Optimized React hooks** - Uses `useMemo` and `useCallback` for minimal re-renders  
- **Single-pass rendering** - Efficient DOM updates with minimal operations
- **CSS-in-JS approach** - No external stylesheets to load

### 📊 **Benchmark Comparison**
| Library | Bundle Size (Brotli) | Dependencies | Half-Stars | TypeScript |
|---------|---------------------|--------------|------------|------------|
| @mil-rlib/reactjs-star-rating | **889B** ✅ | **0** ✅ | ✅ | ✅ |
| react-star-ratings | 4.2KB | 2 | ❌ | ❌ |
| react-rating-stars-component | 3.1KB | 1 | ✅ | ❌ |
| react-simple-star-rating | 2.8KB | 0 | ✅ | ❌ |

### ♿ **Accessibility Built-In**
- **ARIA labels and roles** for screen readers
- **Semantic HTML structure** with proper roles
- **High contrast support** for visually impaired users
- **Focus indicators** (when not disabled/read-only)
- **Screen reader announcements** for rating changes

## 🔄 Migration Guide

### Upgrading from v1.x to v2.x

**Good News:** v2.x is **100% backward compatible** with v1.x! All existing code continues to work without changes.

#### **What's New in v2.x**
- ✅ **Half-star precision** with `allowHalf` and `precision` props
- ✅ **75% smaller bundle** - from 4.3KB to 889B brotli
- ✅ **Zero dependencies** - removed PropTypes and other deps
- ✅ **Enhanced animations** with `animate` prop
- ✅ **Clearable ratings** with `clearable` and `onClear` props
- ✅ **Better accessibility** with improved ARIA support
- ✅ **TypeScript definitions** included out of the box

#### **Breaking Changes**
🎉 **None!** Your v1.x code works unchanged:

```jsx
// ✅ v1.x code - works perfectly in v2.x
<StarRating activeStars={3} totalStars={5} onClick={setRating} />
```

#### **Recommended Upgrades**

**1. Enable Half-Stars (Optional)**
```jsx
// Before (v1.x)
<StarRating activeStars={3} onClick={setRating} />

// After (v2.x) - Add half-star precision
<StarRating 
  activeStars={3.5}     // Now supports decimals!
  allowHalf={true}      // Enable half-star clicks
  onClick={setRating} 
/>
```

**2. Add Animations (Optional)**
```jsx
// Before (v1.x)
<StarRating activeStars={rating} onClick={setRating} />

// After (v2.x) - Add smooth animations
<StarRating 
  activeStars={rating} 
  onClick={setRating}
  animate={true}        // Smooth hover/click animations
/>
```

**3. Enhanced Styling (Optional)**
```jsx
// Before (v1.x) - Limited styling
<StarRating 
  activeStars={rating} 
  onClick={setRating}
  starStyle={{ color: 'gold' }}
/>

// After (v2.x) - Separate active/inactive styling
<StarRating 
  activeStars={rating} 
  onClick={setRating}
  starStyle={{ fontSize: '24px', margin: '0 2px' }}
  activeStarStyle={{ color: '#ffd700', textShadow: '0 0 5px gold' }}
  inActiveStarStyle={{ color: '#ddd', opacity: 0.6 }}
/>
```

**4. Clearable Ratings (New Feature)**
```jsx
// New in v2.x - Allow users to clear their rating
<StarRating 
  activeStars={rating} 
  onClick={setRating}
  clearable={true}                    // Click same rating to clear
  onClear={() => setRating(0)}        // Optional clear callback
/>
```

#### **Bundle Size Improvement**
```bash
# v1.x Bundle Sizes
4.3KB - Brotli compressed
5.8KB - Gzip compressed  
18KB  - Raw bundle

# v2.x Bundle Sizes (75% smaller!)
889B  - Brotli compressed ⬇️ 
1057B - Gzip compressed  ⬇️
3.8KB - Raw bundle       ⬇️
```

#### **TypeScript Users**
v2.x includes built-in TypeScript definitions:

```typescript
// No need for @types/ packages anymore!
import StarRating from '@mil-rlib/reactjs-star-rating'

interface RatingComponentProps {
  initialRating?: number
  onRatingChange: (rating: number) => void
}

const RatingComponent: React.FC<RatingComponentProps> = ({ 
  initialRating = 0, 
  onRatingChange 
}) => (
  <StarRating
    activeStars={initialRating}
    onClick={onRatingChange}
    allowHalf={true}          // TypeScript knows this is boolean
    precision={0.5}           // TypeScript knows this is number
  />
)
```

#### **Performance Notes**
- **Faster rendering** - Optimized React hooks reduce re-renders
- **Smaller app bundles** - 75% less code means faster page loads
- **No dependency conflicts** - Zero runtime dependencies prevent version conflicts
- **Better tree-shaking** - Modern ES modules work better with bundlers

## 🛠 Troubleshooting

### Common Issues & Solutions

**🔍 Stars Not Displaying**
```jsx
// Problem: Stars showing as squares or missing
// Solution: Ensure unicode star character is supported
<StarRating 
  activeStars={3}
  starStyle={{ 
    fontFamily: 'Arial, sans-serif',  // Fallback fonts
    fontSize: '24px'                  // Explicit size
  }}
/>
```

**🌟 Half-Star Precision Issues**
```jsx
// Problem: Half-stars not working
// Solution: Enable both allowHalf and set precision
<StarRating 
  activeStars={3.5}
  allowHalf={true}        // ✅ Required for half-stars
  precision={0.5}         // ✅ Required for 0.5 increments
  onClick={setRating}
/>

// Problem: Unexpected decimal values
// Solution: Validate precision settings
const handleRating = (rating) => {
  // Round to nearest valid increment
  const roundedRating = Math.round(rating / 0.5) * 0.5
  setRating(roundedRating)
}
```

**🎬 Animation Problems**
```jsx
// Problem: Animations not smooth or conflicting
// Solution: Check CSS conflicts and use proper styling
<StarRating 
  animate={true}
  starStyle={{ 
    transition: 'none',     // Clear conflicting transitions
    fontSize: '20px',
    margin: '0 2px'
  }}
  activeStarStyle={{ 
    color: '#ffd700' 
  }}
/>

// CSS to avoid conflicts
.star-rating-container * {
  transition: transform 0.2s ease !important;
}
```

**⚡ Performance Issues**
```jsx
// Problem: Component re-rendering too often
// Solution: Memoize callback functions
import { useCallback, useState } from 'react'

const MyComponent = () => {
  const [rating, setRating] = useState(0)
  
  // ✅ Memoized callback prevents unnecessary re-renders
  const handleRatingChange = useCallback((newRating) => {
    setRating(newRating)
  }, [])
  
  return (
    <StarRating 
      activeStars={rating}
      onClick={handleRatingChange}  // Stable reference
    />
  )
}
```

**🎨 Styling Problems**
```jsx
// Problem: Stars overlapping or misaligned
// Solution: Use proper container styling
<div style={{ 
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px'                    // Space between stars
}}>
  <StarRating 
    activeStars={rating}
    starStyle={{
      display: 'inline-block',  // Prevent layout issues
      lineHeight: 1,            // Consistent height
      verticalAlign: 'middle'   // Proper alignment
    }}
  />
</div>

// Problem: Half-star fills not showing
// Solution: Ensure proper positioning context
<StarRating 
  activeStars={2.5}
  allowHalf={true}
  starStyle={{
    position: 'relative',       // Required for overlay positioning
    fontSize: '24px'
  }}
/>
```

**📱 Mobile Touch Issues**
```jsx
// Problem: Touch events not working on mobile
// Solution: Component handles touch automatically, but ensure proper viewport
<meta name="viewport" content="width=device-width, initial-scale=1.0">

// For custom mobile behavior
<StarRating 
  activeStars={rating}
  onClick={(rating, event) => {
    // Access original touch/click event if needed
    console.log('Touch/Click event:', event)
    setRating(rating)
  }}
/>
```

**🔧 Bundle Size Issues**
```jsx
// Problem: Bundle size larger than expected
// Solution: Ensure proper tree-shaking

// ✅ Correct import (allows tree-shaking)
import StarRating from '@mil-rlib/reactjs-star-rating'

// ❌ Avoid this (imports everything)
import * as StarRatingLib from '@mil-rlib/reactjs-star-rating'

// Webpack Bundle Analyzer to verify
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
```

**⚠️ React Strict Mode Warnings**
```jsx
// Problem: Warnings in React development mode
// Solution: Component is Strict Mode compatible, but check for:

// 1. Stable key props in lists
{ratings.map((rating, index) => (
  <StarRating 
    key={`rating-${rating.id}`}  // Use stable ID, not index
    activeStars={rating.value}
  />
))}

// 2. Proper cleanup in effects
useEffect(() => {
  const handleResize = () => { /* resize logic */ }
  window.addEventListener('resize', handleResize)
  
  return () => window.removeEventListener('resize', handleResize)
}, [])
```

**🌐 Server-Side Rendering (SSR)**
```jsx
// Problem: Hydration mismatches
// Solution: Handle SSR properly

// Next.js
import dynamic from 'next/dynamic'

const StarRating = dynamic(
  () => import('@mil-rlib/reactjs-star-rating'),
  { ssr: false }  // Disable SSR if needed
)

// Or handle hydration manually
const [isClient, setIsClient] = useState(false)

useEffect(() => {
  setIsClient(true)
}, [])

return (
  <div>
    {isClient ? (
      <StarRating activeStars={rating} onClick={setRating} />
    ) : (
      <div>Loading rating...</div>  // Placeholder
    )}
  </div>
)
```

### Getting Help

- **📖 Documentation**: Check all props in the API Reference above
- **🐛 Bug Reports**: [GitHub Issues](https://github.com/mil-rlib/reactjs-star-rating/issues)
- **💡 Feature Requests**: [GitHub Discussions](https://github.com/mil-rlib/reactjs-star-rating/discussions)
- **📦 NPM Package**: [@mil-rlib/reactjs-star-rating](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\
 MIT © [milayek86](https://github.com/milayek86)

## Issues

If you find any issues or have suggestions, please open an issue [here](https://github.com/milayek86/reactjs-star-rating/issues).
