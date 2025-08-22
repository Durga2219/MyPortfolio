# GitHub Pages Deployment Guide

This guide will help you deploy your React portfolio to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Repository**: Your project should be in a GitHub repository
3. **Repository Name**: Your repository should be named `My-Portfolio` (or update the homepage URL in package.json)

## Step 1: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `My-Portfolio`
3. Make it public (required for GitHub Pages)
4. Don't initialize with README, .gitignore, or license

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/durga2219/My-Portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

## Step 5: Deploy

### Option A: Manual Deployment
```bash
npm run deploy
```

### Option B: Automated Deployment (Recommended)
The GitHub Actions workflow will automatically deploy when you push to the main branch.

## Step 6: Access Your Site

Your portfolio will be available at: `https://durga2219.github.io/My-Portfolio`

## Troubleshooting

### If the site doesn't load:
1. Check if the gh-pages branch was created
2. Verify GitHub Pages is enabled in repository settings
3. Wait a few minutes for the first deployment

### If you get a 404 error:
1. Make sure the repository name matches the homepage URL in package.json
2. Check if the build folder contains the correct files
3. Verify the gh-pages branch has the built files

### If you need to update the homepage URL:
Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS settings
3. Update the homepage URL in package.json

## Environment Variables

For the backend API, you'll need to:
1. Deploy the backend separately (Heroku, Vercel, etc.)
2. Update the API URLs in your frontend code
3. Set up CORS on your backend to allow requests from your GitHub Pages domain
