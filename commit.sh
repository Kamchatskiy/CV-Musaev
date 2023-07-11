#!/bin/bash
./eslint.sh

#Build Branch
npm run build
 

# Main Branch
git checkout main
git add --all
echo "Pushing to master branch"
echo -n "Enter a commit description: " 
read description
git commit -m "$description"
git push origin main