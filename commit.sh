#!/bin/bash
./eslint.sh

echo -p "Would you like to commit and push to build? (Y/n) " flag
${flag:=Y}
if [ $flag=="Y" || $flag =="y"]
then
    #Build Branch
    npm run build
    git checkout build
    #git add --all build/ #ToDo
    echo -p "Enter a build branch commit description: " description
    read description
    git commit -m "$description"
    git push origin build
    clear
    echo "Pushed to build branch!"
fi
 

# Main Branch
git checkout main
git add --all
echo "Commiting to master branch"
echo -p "Enter a main branch commit description: " description

git commit -m "$description"
git push origin main