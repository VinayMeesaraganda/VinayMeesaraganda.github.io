# 🚀 Vinay Meesaraganda - Data Engineer Portfolio

A modern, responsive portfolio website showcasing my data engineering projects, skills, and professional experience.

**Live Demo**: [https://vinaymeesaraganda.github.io/](https://vinaymeesaraganda.github.io/)

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Built with Tailwind CSS featuring a sleek blue & gold theme
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Project Showcase**: Filterable project gallery with categories (Data Engineering, Data Analysis, Visualization)
- **Interactive Sections**: 
  - Hero section with animated tech stack icons
  - About section with skills and education
  - Experience timeline
  - Certifications display
  - Contact form

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets
│   ├── certifications/  # Certification logos
│   └── projects/        # Project images
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   ├── data/           # Project and certification data
│   │   ├── certifications.js
│   │   └── projects.js
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VinayMeesaraganda/VinayMeesaraganda.github.io.git
cd VinayMeesaraganda.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command builds the project and deploys it to the `gh-pages` branch, which is served by GitHub Pages.

## 🎨 Customization

### Colors

The color theme is defined in `tailwind.config.js`. The current theme uses:
- **Primary**: Dark blue shades
- **Secondary**: Gold/amber accents
- **Text**: Light gray for readability on dark backgrounds

### Projects

Add or modify projects in `src/data/projects.js`. Each project should include:
- `title`: Project name
- `description`: Brief description
- `category`: Data Engineering, Data Analysis, or Visualization
- `tags`: Array of technologies used
- `image`: Path to project image
- `link`: GitHub or live demo link
- `featured`: Boolean to mark as featured

### Certifications

Update certifications in `src/data/certifications.js`.

## 📧 Contact

- **Email**: vinaymeesaraganda@gmail.com
- **LinkedIn**: [linkedin.com/in/vinaymeesaraganda](https://linkedin.com/in/vinaymeesaraganda)
- **GitHub**: [github.com/VinayMeesaraganda](https://github.com/VinayMeesaraganda)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Vinay Meesaraganda
