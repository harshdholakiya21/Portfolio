# Deployment Guide for Portfolio

## Steps to Deploy
1. **Push to GitHub**: Ensure your local repository is connected to GitHub. Use the following commands:
   ```bash
   git add .
   git commit -m "Update Home and Contact components for responsiveness"
   git push origin main
   ```

2. **Deploy to Vercel**: Make sure you have the Vercel CLI installed. Run:
   ```bash
   vercel --prod
   ```

3. **Deploy Backend to Railway**: Ensure you have the Railway CLI installed. Run:
   ```bash
   railway up
   ```

## Notes
- Ensure that your project is a Git repository before pushing.
- Install Vercel and Railway CLI if not already installed.