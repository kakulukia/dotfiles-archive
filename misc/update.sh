#!/usr/bin/env zsh
lastCD=`pwd`

cd
cd ghar/dotfiles
git fetch

git_status="$(git status -b --porcelain 2> /dev/null)"
behind_re='.+behind ([0-9]+).+'

if [[ "${git_status}" =~ ${behind_re} ]] ; then
    echo "\nupdating dotfiles .."
else
    echo "You are up to date."
    echo ""
    exit
fi

git pull
if [ "$?" -gt 0 ]; then
    exit 1
fi
git submodule update --init --recursive --remote

echo "\n\nrefreshing dotfiles links .."
python3 ../bin/ghar install

cd
ghar/dotfiles/misc/install-additional-stuff.sh
