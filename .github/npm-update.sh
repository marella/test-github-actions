#!/usr/bin/env bash

set -euo pipefail

npm version patch --no-git-tag-version

git push
git push --tags
