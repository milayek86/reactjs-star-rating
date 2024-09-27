import React, { useState } from 'react'
import PropTypes from 'prop-types'

const defaultStarCount = 5

const StarRating = React.memo(
  ({
    onClick = () => {},
    totalStars = defaultStarCount,
    activeStars = 0,
    containerStyle = {},
    starStyle = {},
    direction = 'horizontal',
    activeStarStyle = {},
    inActiveStarStyle = {},
    disabled = false
  }) => {
    const [hoveredStars, setHoveredStars] = useState(0)

    const handleStarClick = (count) => {
      if (!disabled) {
        onClick(count)
      }
    }

    const handleMouseOver = (count) => !disabled && setHoveredStars(count)
    const handleMouseOut = () => setHoveredStars(0)

    return (
      <div style={{ width: 'fit-content', margin: 1, ...containerStyle }}>
        <div
          style={{
            display: 'flex',
            userSelect: 'none',
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
            cursor: disabled ? 'default' : 'pointer'
          }}
          onMouseOut={handleMouseOut}
        >
          {Array.from({ length: totalStars }, (_, i) => {
            const starCount = i + 1
            const isActive = (hoveredStars || activeStars) >= starCount
            const starStyles = {
              fontSize: 25,
              ...starStyle,
              ...(isActive ? activeStarStyle : inActiveStarStyle)
            }

            return (
              <span
                key={i}
                style={starStyles}
                onClick={() => handleStarClick(starCount)}
                onMouseOver={() => handleMouseOver(starCount)}
                data-count={i}
              >
                {isActive ? '\u2605' : '\u2606'}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
)

StarRating.propTypes = {
  onClick: PropTypes.func,
  totalStars: PropTypes.number.isRequired,
  activeStars: PropTypes.number,
  containerStyle: PropTypes.object,
  starStyle: PropTypes.object,
  activeStarStyle: PropTypes.object,
  inActiveStarStyle: PropTypes.object,
  direction: PropTypes.string,
  disabled: PropTypes.bool
}

export default StarRating
