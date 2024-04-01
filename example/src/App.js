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

export default App
