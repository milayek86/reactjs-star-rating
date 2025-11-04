# Contributing to @mil-rlib/reactjs-star-rating

🎉 Thank you for your interest in contributing! This guide will help you get started.

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Development Setup
```bash
# Clone the repository
git clone https://github.com/milayek86/reactjs-star-rating.git
cd reactjs-star-rating

# Install dependencies
npm install

# Install example app dependencies
cd example && npm install && cd ..

# Start development
npm start  # Builds library in watch mode

# In another terminal, run example app
cd example
NODE_OPTIONS="--openssl-legacy-provider" npm start
```

## 🎯 **How to Contribute**

### 🐛 **Bug Reports**
1. Check existing issues first
2. Use the bug report template
3. Include minimal reproduction steps
4. Provide environment details

### ✨ **Feature Requests** 
1. Check if feature already exists or is planned
2. Use the feature request template
3. Explain the use case clearly
4. Consider bundle size impact

### 💻 **Code Contributions**

#### Branch Naming
- `feature/description` - New features
- `bugfix/description` - Bug fixes  
- `docs/description` - Documentation updates
- `perf/description` - Performance improvements

#### Development Workflow
```bash
# Create feature branch
git checkout -b feature/my-awesome-feature

# Make your changes...

# Run tests
npm test

# Build to verify
npm run build

# Commit with descriptive message
git commit -m "feat: add awesome new feature"

# Push and create PR
git push origin feature/my-awesome-feature
```

## 🏗 **Project Structure**

```
├── src/
│   ├── index.js        # Main component (keep it optimized!)
│   ├── index.d.ts      # TypeScript definitions
│   └── index.test.js   # Unit tests
├── example/            # Demo application
│   ├── src/
│   │   ├── App.js      # Example showcase
│   │   └── index.js    # Entry point
│   └── public/         # Static assets
├── dist/              # Built library (auto-generated)
└── .github/           # GitHub templates & workflows
```

## ⚡ **Performance Guidelines**

### Bundle Size Priority
Our main goal is **ultra-small bundle size**. Current: **889B brotli**

- ❌ **Don't add** external dependencies unless absolutely critical
- ✅ **Do optimize** for tree-shaking and compression
- ✅ **Do measure** bundle impact with every change

### Testing Bundle Size
```bash
# Build and check size
npm run build

# Output shows compressed sizes:
# 889B  - index.js.br (brotli)
# 1057B - index.js.gz (gzip)
```

### React Performance
- Use `useMemo` for expensive computations
- Use `useCallback` for event handlers passed as props
- Avoid unnecessary re-renders
- Profile with React DevTools

## 🧪 **Testing Requirements**

### Running Tests
```bash
# Run all tests
npm test

# Unit tests only  
npm run test:unit

# Linting only
npm run test:lint

# Build verification
npm run test:build

# Watch mode during development
npm run test:watch
```

### Test Coverage
- Add tests for new features
- Maintain existing test coverage
- Test accessibility features
- Test edge cases and error scenarios

### Manual Testing
1. **Example app**: Verify all features work in `/example`
2. **Different browsers**: Chrome, Firefox, Safari, Edge
3. **Mobile devices**: Test touch interactions
4. **Accessibility**: Screen readers, keyboard navigation

## 📝 **Code Style**

### JavaScript Guidelines
- Use modern ES6+ syntax
- Prefer functional components with hooks
- Use `const` for immutable values, `let` for mutable
- Add JSDoc comments for complex functions
- Keep functions small and focused

### React Guidelines  
- Use hooks instead of class components
- Memoize callbacks passed as props
- Use descriptive prop names
- Validate props with TypeScript definitions

### CSS Guidelines
- Use CSS-in-JS approach (no external stylesheets)
- Prefer relative units over fixed pixels
- Support both light and dark themes
- Ensure high contrast for accessibility

## 🔄 **Pull Request Process**

### Before Submitting
- [ ] Tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`) 
- [ ] Example app works (`cd example && npm start`)
- [ ] Bundle size impact documented
- [ ] TypeScript definitions updated
- [ ] Documentation updated if needed

### PR Requirements
- Clear, descriptive title
- Complete PR template
- Link to related issue
- Screenshots for visual changes
- Bundle size impact analysis

### Review Process
1. **Automated checks** must pass (tests, lint, build)
2. **Manual review** by maintainers
3. **Discussion** if changes needed
4. **Approval** and merge

## 🎨 **Design Principles**

### Core Values
1. **Performance First** - Every byte matters
2. **Accessibility** - Works for everyone
3. **Developer Experience** - Simple, predictable API
4. **Backward Compatibility** - Don't break existing users

### API Design
- Keep props intuitive and self-explanatory
- Provide sensible defaults
- Support both simple and advanced use cases  
- Maintain consistent naming conventions

## 📚 **Documentation**

### What to Document
- New props in TypeScript definitions
- Usage examples in README
- Breaking changes in CHANGELOG
- Complex logic with inline comments

### Documentation Standards
- Clear, concise explanations
- Working code examples
- Cover edge cases and gotchas
- Update all relevant files

## 🚨 **Security**

### Reporting Security Issues
- **Don't** open public issues for security vulnerabilities
- **Do** email security issues privately to the maintainers
- Include detailed reproduction steps
- Allow time for patches before public disclosure

## 🤝 **Community Guidelines**

### Be Respectful
- Welcome newcomers and questions
- Provide constructive feedback
- Assume good intentions
- Focus on the code, not the person

### Communication
- Use clear, professional language
- Provide context in issues and PRs  
- Be patient with response times
- Help others when you can

## 📞 **Getting Help**

- **Questions**: [GitHub Discussions](https://github.com/milayek86/reactjs-star-rating/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/milayek86/reactjs-star-rating/issues)
- **Feature Requests**: [GitHub Issues](https://github.com/milayek86/reactjs-star-rating/issues)

## 📄 **License**

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make this component better! 🌟