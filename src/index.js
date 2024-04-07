import React, { useState } from 'react'
import PropTypes from 'prop-types'

const defaultStarCount = 5
const StarRating = ({
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
  const [totalActiveStars, setTotalActiveStars] = useState(activeStars)
  const [onHoverActiveStars, setOnHoverActiveStars] = useState(0)

  const onClickStar = (sCount) => {
    setTotalActiveStars(sCount)
    onClick(sCount)
  }

  return (
    <div style={{ width: 'fit-content', margin: 1, ...containerStyle }}>
      <div
        style={{
          display: 'flex',
          cursor: !disabled ? 'pointer' : 'default',
          userSelect: 'none',
          flexDirection: direction === 'horizontal' ? 'row' : 'column'
        }}
        {...(!disabled
          ? {
              onClick: (e) =>
                onClickStar(+e.target.getAttribute('data-count') + 1),
              onMouseOver: (e) =>
                setOnHoverActiveStars(+e.target.getAttribute('data-count') + 1),
              onMouseOut: (e) => setOnHoverActiveStars(0)
            }
          : {})}
      >
        {Array.from({ length: totalStars }, (_, i) => {
          const isActive =
            (onHoverActiveStars > 0 && i + 1 <= onHoverActiveStars) ||
            (onHoverActiveStars === 0 && i + 1 <= totalActiveStars)

          return (
            <span
              key={i}
              data-count={i}
              style={{
                fontSize: 25,
                ...starStyle,
                ...(isActive ? activeStarStyle : inActiveStarStyle)
              }}
            >
              {isActive ? '\u2605' : '\u2606'}
            </span>
          )
        })}
      </div>
    </div>
  )
}

StarRating.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
  totalStars: PropTypes.number.isRequired,
  activeStars: PropTypes.number,
  containerStyle: PropTypes.object,
  starStyle: PropTypes.object,
  activeStarStyle: PropTypes.object,
  inActiveStarStyle: PropTypes.object,
  disabled: PropTypes.bool
}

export default StarRating
