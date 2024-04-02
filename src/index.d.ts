declare module '@mil-rlib/reactjs-star-rating' {
  import React from 'react'

  interface StarPropTypes {
    onClick: () => {}
    direction: String // vertical/horizontal
    totalStars: Number
    activeStars: Number
    containerStyle: Object
    starStyle: Object
    activeStarStyle: Object
    inActiveStarStyle: Object
    disabled: boolean
  }

  const StarRating: React.FC<StarPropTypes>
  export default StarRating
}
