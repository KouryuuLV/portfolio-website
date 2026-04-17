# Portfolio Website - Project Rules & Guidelines

## 📋 Project Overview

A modern, accessible portfolio website built with React, TypeScript, and Vite, showcasing full-stack development skills with a focus on clean code, accessibility, and performance.

## 🛠️ Technology Stack

### Core Technologies

- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.0.8
- **Language**: TypeScript 5.2.2
- **Styling**: CSS3 with CSS Variables (Custom Properties)

### Development Tools

- **Code Quality**: ESLint 8.55.0 with TypeScript support
- **Code Formatting**: Prettier with custom configuration
- **Package Manager**: npm
- **Version Control**: Git

### Accessibility & Testing

- **Accessibility**: axe-core for automated testing
- **Standards**: WCAG 2.1 AA compliance
- **Screen Readers**: NVDA, JAWS, VoiceOver compatibility

### Email Service

- **Provider**: EmailJS (@emailjs/browser)
- **Purpose**: Client-side email sending without backend
- **Configuration**: Environment variables (VITE*EMAILJS*\*)
- **Features**: Form validation, loading states, error handling
- **Security**: Public key exposed (client-side only)

## 📏 Coding Standards

### TypeScript

- Strict type checking enabled
- Interface definitions for all component props
- Proper typing for event handlers and state
- No `any` types without explicit justification

### React

- Functional components with hooks
- Proper key props for list rendering
- Controlled components for forms
- Error boundaries for production resilience

### CSS

- CSS Variables for theming and consistency
- BEM-like naming convention for classes
- Responsive design with mobile-first approach
- CSS Grid and Flexbox for layouts

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance Requirements

- **Contrast Ratio**: 4.5:1 minimum for normal text, 3:1 for large text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order

### Implementation Rules

- All images must have alt text or be marked as decorative
- Form elements require proper labels
- Color should not be the only way to convey information
- Skip links for keyboard navigation
- Reduced motion support for animations

## 🎨 Design System

### Color Palette

- **Primary**: #2563eb (Blue)
- **Secondary**: #64748b (Gray)
- **Accent**: #f59e0b (Amber)
- **Success**: #10b981 (Green)
- **Error**: #ef4444 (Red)
- **Text Dark**: #1e293b
- **Text Light**: #64748b
- **Background**: #ffffff / #f8fafc

### Typography

- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Headings**: 800 font-weight for emphasis
- **Body Text**: 400-500 font-weight
- **Code**: 'Courier New', monospace

### Spacing Scale

- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx       # Landing section
│   │   ├── Education.tsx  # Education timeline
│   │   ├── CodeExamples.tsx # Code showcase
│   │   ├── FunFacts.tsx   # Personal interests
│   │   └── ContactMe.tsx  # Contact information
│   ├── App.tsx            # Main application component
│   ├── App.css            # Global styles
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc.json       # Prettier configuration
└── .prettierignore        # Prettier ignore patterns
```

## 🔧 Development Workflow

### Setup

1. Clone repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start development server
4. Run `npm run build` for production build

### Code Quality Checks

- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Accessibility Testing

- Manual testing with keyboard navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Browser developer tools accessibility audit
- axe-core automated testing

## 🚀 Deployment

### Build Process

1. Run `npm run build` to create production build
2. Output goes to `dist/` directory
3. Static hosting ready (Netlify, Vercel, GitHub Pages)

### Performance Targets

- Lighthouse score: 90+ for all categories
- Bundle size: < 200KB gzipped
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## 📝 Content Guidelines

### Hero Section

- Professional title and brief description
- Clear call-to-action buttons
- Engaging but not overwhelming animations

### Education Section

- Chronological order (most recent first)
- Include institution, degree, field, and dates
- Brief description of relevant coursework/experience

### Code Examples

- Real-world, practical examples
- Well-commented and formatted code
- Multiple languages/frameworks represented
- Tabbed interface for organization

### Contact Information

- Professional email and social links
- External links open in new tabs
- Proper security attributes (rel="noopener noreferrer")

## 🔄 Maintenance

### Regular Updates

- Monthly dependency updates
- Quarterly accessibility audits
- Annual design refresh
- Continuous performance monitoring

### Documentation Updates

### Documentation Updates

- Update IMPLEMENTATION_GUIDE.md with each new development phase
- Document all technology changes in PROJECT_RULES.md
- Log all changes in CHANGELOG.md following semantic versioning
- Keep README.md current with new features and setup instructions

## 📞 Support

For questions about these guidelines:

1. Check existing documentation first
2. Review CHANGELOG.md for recent changes
3. Create an issue for clarifications needed
4. Propose updates via pull request

---

_Last updated: April 17, 2026_
_Maintained by: Portfolio Website Team_
