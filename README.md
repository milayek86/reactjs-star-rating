# @mil-rlib/reactjs-star-rating

[![NPM](https://img.shields.io/npm/v/@mil-rlib/reactjs-star-rating.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

🚀 **Next-level React star rating component** - Ultra-optimized, feature-rich, and 75% smaller bundle size! Professional-grade component for React.js applications with half-star precision, accessibility, animations, and zero dependencies.

## ✨ Features

- **🎯 Half-Star Precision**: Click left/right side of stars for 0.5 increments
- **⚡ Ultra Performance**: 75% smaller bundle (4.3KB → 1.07KB gzipped) with zero dependencies
- **♿ Full Accessibility**: ARIA labels and screen reader support
- **🎨 Rich Animations**: Smooth scale transitions and hover effects
- **🔧 Highly Customizable**: Extensive styling options and behavior controls
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile

- **🚫 Advanced Interactions**: Clearable ratings, read-only mode, disabled states

## Demo

https://github.com/milayek86/reactjs-star-rating/assets/38817202/fbea66ed-26a9-4ba0-8445-56bbd3f98f0d

![react-star-rating](https://github.com/milayek86/reactjs-star-rating/blob/main/static/react-star-rating.gif)

[Demo Link](https://milayek86.github.io/reactjs-star-rating)

## Install

```bash
npm install --save @mil-rlib/reactjs-star-rating
```

OR

```bash
yarn add @mil-rlib/reactjs-star-rating
```

## Usage

### Basic Usage

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const BasicExample = () => {
  const [rating, setRating] = useState(3)

  return (
    <StarRating 
      activeStars={rating} 
      totalStars={5} 
      onClick={setRating} 
    />
  )
}
```

### Half-Star Precision

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const HalfStarExample = () => {
  const [rating, setRating] = useState(3.5)

  return (
    <StarRating
      activeStars={rating}
      totalStars={5}
      onClick={setRating}
      allowHalf={true}           // Enable half-star clicks
      precision={0.5}            // 0.5 = half-star precision
      starStyle={{ fontSize: 32 }}
      activeStarStyle={{ color: '#ffa534' }}
      inActiveStarStyle={{ color: '#ddd' }}
    />
  )
}
```

### Advanced Features

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const AdvancedExample = () => {
  const [rating, setRating] = useState(4)

  return (
    <StarRating
      activeStars={rating}
      totalStars={5}
      onClick={setRating}
      allowHalf={true}           // Half-star support
      animate={true}             // Hover animations  
      clearable={true}           // Click same rating to clear

      onClear={() => setRating(0)} // Clear callback
      starStyle={{ fontSize: 30 }}
      activeStarStyle={{ color: '#ff6b6b' }}
      inActiveStarStyle={{ color: '#e0e0e0' }}
    />
  )
}
```

### Read-Only Display

```jsx
// Perfect for displaying average ratings
<StarRating
  activeStars={4.7}
  totalStars={5}
  readOnly={true}
  allowHalf={true}
  starStyle={{ fontSize: 24 }}
  activeStarStyle={{ color: '#ffc107' }}
/>
```

## 📋 Props

| Name               | Type                              | Default       | Description                                                                                      |
|--------------------|-----------------------------------|---------------|--------------------------------------------------------------------------------------------------|
| `totalStars`       | `number`                          | `5`           | Total number of stars to display                                                                 |
| `activeStars`      | `number`                          | `0`           | Current active star rating (supports decimals like 3.5 for half-stars)                         |
| `onClick`          | `(rating: number) => void`        | `() => {}`    | Callback when star is clicked, receives the new rating value                                     |
| `allowHalf`        | `boolean`                         | `false`       | Enable half-star ratings (click left/right side of stars)                                       |
| `precision`        | `number`                          | `1`           | Rating precision: 0.5 for half-stars, 1 for full stars only                                     |
| `disabled`         | `boolean`                         | `false`       | Disable all interactions                                                                         |
| `readOnly`         | `boolean`                         | `false`       | Make component read-only (visual display only)                                                   |
| `animate`          | `boolean`                         | `false`       | Enable scale animation on hover/active states                                                    |
| `direction`        | `'horizontal' \| 'vertical'`      | `'horizontal'`| Layout direction for the stars                                                                   |
| `containerStyle`   | `CSSProperties`                   | `{}`          | CSS styles for the container element                                                             |
| `starStyle`        | `CSSProperties`                   | `{}`          | CSS styles for individual star elements                                                          |
| `activeStarStyle`  | `CSSProperties`                   | `{}`          | CSS styles for active (filled) stars                                                            |
| `inActiveStarStyle`| `CSSProperties`                   | `{}`          | CSS styles for inactive (empty) stars                                                           |

| `clearable`        | `boolean`                         | `false`       | Allow clicking the same rating to clear it (set to 0)                                           |
| `onClear`          | `() => void`                      | `undefined`   | Callback when rating is cleared (optional, falls back to onClick(0))                           |

## ⚡ Performance

This component is built for performance:

- **Ultra-small bundle**: 1.07KB brotli compressed (75% smaller than v1.0)
- **Zero dependencies**: No PropTypes, no external libraries
- **Optimized re-renders**: Uses React hooks with `useMemo` and `useCallback`
- **Tree-shakable**: ES modules with clean exports
- **Accessibility**: Full ARIA support without bloat

```bash
Build "reactjsStarRating" to dist:
  1089 B: index.js.br     # 🎉 Brotli compressed  
  1254 B: index.js.gz     # 🗜️ Gzip compressed
  ~4.2KB: index.js        # 📦 Raw ES module
```

## 🆚 Migration from v1.x

If you're upgrading from v1.x, the API is fully backward compatible! New features are opt-in:

```jsx
// v1.x - still works exactly the same
<StarRating activeStars={3} totalStars={5} onClick={setRating} />

// v2.x - unlock new features  
<StarRating 
  activeStars={3.5} 
  allowHalf={true} 
  animate={true} 
  clearable={true}
  onClick={setRating} 
/>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\
 MIT © [milayek86](https://github.com/milayek86)

## Issues

If you find any issues or have suggestions, please open an issue [here](https://github.com/milayek86/reactjs-star-rating/issues).
