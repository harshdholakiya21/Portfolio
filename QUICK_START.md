# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites ✅

- Node.js 16+ ([Download](https://nodejs.org/))
- MongoDB ([Local](https://www.mongodb.com/try/download/community) or [Atlas Cloud](https://www.mongodb.com/cloud/atlas))
- Git

## Setup 🚀

### 1. Clone and Install (1 min)

```bash
git clone https://github.com/yourusername/professional-portfolio.git
cd professional-portfolio
npm install
```

### 2. Configure Environment (1 min)

```bash
cp .env.example .env
# Edit .env with your settings
```

### 3. Start Development (1 min)

```bash
npm run dev:all
```

## Access Your Portfolio 🌐

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Contact Form Endpoint**: POST http://localhost:5000/api/contacts

## Customize 🎨

### Update Your Name
`src/components/Home.jsx` - Line 15
```jsx
<h1>Your Name</h1>
```

### Update Skills
`src/components/Skills.jsx` - Update the data array

### Update About Section
`src/components/AboutMe.jsx` - Edit bio and education

### Update Contact Email
`src/components/Contact.jsx` - Line 45
```jsx
<a href="mailto:your.email@example.com">
```

## Build & Deploy 📦

### Build for Production
```bash
npm run build
```

### Deploy Frontend
- Push to GitHub
- Connect to Vercel/Netlify
- Auto-deploy on push

### Deploy Backend
- Connect to Railway/Heroku
- Set environment variables
- Deploy

## Troubleshooting 🔧

**Port already in use?**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**MongoDB connection error?**
- Check MongoDB is running
- Verify connection string in `.env`

**Blank contact form?**
- Ensure backend is running
- Check browser console for errors

## Next Steps 📋

1. [ ] Update personal information
2. [ ] Add your photo to `public/image/`
3. [ ] Update skills and experience
4. [ ] Test contact form
5. [ ] Push to GitHub
6. [ ] Deploy to Vercel/Netlify
7. [ ] Setup custom domain
8. [ ] Share your portfolio!

## Support 💬

- Read [README.md](./README.md) for detailed documentation
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guides
- Open an issue on GitHub

---

**Happy coding! 🎉**
