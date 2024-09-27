import React, { useState } from 'react';
import StarRating from '@mil-rlib/reactjs-star-rating';

const App = () => {
  const [activeStars, setActiveStars] = useState(0); // For the interactive star rating
  const [disabledStars] = useState(3); // Fixed active stars for the disabled rating
  const [verticalStars, setVerticalStars] = useState(3); // For the vertical star rating

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
            direction="horizontal" // vertical or horizontal
            activeStarStyle={{ color: '#ffa534' }}
            inActiveStarStyle={{ color: '#e6e600' }}
            onClick={setActiveStars} // Update active stars directly
          />
          <h3>Disabled StarRating</h3>
          <StarRating
            activeStars={disabledStars}
            totalStars={5}
            starStyle={{ fontSize: 40 }}
            inActiveStarStyle={{ color: 'gray' }}
            disabled
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3>Vertical StarRating</h3>
          <StarRating
            activeStars={verticalStars}
            totalStars={5}
            starStyle={{ fontSize: 40 }}
            direction="vertical" // vertical/horizontal
            activeStarStyle={{ color: 'green' }}
            inActiveStarStyle={{ color: 'gray' }}
            containerStyle={{
              marginLeft: '15%',
            }}
            onClick={setVerticalStars} // Update active stars for vertical rating
          />
        </div>
      </div>
    </div>
  );
};

export default App;
