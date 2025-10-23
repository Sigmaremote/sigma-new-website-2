#!/bin/bash

# Remove git lock file
rm -f .git/index.lock

# Add all changes
git add .

# Commit changes
git commit -m "Add hire international contractors blog with CTAs and TOC improvements"

# Push to GitHub
git push origin main

# Deploy to Vercel
export VERCEL_TOKEN=E1MjDsoNR9vMDZmrecVBoYa4
npx vercel --prod
