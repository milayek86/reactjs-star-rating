# @mil-rlib/reactjs-star-rating

[![NPM](https://img.shields.io/npm/v/@mil-rlib/reactjs-star-rating.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

React.js Star Rating is a professional-grade component tailored for React.js applications, offering a seamless way to integrate customizable star ratings into your projects. It provides a sleek and intuitive interface for users to rate content or products effortlessly.

## Features

- **Simplicity**: Easily integrate star ratings into your React.js applications with minimal effort.
- **Customizability**: Customize the appearance of stars, including size, colors, and more, to align with your design requirements.
- **Flexibility**: Choose between full and half-star rating options to suit your specific use cases.
- **Accessibility**: Designed with accessibility in mind, ensuring an inclusive user experience for all.

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
import React from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const BasicExample = () => {
  const handleStarClick = (starCount) => {
    console.log('Clicked star index:', starCount)
  }

  return <StarRating activeStars={3} totalStars={5} onClick={handleStarClick} />
}

export default BasicExample
```

### Customization

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const App = () => {
  const [activeStars, setActiveStars] = useState(0)
  const handleStarClick = (starCount) => {
    setActiveStars(starCount)
  }

  return (
    <StarRating
      activeStars={activeStars}
      totalStars={10}
      starStyle={{ fontSize: 40, color: 'red' }}
      containerStyle={{ border: 'solid' }}
      direction={'horizontal'} //vertical/horizontal
      activeStarStyle={{ color: 'green' }}
      inActiveStarStyle={{ color: 'gray' }}
      onClick={handleStarClick}
      disabled={true}
    />
  )
}
```

### Disabled Rating

```jsx
import React from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const DisabledExample = () => {
  return (
    <StarRating
      activeStars={4}
      totalStars={5}
      onClick={(starCount) => console.log('Clicked star count:', starCount)}
      disabled
    />
  )
}

export default DisabledExample
```

## Props

## Props

| Name             | Type                            | Default | Required | Description                                                                                      |
|------------------|---------------------------------|---------|----------|--------------------------------------------------------------------------------------------------|
| `onClick`        | `(count: number) => void`      | `() => {}` | No       | Callback function invoked when a star is clicked. Receives the count of the clicked star as an argument. |
| `direction`      | `string (horizontal / vertical)`| `horizontal` | No       | Specifies the direction of the star rating display.                                                |
| `totalStars`     | `number`                        | `5`       | Yes      | The total number of stars to be displayed in the rating component.                                 |
| `activeStars`    | `number`                        | `0`       | No       | The number of active stars initially selected or highlighted.                                       |
| `containerStyle` | `CSSProperties`                 | `{}`      | No       | Additional CSS styles to apply to the container of the star rating component.                       |
| `starStyle`      | `CSSProperties`                 | `{}`      | No       | Additional CSS styles to apply to each individual star element.                                      |
| `activeStarStyle`| `CSSProperties`                 | `{}`      | No       | Additional CSS styles to apply to active (filled) stars.                                             |
| `inActiveStarStyle` | `CSSProperties`              | `{}`      | No       | Additional CSS styles to apply to inactive (empty) stars.                                            |
| `disabled`       | `boolean`                       | `false`   | No       | Disables the star rating component when set to `true`, preventing interaction with the stars.     |



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\
 MIT © [milayek86](https://github.com/milayek86)

## Issues

If you find any issues or have suggestions, please open an issue [here](https://github.com/milayek86/reactjs-star-rating/issues).
