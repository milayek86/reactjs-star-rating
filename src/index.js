import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const defaultStarCount = 5
const starOutling = <Fragment>&#9734;</Fragment>
const starFilled = <Fragment>&#9733;</Fragment>

const StarRating = ({
  onClick,
  totalStars,
  activeStars,
  containerStyle,
  starStyle,
  direction,
  activeStarStyle,
  inActiveStarStyle,
  disabled
}) => {
  const ts = totalStars > 0 ? totalStars : defaultStarCount

  const [totalActiveStars, setTotalActiveStars] = useState(
    activeStars <= ts ? activeStars : 0
  )
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
        {Array(ts)
          .fill('')
          .map((e, i) => {
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
                {isActive ? starFilled : starOutling}
              </span>
            )
          })}
      </div>
    </div>
  )
}

StarRating.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
  totalStars: PropTypes.number.isRequired,
  activeStars: PropTypes.number,
  containerStyle: PropTypes.object,
  starStyle: PropTypes.object,
  activeStarStyle: PropTypes.object,
  inActiveStarStyle: PropTypes.object,
  disabled: PropTypes.bool
}

StarRating.defaultProps = {
  onClick: () => {},
  direction: 'horizontal',
  totalStars: defaultStarCount,
  activeStars: 0,
  containerStyle: {},
  starStyle: {},
  activeStarStyle: {},
  inActiveStarStyle: {},
  disabled: false
}
export default StarRating
