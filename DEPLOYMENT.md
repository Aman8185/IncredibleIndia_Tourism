# Deployment Guide

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `incredible-india-tourism` (or any name you prefer)
4. Description: "World-class tourism website for India"
5. Set to **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### 1.2 Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/amankumar/Desktop/Ashu_Website/Tourism

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/incredible-india-tourism.git

# Push to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (or personal access token).

---

## Step 2: Deploy to Netlify

### 2.1 Connect GitHub to Netlify

1. Go to [Netlify.com](https://www.netlify.com) and sign in (or create an account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository: `incredible-india-tourism`

### 2.2 Configure Build Settings

Netlify will auto-detect settings, but verify:

- **Build command:** Leave empty (no build needed for static site)
- **Publish directory:** `/` (root directory)
- **Branch to deploy:** `main`

### 2.3 Deploy

1. Click **"Deploy site"**
2. Wait 1-2 minutes for deployment
3. Your site will be live at: `https://random-name-123.netlify.app`

### 2.4 Customize Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name (if you have one)
4. Follow DNS configuration instructions

---

## Quick Commands Reference

```bash
# Navigate to project
cd /Users/amankumar/Desktop/Ashu_Website/Tourism

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

---

## Troubleshooting

### If GitHub push fails:
- Make sure you're authenticated: `gh auth login` (if using GitHub CLI)
- Or use a Personal Access Token instead of password

### If Netlify deployment fails:
- Check that all files are in the repository
- Verify the publish directory is set to `/`
- Check Netlify build logs for errors

---

**Your website will be live on Netlify in minutes! 🚀**


