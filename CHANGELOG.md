# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Comprehensive project rules and guidelines documentation (`PROJECT_RULES.md`)
- CHANGELOG.md for tracking all project changes
- Accessibility testing tools (axe-core)
- Skip navigation link for keyboard users
- Screen reader support with proper ARIA labels
- High contrast mode support
- Reduced motion preferences support
- Focus management and keyboard navigation
- Semantic HTML structure with proper roles
- Tab interface accessibility for code examples
- **Contact form with EmailJS integration**
  - Client-side email sending without backend
  - Form validation with real-time error feedback
  - Loading states and success/error messages
  - Full accessibility support (ARIA labels, keyboard navigation)
  - Responsive design for mobile devices
  - Environment variable configuration for security
- **Complete Implementation Guide** (`IMPLEMENTATION_GUIDE.md`)
  - Step-by-step development process documentation
  - Technology stack decisions and rationale
  - Accessibility implementation details
  - Email service setup instructions
  - Future development roadmap
  - Success metrics and maintenance guidelines
- **UI Improvement**: Removed redundant email contact tile from contact section (email form now primary contact method)
- Small portfolio gallery section with stock-style image cards and captions (placeholder visuals to be replaced later)

### Changed

- Updated hero section text contrast (removed opacity for better accessibility)
- Enhanced ESLint configuration with Prettier integration
- Improved contact links with proper external link indicators
- Updated education data with real LinkedIn information
- Enhanced CSS with accessibility-focused focus indicators

### Technical Improvements

- Added TypeScript strict mode configuration
- Implemented CSS custom properties for consistent theming
- Added responsive design patterns
- Enhanced build process with proper TypeScript compilation
- Added development and production build scripts

## [0.0.1] - 2026-04-17

### Added

- Initial portfolio website setup with React + TypeScript + Vite
- Hero section with animated content
- Education timeline component
- Code examples showcase with tabbed interface
- Fun facts section
- Contact information with social links
- Responsive navigation bar
- Modern CSS with animations and transitions
- ESLint and Prettier configuration
- Basic project structure and components

### Technical Stack

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- ESLint 8.55.0
- Prettier (latest)
- CSS3 with custom properties

---

## Types of changes

- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` in case of vulnerabilities

## Versioning

This project uses [Semantic Versioning](https://semver.org/).

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards compatible manner
- PATCH version when you make backwards compatible bug fixes

---

_Changelog maintained according to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)_
