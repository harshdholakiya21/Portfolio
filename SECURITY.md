# Security Guidelines

## Overview
This document outlines security best practices for the Portfolio project. Never commit sensitive data to version control.

## Environment Variables

### Protected Variables
The following sensitive information should NEVER be committed to git:
- Database credentials (MONGO_URI, MONGO_DB)
- API keys and tokens
- Email credentials (SMTP_USER, SMTP_PASS)
- Private keys and certificates
- Authentication tokens
- Third-party service credentials

### Setup Instructions
1. **Local Development:**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env with your actual credentials
   # Never commit .env file
   ```

2. **Production/Deployment:**
   - Set environment variables directly in your deployment platform
   - For Vercel: Use the Environment Variables dashboard
   - For Railway: Use the Variables section in the dashboard

## Files Never to Commit
The following files are in `.gitignore` and will not be tracked:
- `.env` - Local environment variables
- `.env.local` - Local overrides
- `*.pem` - Private keys
- `*.key` - SSH keys
- `.aws/` - AWS credentials
- `.ssh/` - SSH keys directory

## Current Security Status ✅

### What's Protected:
- ✅ `.env` file is in .gitignore (not tracked)
- ✅ No sensitive data found in committed files
- ✅ No hardcoded credentials in source code
- ✅ `.env.example` serves as template (safe to commit)
- ✅ MongoDB URI uses environment variables

### What to Watch For:
- 🔍 Never paste API keys in console.log statements
- 🔍 Don't hardcode credentials in source files
- 🔍 Don't commit personal information
- 🔍 Keep .env file locally only
- 🔍 Use .env.example for documentation

## Sensitive Data Checklist

Before committing code, ensure:
- [ ] No API keys in code
- [ ] No database passwords in code
- [ ] No email credentials in code
- [ ] No authentication tokens in code
- [ ] No personal identifiable information (PII)
- [ ] No credit card information
- [ ] No private SSH keys
- [ ] No database connection strings with passwords

## Git Best Practices

### Pre-commit Check:
```bash
# Always review changes before commit
git status
git diff

# Check for .env or sensitive files
git status | grep -E "\.env|\.key|\.pem|password|secret|token"
```

### If Sensitive Data is Accidentally Committed:

1. **Remove from current commit (before push):**
   ```bash
   # Remove file from staging
   git reset HEAD <file>
   
   # Remove from last commit
   git rm --cached <file>
   git commit --amend
   ```

2. **Remove from history (after push):**
   ```bash
   # Use git filter-branch or BFG Repo-Cleaner
   git filter-branch --tree-filter 'rm -f <file>' HEAD
   git push origin --force
   ```

3. **Notify:**
   - Rotate all compromised credentials immediately
   - Update all affected services

## Deployment Platform Setup

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables:
   - `VITE_API_BASE_URL=https://your-backend.railway.app`
   - `VITE_APP_URL=https://your-portfolio.vercel.app`

### Railway
1. Go to Variables section in project
2. Add variables:
   - `PORT=5000`
   - `MONGO_URI=mongodb+srv://user:pass@cluster...`
   - `MONGO_DB=portfolio_db`
   - `NODE_ENV=production`

## Monitoring

- Monitor GitHub repository for any accidentally committed secrets
- Use GitHub's Secret Scanning feature (enabled by default on public repos)
- Review git logs periodically for suspicious commits
- Set up branch protection rules

## Additional Resources

- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [OWASP - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/nodejs-security/)

---

**Last Updated:** January 25, 2026
**Status:** ✅ All clear - No sensitive data found in public repository
