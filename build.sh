git config --global user.email "sam@bailey.geek.nz"
git config --global user.name "Bitbucket Pipelines"

npm install
./node_modules/.bin/jspm install
npm run build

git clone -b staging https://$USERNAME:$PASSWORD@bitbucket.org/bailus/hax-for-kodi.git
cd hax-for-kodi
git remote set-url origin https://$USERNAME:$PASSWORD@bitbucket.org/bailus/kodi-addons.git
git fetch origin
git checkout -b staging 
git pull

mv ../build/* ./

git add .
git commit -m "Build using Bitbucket Pipelines"
git push --set-upstream origin staging
