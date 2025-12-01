#!/bin/bash

# Script to push to GitHub
# Replace YOUR_USERNAME with your actual GitHub username

echo "🚀 Pushing Incredible India website to GitHub..."
echo ""
echo "Please enter your GitHub username:"
read GITHUB_USERNAME

echo ""
echo "Adding remote repository..."
git remote add origin https://github.com/$GITHUB_USERNAME/incredible-india-tourism.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USERNAME/incredible-india-tourism.git

echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now on GitHub."
echo "Next step: Deploy to Netlify (see DEPLOYMENT.md)"


