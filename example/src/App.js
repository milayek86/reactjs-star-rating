import React, { useState } from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const App = () => {
  const [basicRating, setBasicRating] = useState(3.5)
  const [halfStarRating, setHalfStarRating] = useState(2.5)
  const [animatedRating, setAnimatedRating] = useState(4)
  const [verticalRating, setVerticalRating] = useState(3)
  const [clearableRating, setClearableRating] = useState(4)

  const demoStyle = {
    margin: '20px 0',
    padding: '15px',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#fafafa'
  }

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        @mil-rlib/reactjs-star-rating v2.0
      </h1>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Next-level React star rating with half-stars, animations & 75% smaller bundle size!
      </p>

      <div style={demoStyle}>
        <h3><span role="img" aria-label="star">🌟</span> Basic Interactive Rating</h3>
        <p>Current: {basicRating} stars</p>
        <StarRating
          activeStars={basicRating}
          totalStars={5}
          onClick={setBasicRating}
          starStyle={{ fontSize: 32 }}
          activeStarStyle={{ color: '#ffa534' }}
          inActiveStarStyle={{ color: '#ddd' }}
        />
      </div>

      <div style={demoStyle}>
        <h3><span role="img" aria-label="star">⭐</span> Half-Star Precision Rating</h3>
        <p>Current: {halfStarRating} stars (try clicking left/right side of stars)</p>
        <StarRating
          activeStars={halfStarRating}
          totalStars={5}
          onClick={setHalfStarRating}
          allowHalf={true}
          precision={0.5}
          starStyle={{ fontSize: 36 }}
          activeStarStyle={{ color: '#ff6b6b' }}
          inActiveStarStyle={{ color: '#e0e0e0' }}
        />
      </div>

      <div style={demoStyle}>
        <h3><span role="img" aria-label="sparkles">✨</span> Animated Rating (with hover effects)</h3>
        <p>Current: {animatedRating} stars</p>
        <StarRating
          activeStars={animatedRating}
          totalStars={5}
          onClick={setAnimatedRating}
          animate={true}
          starStyle={{ fontSize: 30 }}
          activeStarStyle={{ color: '#4ecdc4' }}
          inActiveStarStyle={{ color: '#ddd' }}
        />
      </div>

      <div style={demoStyle}>
        <h3><span role="img" aria-label="mobile">📱</span> Vertical Layout</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <StarRating
            activeStars={verticalRating}
            totalStars={5}
            onClick={setVerticalRating}
            direction="vertical"
            starStyle={{ fontSize: 28 }}
            activeStarStyle={{ color: '#45b7d1' }}
            inActiveStarStyle={{ color: '#ddd' }}
          />
          <span>Current: {verticalRating} stars</span>
        </div>
      </div>

      <div style={demoStyle}>
        <h3><span role="img" aria-label="no entry">🚫</span> Clearable Rating (click same rating to clear)</h3>
        <p>Current: {clearableRating} stars</p>
        <StarRating
          activeStars={clearableRating}
          totalStars={5}
          onClick={setClearableRating}
          clearable={true}
          onClear={() => setClearableRating(0)}
          starStyle={{ fontSize: 30 }}
          activeStarStyle={{ color: '#f39c12' }}
          inActiveStarStyle={{ color: '#ddd' }}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>
          Click the same rating again to clear it
        </p>
      </div>

      <div style={demoStyle}>
        <h3><span role="img" aria-label="locked">🔒</span> Read-only Rating (display only)</h3>
        <StarRating
          activeStars={4.7}
          totalStars={5}
          readOnly={true}
          allowHalf={true}
          starStyle={{ fontSize: 24 }}
          activeStarStyle={{ color: '#e67e22' }}
          inActiveStarStyle={{ color: '#ddd' }}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>
          Perfect for displaying average ratings
        </p>
      </div>



      <div style={{ ...demoStyle, textAlign: 'center' }}>
        <h3><span role="img" aria-label="rocket">🚀</span> Performance Optimized</h3>
        <p>
          <strong>75% smaller bundle:</strong> 4.3KB → 1.07KB gzipped<br />
          <strong>Zero dependencies:</strong> No PropTypes, optimized re-renders<br />
          <strong>Modern features:</strong> Hooks, memoization, accessibility
        </p>
      </div>
    </div>
  )
}

export default App
