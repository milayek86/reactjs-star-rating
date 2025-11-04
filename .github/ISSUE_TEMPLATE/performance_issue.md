---
name: Performance Issue
about: Report performance problems or bundle size concerns
title: '[PERFORMANCE] '
labels: 'performance'
assignees: 'milayek86'

---

## ⚡ Performance Issue Description
A clear and concise description of the performance problem.

## 📊 Metrics & Measurements
- **Bundle size impact:** [e.g. increased by 500B]
- **Render time:** [e.g. takes 50ms to render]
- **Memory usage:** [if applicable]
- **Network requests:** [if applicable]

## 🔧 Environment Details
- **Package Version:** [e.g. 2.0.0]
- **React Version:** [e.g. 18.3.1] 
- **Browser:** [e.g. Chrome 119]
- **Device:** [e.g. iPhone 13, MacBook Pro M1]
- **Bundler:** [e.g. Webpack 5, Vite, Parcel]

## 📋 Component Usage
```jsx
<StarRating
  // Include your exact configuration
  activeStars={rating}
  totalStars={100}  // e.g. if using many stars
  // ... other props
/>
```

## 🔍 Performance Profiling
If you've done any profiling, please include:
- React DevTools Profiler screenshots
- Bundle analyzer results
- Network tab screenshots
- Performance tab measurements

## 🎯 Expected Performance
What performance do you expect? (e.g. render under 10ms, bundle under 1KB)

## 💡 Optimization Suggestions
Do you have any ideas for improving performance?

## 🔗 Related Issues
Link to any related performance issues or discussions.