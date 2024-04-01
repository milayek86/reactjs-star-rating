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

export default App
