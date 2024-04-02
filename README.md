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

```jsx
import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const App = () => {
  const [activeStars, setActiveStars] = useState(0)
  const getStarCount = (count) => {
    setActiveStars(count)
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
      onClick={getStarCount}
      disabled={true}
    />
  )
}
```

## License

 This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\
 MIT © [milayek86](https://github.com/milayek86)


## Issues
If you find any issues or have suggestions, please open an issue [here](https://github.com/milayek86/reactjs-star-rating/issues).
