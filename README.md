# @mil-rlib/reactjs-star-rating

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@mil-rlib/reactjs-star-rating.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @mil-rlib/reactjs-star-rating
```

## Usage

```jsx
import React from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const App = () => {
  return (
    <StarRating
      activeStars={2}
      totalStars={10}
      starStyle={{ fontSize: 40, color: 'red' }}
      containerStyle={{ border: 'solid' }}
      direction={'horizontal'} //vertical/horizontal
      activeStarStyle={{ color: 'green' }}
      inActiveStarStyle={{ color: 'gray' }}
    />
  )
}
```

## License

MIT © [milayek86](https://github.com/milayek86)
