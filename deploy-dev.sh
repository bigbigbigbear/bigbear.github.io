#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m 'update'
git pull origin dev

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push origin dev

cd -