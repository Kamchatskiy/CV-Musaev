./eslint.sh
git checkout main
git add --all
echo "Commiting to master branch"
read -p "Enter a main branch commit description: " description
: ${description:=-}
git commit -m "$description"
git push origin main