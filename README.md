# Professional Portfolio

A modern, responsive, and professional portfolio website built with **React**, **Tailwind CSS**, and **Vite**. Features a clean dark theme, smooth animations, and a backend for contact form submissions.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful dark theme with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for instant development
- 🎯 **SEO Friendly** - Meta tags and semantic HTML
- 📧 **Contact Form** - Backend integration with MongoDB
- 🛠️ **Tech Stack** - React, Tailwind CSS, Vite, Express, MongoDB
- 🔒 **Environment Variables** - Secure configuration management
- 📦 **Production Ready** - Optimized build and deployment configs
- ♿ **Accessible** - WCAG compliant components
- 🌙 **Dark Theme** - Easy on the eyes, modern aesthetic

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v16.0.0 or higher ([Download](https://nodejs.org/))
- **npm** v8.0.0 or higher
- **MongoDB** v4.4 or higher (local or cloud instance)
- **Git** for version control

To check your versions:

```bash
node --version
npm --version
```

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/professional-portfolio.git
cd professional-portfolio
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the example environment file and update it with your values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
VITE_API_BASE_URL=http://localhost:5000
PORT=5000
MONGO_URI=mongodb://localhost:27017
MONGO_DB=portfolio_db
VITE_APP_URL=http://localhost:5173
NODE_ENV=development
```

## ⚙️ Configuration

### MongoDB Setup

#### Local MongoDB (Option 1)

```bash
# On Windows with MongoDB installed
mongod

# On Mac with Homebrew
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

#### MongoDB Atlas (Cloud) (Option 2)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update `.env`:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
```

## 💻 Development

### Start Development Server

```bash
# Start both frontend (Vite) and backend (Express) concurrently
npm run dev:all

# Or start them separately:
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

The frontend will be available at: **http://localhost:5173**
The backend API will be available at: **http://localhost:5000**

### Development URLs

- **Home Page**: http://localhost:5173/
- **About Page**: http://localhost:5173/AboutMe
- **Skills Page**: http://localhost:5173/Skills
- **Contact Page**: http://localhost:5173/Contact
- **API Health Check**: http://localhost:5000/api/health
- **Contact Form Endpoint**: POST http://localhost:5000/api/contacts

## 🔨 Building

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder:
- Minified CSS and JavaScript
- Code splitting
- Image optimization
- ~60KB total bundle size (gzipped)

### Preview Production Build

```bash
npm run preview
```

Then visit: http://localhost:4173

## 🌐 Deployment

### Deploy Frontend to Vercel (Recommended)

1. **Create Vercel Account**: https://vercel.com/
2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   vercel
   ```
4. **Set Environment Variables** in Vercel dashboard:
   - Add `VITE_API_BASE_URL` pointing to your backend

### Deploy Frontend to Netlify

1. **Build the project**: `npm run build`
2. **Push to GitHub**
3. **Connect Netlify to your repository**
4. **Build command**: `npm run build`
5. **Publish directory**: `dist`

### Deploy Backend to Heroku

1. **Create Heroku Account**: https://www.heroku.com/
2. **Install Heroku CLI**: https://devcenter.heroku.com/articles/heroku-cli
3. **Login**: `heroku login`
4. **Create app**: `heroku create your-app-name`
5. **Add MongoDB add-on**: `heroku addons:create mongolab:sandbox`
6. **Set environment variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PORT=5000
   ```
7. **Deploy**: `git push heroku main`

### Deploy Backend to Railway

1. **Create Railway Account**: https://railway.app/
2. **Connect GitHub repository**
3. **Add MongoDB service
4. **Set environment variables in dashboard**
5. **Deploy automatically on push**

### Deploy Backend to AWS Lambda + API Gateway

See [AWS Deployment Guide](./docs/AWS_DEPLOYMENT.md)

### Environment Variables for Production

Set these in your deployment platform:

```env
NODE_ENV=production
VITE_API_BASE_URL=https://your-backend-domain.com
VITE_APP_URL=https://your-portfolio-domain.com
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=portfolio_db
PORT=5000
```

## 📁 Project Structure

```
professional-portfolio/
├── public/                    # Static assets
│   └── image/                # Images and icons
├── src/
│   ├── components/           # React components
│   │   ├── Home.jsx         # Hero section
│   │   ├── AboutMe.jsx      # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Layout.jsx       # Layout wrapper
│   │   ├── Welcomepage.jsx  # Welcome page
│   │   └── SkillsSection.jsx# Skills component
│   ├── assets/              # Images and icons
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Tailwind imports
│   └── main.jsx             # Entry point
├── server/
│   └── index.js             # Express server
├── .env.example             # Environment template
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS config
├── index.html               # HTML template
└── README.md                # This file
```

## 🎨 Customization

### Update Personal Information

Edit `src/components/Home.jsx`:

```jsx
<h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
  Your Name
</h1>
```

Edit `src/components/AboutMe.jsx` with your bio and education.

### Add Your Photo

1. Add your photo to `public/image/`
2. Update the image path in components

### Update Skills

Edit `src/components/Skills.jsx`:

```jsx
const data = [
  {
    title: "Your Skill Category",
    items: [
      { label: "Skill Name", value: 85 }, // value = proficiency %
    ],
  },
]
```

### Update Contact Information

Edit `src/components/Contact.jsx`:

```jsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### Update Social Links

Update links in `src/components/Home.jsx` and `src/components/Contact.jsx`:

```jsx
<a href="https://github.com/yourusername" aria-label="GitHub">
  GitHub
</a>
```

### Customize Colors

Edit `tailwind.config.js` or use Tailwind's color utilities directly in components.

## 🔐 Environment Variables

### Development

Create `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000
PORT=5000
MONGO_URI=mongodb://localhost:27017
MONGO_DB=portfolio_db
VITE_APP_URL=http://localhost:5173
NODE_ENV=development
```

### Production

Update variables in your deployment platform's dashboard.

## 🐛 Troubleshooting

### Port 5000 or 5173 Already in Use

```bash
# Kill process on port 5000 (Backend)
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173 (Frontend)
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### MongoDB Connection Error

1. Ensure MongoDB is running
2. Check connection string in `.env`
3. Verify credentials for MongoDB Atlas
4. Check firewall settings

### Blank Contact Form Submission

1. Check that backend is running: `http://localhost:5000/api/health`
2. Verify `VITE_API_BASE_URL` in `.env`
3. Check browser console for errors
4. Verify MongoDB is connected

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🔗 Links

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

**Made with ❤️ for modern web developers**

**Happy coding! 🚀**
