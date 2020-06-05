(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},a={app:0},o=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var h=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("02fd")},"1e82":function(t,e,i){"use strict";var s=i("fb61"),a=i.n(s);a.a},bcd5:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",[i("div",{staticClass:"pizza"},[i("a",{attrs:{href:"https://www.paypal.me/AndyGrabow/3",target:"_blank"}},[i("img",{attrs:{src:"pizza.png"}}),i("div",[i("span",[t._v("If you like it")]),i("br"),i("span",[t._v("buy me a pizza :)")])])])]),i("div",{staticClass:"container is-hidden-tablet"},[i("div",{staticClass:"section"},[i("h1",{staticClass:"title"},[t._v("dotfiles")]),i("p",[t._v("This is a not meant for mobile .. please come back with a higher resolution. :)")]),i("br"),i("p",[t._v("Well, the shell recording won't fit on your screen, so you should at least enable desktop mode. But even then phones are kinda small. :/")])])]),i("div",{staticClass:"container is-hidden-mobile"},[i("div",{staticClass:"section"},[i("h1",{staticClass:"title"},[t._v("dotfiles"),i("a",{attrs:{href:"https://github.com/kakulukia/dotfiles",title:"Go to the GitHub-Repo"}},[i("img",{staticClass:"github",attrs:{src:"github.png"}})])])]),i("div",{staticClass:"section"},[i("asciinema-player",{pre:!0,attrs:{id:"player",src:"demo.cast",poster:"npt:0:01",speed:"1.5","idle-time-limit":"1"}}),i("h2",{staticClass:"subtitle"},[t._v("Intro")]),i("p",[t._v("For the last 5 years I have been building up my shell environment and its the first thing that gets installed on a new server or Mac. Especially fasd and the reverse history search is a huge time saver.")]),i("p",[t._v("Some of this stuff I didn't even know was possible before I switched to ZSH or found app X, so i just wanted to share the whole collection. ")]),i("h2",{staticClass:"subtitle"},[t._v("Installation")]),i("p",[t._v("Be sure you are logged in as the user for whom you want to install this shell package and that the user has sudo rights.")]),i("div",{staticClass:"install"},[i("img",{attrs:{src:"install_dotfiles.png"}}),i("p",[i("span",{staticClass:"command"},[t._v("curl")]),i("span",{staticClass:"text"},[t._v(' "https://raw.githubusercontent.com/kakulukia/dotfiles/master/misc/setup.sh"')]),i("span",[t._v(" |")]),i("span",{staticClass:"command"},[t._v(" sh")])])]),i("p",[t._v("This will install the following:")]),i("ul",[i("li",[t._v("GIT to be able to download the repo itself")]),i("li",[t._v("ZSH as your new default shell")]),i("li",[t._v("Python3")]),i("li",[t._v("oh my zsh")]),i("li",[t._v("ghar for managing the dotfiles itself (links everything into your home folder)")]),i("li",[t._v("SpaceVim")]),i("li",[t._v("fasd")]),i("li",[t._v("some handy aliases")])]),i("p",[i("strong",[t._v("Note:")]),t._v(" Use the "),i("span",{staticClass:"command"},[t._v("~/.gitconfig-personal")]),t._v(" file to set your git username. That file is imported in "),i("span",{staticClass:"command"},[t._v(".gitconfig")]),t._v(" so that settings can be ported via this repo, but the username stays personal. ")]),i("p",[t._v("In the misc folder you can find:")]),i("ul",[i("li",[t._v("the Powerline patched SourceCode font (you may use any "),i("a",{attrs:{href:"https://www.nerdfonts.com/"}},[t._v("Nerdfont")]),t._v(")")]),i("li",[t._v("my currently used Sundried.itermcolors")]),i("li",[t._v("better-osx-settings script")]),i("li",[t._v("an opinionated set of tools ("),i("a",{attrs:{href:"https://github.com/kakulukia/dotfiles/blob/master/misc/essentials.txt"}},[t._v("these")]),t._v(" and "),i("a",{attrs:{href:"https://github.com/kakulukia/dotfiles/blob/master/misc/additional-stuff.sh"}},[t._v("those")]),t._v(") ")])]),i("p",[t._v("The dotfiles repo can be updated with the "),i("span",{staticClass:"command"},[t._v("update-dotfiles")]),t._v(" alias.")]),i("h2",{staticClass:"subtitle"},[t._v("Features")]),i("p",[t._v("Apart from what's shown in the recording, here is some more of what's included:")]),i("ul",[i("li",[t._v("suggestions (grey text) - use the right arrow key to accept")]),i("li",[t._v("history reverse search - use the up arrow to cycle through previous commands. Anything you typed before hitting up will be used as filter and highlighted. This seriously saves a lot of typing. 😇"),i("br"),i("br"),i("figure",[i("img",{attrs:{src:"history.png"}}),i("figcaption",[t._v("migr + up")])])]),i("li",[t._v("red / green colored commands - shows that the command is (un)available")]),i("li",[t._v(". is in the path so no need for any ./ prefixing executables")]),i("li",[t._v("path"),i("ul",[i("li",[t._v("print a sorted version of $PATH")]),i("li",[t._v("add the given folder to $PATH and")]),i("li",[t._v("append the given path to your .profile when called with "),i("span",{staticClass:"command"},[t._v("path --save DIR")])])])]),i("li",[t._v("mv - no need to type the file name twice for renaming")]),i("li",[t._v("top - is aliased to glances if installed")]),i("li",[t._v("ctop - for docker containers")]),i("li",[t._v(",, - jump to the git root dir")]),i("li",[t._v("o - will open the finder in the current directory")]),i("li",[t._v("cd to.app - the is an app in the bin folder that provides a way to reverse the trick an open a terminal at the current finder location. Use the command key to just drag it into the finders toolbar."),i("br"),i("br"),i("figure",[i("img",{attrs:{src:"cdto.png"}}),i("figcaption",[t._v("The result will look like this")])])]),i("li",[t._v("tm - there's a tmux theme and tm will reconnect to to your last session or create a new one"),i("br"),t._v("I also changed the default prefix to CTRL+SPACE for easier usage.")]),i("li",[t._v("diff - aliased to diff-so-fancy in general, not just the git version")]),i("li",[t._v("co - use fasd to launch any known file in VS Code")]),i("li",[t._v("errorcode - in general I don't see the point in displaying the error code, hence the sad smiley in the prompt, but if you really wanna know, use that alias (unless you can remember the #?)")]),i("li",[t._v("ips - will show all local ips (IPV4) / ip will show some info about your external one")]),i("li",[t._v("ping - is aliased to prettyping if installed")]),i("li",[t._v("go-reload - hot reload for go apps you are working on")]),i("li",[t._v("mgs - multi git status - if your company/current project totally embraces micro services (🙈) this might come in handy to update em all in one go")]),i("li",[t._v('rg - alias for "rg -S --max-columns 444" won\'t clutter the screen with nasty one line files')])]),i("h2",{staticClass:"subtitle"},[t._v("ToDo")]),i("ul",[i("li",[t._v("colorls is a lil slow - there is a promising alternative, but"),i("a",{attrs:{hreaf:"https://github.com/Peltoche/lsd/issues/92"}},[t._v(" it's not looking sexy yet")])]),i("li",[t._v("Maybe some day in the future I'm switching yet again to prezto and will redo my default theme. But as of yet this still sounds like too much trouble. :/")])])],1)])])}],o={mounted:function(){var t=document.createElement("script");t.setAttribute("src","asciinema-player.js"),document.head.appendChild(t)}},n=o,r=(i("1e82"),i("bf43")),l=Object(r["a"])(n,s,a,!1,null,null,null);e["a"]=l.exports},fb61:function(t,e,i){}});
//# sourceMappingURL=app.7eee313f.js.map