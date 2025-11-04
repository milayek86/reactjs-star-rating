import React, { useState, useCallback, useMemo } from 'react'

const StarRating = ({
  onClick = () => {},
  totalStars = 5,
  activeStars = 0,
  allowHalf = false,
  precision = 1,
  disabled = false,
  readOnly = false,
  animate = false,
  direction = 'horizontal',
  containerStyle = {},
  starStyle = {},
  activeStarStyle = {},
  inActiveStarStyle = {},
  clearable = false,
  onClear
}) => {
  const [hoveredValue, setHoveredValue] = useState(0)

  // Current rating calculation
  const currentRating = hoveredValue || activeStars

  const handleStarEvent = useCallback(
    (e, index, isClick = false) => {
      if (disabled || readOnly) return

      const starValue = index + 1
      let value = starValue

      // Half-star calculation for precise positioning
      if (allowHalf && precision <= 0.5) {
        const rect = e.currentTarget.getBoundingClientRect()
        const isLeftHalf = e.clientX - rect.left < rect.width / 2
        value = isLeftHalf ? starValue - 0.5 : starValue
      }

      if (isClick) {
        // Clear functionality
        if (clearable && value === activeStars) {
          onClear ? onClear() : onClick(0)
          return
        }
        onClick(value)
      } else {
        setHoveredValue(value)
      }
    },
    [
      disabled,
      readOnly,
      allowHalf,
      precision,
      clearable,
      activeStars,
      onClick,
      onClear
    ]
  )

  const handleMouseLeave = useCallback(() => setHoveredValue(0), [])

  // Optimized styles
  const containerStyles = useMemo(
    () => ({
      display: 'inline-flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      userSelect: 'none',
      outline: 'none',
      ...containerStyle
    }),
    [direction, containerStyle]
  )

  const baseStarStyles = useMemo(
    () => ({
      position: 'relative',
      display: 'inline-block',
      fontSize: 24,
      lineHeight: 1,
      cursor: disabled ? 'default' : 'pointer',
      color: '#ddd',
      transition: animate ? 'transform 0.1s ease' : 'none',
      ...starStyle,
      ...inActiveStarStyle
    }),
    [disabled, animate, starStyle, inActiveStarStyle]
  )

  // Render optimized stars
  const renderStar = (index) => {
    const starValue = index + 1
    const fillValue = Math.max(0, Math.min(starValue, currentRating))
    const fillPercentage = Math.round(
      Math.max(0, Math.min(100, (fillValue - index) * 100))
    )

    const activeStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: `${fillPercentage}%`,
      overflow: 'hidden',
      color: '#ffc107',
      ...activeStarStyle
    }

    const starAnimateStyle =
      animate && fillPercentage > 0 ? { transform: 'scale(1.05)' } : {}

    return (
      <span
        key={index}
        style={{ ...baseStarStyles, ...starAnimateStyle }}
        onClick={(e) => handleStarEvent(e, index, true)}
        onMouseMove={(e) => handleStarEvent(e, index)}
        role='button'
        aria-label={`${starValue} star${starValue !== 1 ? 's' : ''}`}
      >
        ★{fillPercentage > 0 && <span style={activeStyles}>★</span>}
      </span>
    )
  }

  return (
    <div
      style={containerStyles}
      onMouseLeave={handleMouseLeave}
      role='radiogroup'
      aria-label={`Star rating: ${activeStars} out of ${totalStars} stars`}
    >
      {Array.from({ length: totalStars }, (_, i) => renderStar(i))}
    </div>
  )
}

export default StarRating
