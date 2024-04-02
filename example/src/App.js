import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const App = () => {
  const [activeStars, setActiveStars] = useState(0)
  const handleStarClick = (count) => {
    setActiveStars(count)
  }

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>@mil-rlib/reactjs-star-rating</h1>

      <div>
        <div>
          <h3>Customized StarRating with onClick event</h3>
          <StarRating
            activeStars={activeStars}
            totalStars={5}
            starStyle={{ fontSize: 40 }}
            direction={'horizontal'} // vertical or horizontal
            activeStarStyle={{ color: '#ffa534' }}
            inActiveStarStyle={{ color: '#e6e600' }}
            onClick={handleStarClick}
          />
          <h3>Disabled StarRating</h3>
          <StarRating
            activeStars={3}
            totalStars={5}
            starStyle={{ fontSize: 40 }}
            inActiveStarStyle={{ color: 'gray' }}
            disabled
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h3>Vertical StarRating</h3>
          <StarRating
            activeStars={3}
            totalStars={5}
            starStyle={{ fontSize: 40 }}
            direction={'vertical'} //vertical/horizontal
            activeStarStyle={{ color: 'green' }}
            inActiveStarStyle={{ color: 'gray' }}
            containerStyle={{
              marginLeft: '15%'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
