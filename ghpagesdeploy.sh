echo "pulling master branch from origin" &&
git checkout master &&
git pull origin master &&
echo "project buidling started" &&
ng build --output-path docs --base-href "https://svoboda-vlad.github.io/images-grouping-for-upload/" &&
cp docs/index.html docs/404.html &&
echo "project building finished" &&
echo "git commiting started" &&
git add . &&
git commit -m "GitHub pages deployment" &&
git push origin master &&
echo "git commiting finished" &&
echo "deployment finished"
