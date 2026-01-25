# Deployment Guide

## Frontend Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_API_BASE_URL=https://your-api.com`

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add build variables in Site Settings

## Backend Deployment

### Railway.app (Recommended)

1. Create Railway account
2. Create new project
3. Add MongoDB plugin
4. Connect GitHub repo
5. Set environment variables

### Heroku

```bash
heroku login
heroku create your-app-name
heroku addons:create mongolab:sandbox
git push heroku main
```

### AWS Lambda

See AWS Lambda deployment configuration.

## Environment Variables

Set these in your deployment platform:

```
NODE_ENV=production
MONGO_URI=your_mongodb_uri
MONGO_DB=portfolio_db
VITE_API_BASE_URL=https://your-backend.com
VITE_APP_URL=https://your-portfolio.com
```
