declare module '@mil-rlib/reactjs-star-rating' {
  import React, { CSSProperties } from 'react';
  
  interface StarRatingProps {
    /** Total number of stars to display */
    totalStars?: number;
    /** Current active star rating (supports decimals for half-stars) */
    activeStars?: number;
    /** Callback when star is clicked, receives the star value */
    onClick?: (rating: number) => void;
    /** Enable half-star ratings */
    allowHalf?: boolean;
    /** Precision for half-stars (0.5 = half-star, 1 = full star only) */
    precision?: number;
    /** Disable all interactions */
    disabled?: boolean;
    /** Make component read-only (visual only, no interactions) */
    readOnly?: boolean;
    /** Enable scale animation on hover/active */
    animate?: boolean;
    /** Layout direction */
    direction?: 'horizontal' | 'vertical';
    /** Container element styles */
    containerStyle?: CSSProperties;
    /** Individual star element styles */
    starStyle?: CSSProperties;
    /** Active (filled) star styles */
    activeStarStyle?: CSSProperties;
    /** Inactive (empty) star styles */
    inActiveStarStyle?: CSSProperties;

    /** Allow clicking same rating to clear (set to 0) */
    clearable?: boolean;
    /** Callback when rating is cleared */
    onClear?: () => void;
  }
  
  const StarRating: React.FC<StarRatingProps>;
  export default StarRating;
}