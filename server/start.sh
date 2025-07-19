#!/bin/zsh

export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

nvm use 14

echo "PATH=$PATH"
which npm

exec npm start