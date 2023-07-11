#!/bin/bash
./eslint.sh

read -p "Would you like to commit and push to build? (Y/n) " flag
: ${flag:=Y}
if [ $flag="Y" ] || [ $flag ="y"];
then
    #Build Branch
    npm run build
    git checkout build
    git checkout main -- start.sh docker/ build/ package.json
    git add --all
    read -p "Enter a build branch commit description: " $description
    : ${description:=-}
    git commit -m "$description"
    git push origin build
    clear
    echo "Pushed to build branch!"
fi
 
read -p "Would you like to commit and push to build? (Y/n) " flag
: ${flag:=Y}
if [ $flag=="Y" || $flag =="y"]
then
    # Main Branch
    git checkout main
    git add --all
    echo "Commiting to master branch"
    read -p "Enter a main branch commit description: " description
    : ${description:=-}
    git commit -m "$description"
    git push origin main
fi