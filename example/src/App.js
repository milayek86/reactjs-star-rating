import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const App = () => {
  const [activeStars, setActiveStars] = useState(0)
  const getStarCount = (count) => {
    setActiveStars(count)
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h3>StarRating with click</h3>
      <StarRating
        activeStars={activeStars}
        totalStars={5}
        starStyle={{ fontSize: 40, color: 'red' }}
        containerStyle={{ border: 'solid', marginBottom: 10 }}
        direction={'horizontal'} //vertical/horizontal
        activeStarStyle={{ color: 'green' }}
        inActiveStarStyle={{ color: 'gray' }}
        onClick={getStarCount}
      />

      <h3>StarRating with disabled</h3>
      <StarRating
        activeStars={3}
        totalStars={5}
        starStyle={{ fontSize: 40, color: 'red' }}
        containerStyle={{ border: 'solid' }}
        direction={'horizontal'} //vertical/horizontal
        activeStarStyle={{ color: 'green' }}
        inActiveStarStyle={{ color: 'gray' }}
        onClick={getStarCount}
        disabled={true}
      />
    </div>
  )
}

export default App
