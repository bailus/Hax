python3 versionBump.py
git config --global user.email "sam@bailey.geek.nz"
git config --global user.name "Bitbucket Pipelines"
git remote set-url https://$USERNAME:$PASSWORD@bitbucket.org/bailus/kodi-addons.git
git commit -am "Version bump (using bitbucket pipelines)" && git push HEAD:master HEAD:master
