declare module '@mil-rlib/reactjs-star-rating' {
  import React, { CSSProperties } from 'react';
   interface StarRatingProps {
    totalStars: number;
    onClick?: (count: number) => void;
    direction?: 'horizontal' | 'vertical';
    activeStars?: number;
    containerStyle?: CSSProperties;
    starStyle?: CSSProperties;
    activeStarStyle?: CSSProperties;
    inActiveStarStyle?: CSSProperties;
    disabled?: boolean;
  }
  
  const StarRating: React.FC<StarRatingProps>;
  export default StarRating;
}