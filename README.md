# @mil-rlib/reactjs-star-rating

[![NPM](https://img.shields.io/npm/v/@mil-rlib/reactjs-star-rating.svg)](https://www.npmjs.com/package/@mil-rlib/reactjs-star-rating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @mil-rlib/reactjs-star-rating
```

![Demo](https://milayek86.github.io/reactjs-star-rating)

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
    />
  )
}
```

## License

MIT © [milayek86](https://github.com/milayek86)
