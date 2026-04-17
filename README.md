# Portfolio Website

A modern, accessible portfolio website built with React, TypeScript, and Vite, showcasing full-stack development skills with a focus on clean code, accessibility, and performance.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Fully Accessible**: WCAG 2.1 AA compliant
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Fast loading and smooth animations
- **Code Examples**: Interactive showcase of development skills
- **Contact Form**: Send messages directly through the website using EmailJS
- **Professional Design**: Clean, modern UI with smooth transitions

## 📋 Documentation

- **[Implementation Guide](IMPLEMENTATION_GUIDE.md)** - Complete step-by-step development process and setup instructions
- **[Project Rules & Guidelines](PROJECT_RULES.md)** - Project standards, coding guidelines, and development practices
- **[Changelog](CHANGELOG.md)** - Version history and change tracking

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-website

# Install dependencies
npm install
```

### Email Configuration

To enable the contact form, set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy `.env.example` to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## ♿ Accessibility

This project follows WCAG 2.1 AA accessibility guidelines:

- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences
- Proper semantic HTML structure

## 🏗️ Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── App.tsx            # Main application
│   ├── App.css            # Global styles
│   └── main.tsx           # Entry point
├── PROJECT_RULES.md       # Project guidelines
├── CHANGELOG.md          # Change history
└── README.md             # This file
```

## 📝 Development Guidelines

Before contributing, please review:

1. [PROJECT_RULES.md](PROJECT_RULES.md) for coding standards and guidelines
2. [CHANGELOG.md](CHANGELOG.md) for recent changes

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
