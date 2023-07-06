#!/bin/bash
git add --all
echo -n "Enter a commit description: " 
read description
git commit -m "$description"
git push