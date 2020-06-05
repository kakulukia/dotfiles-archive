(function(e){function t(t){for(var s,n,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=i[0]))}return e}var s={},a={app:0},o=[];function n(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var h=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("02fd")},"1e82":function(e,t,i){"use strict";var s=i("fb61"),a=i.n(s);a.a},bcd5:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("body",[i("div",{staticClass:"pizza"},[i("a",{attrs:{href:"https://www.paypal.me/AndyGrabow/3",target:"_blank"}},[i("img",{attrs:{src:"pizza.png"}}),i("div",[i("span",[e._v("If you like it")]),i("br"),i("span",[e._v("buy me a pizza :)")])])])]),i("div",{staticClass:"container is-hidden-tablet"},[i("div",{staticClass:"section"},[i("h1",{staticClass:"title"},[e._v("dotfiles")]),i("p",[e._v("This is a not meant for mobile .. please come back with a higher resolution. :)")]),i("br"),i("p",[e._v("Well, the shell recording won't fit on your screen, so you should at least enable desktop mode. But even then phones are kinda small. :/")])])]),i("div",{staticClass:"container is-hidden-mobile"},[i("div",{staticClass:"section"},[i("h1",{staticClass:"title"},[e._v("dotfiles")])]),i("div",{staticClass:"section"},[i("asciinema-player",{pre:!0,attrs:{id:"player",src:"demo.cast",poster:"npt:0:01",speed:"1.5","idle-time-limit":"1"}}),i("h2",{staticClass:"subtitle"},[e._v("Intro")]),i("p",[e._v("For the last 5 years I have been building up my shell environment and its the first thing that gets installed on a new server or Mac. Especially fasd and the reverse history search is a huge time saver.")]),i("p",[e._v("Some of this stuff I didn't even know was possible before I switched to ZSH or found app X, so i just wanted to share the whole collection. ")]),i("h2",{staticClass:"subtitle"},[e._v("Installation")]),i("p",[e._v("Be sure you are logged in as the user for whom you want to install this shell package and that the user has sudo rights.")]),i("div",{staticClass:"install"},[i("img",{attrs:{src:"install_dotfiles.png"}}),i("p",[i("span",{staticClass:"command"},[e._v("curl")]),i("span",{staticClass:"text"},[e._v(' "https://raw.githubusercontent.com/kakulukia/dotfiles/master/misc/setup.sh"')]),i("span",[e._v(" |")]),i("span",{staticClass:"command"},[e._v(" sh")])])]),i("p",[e._v("This will install the following:")]),i("ul",[i("li",[e._v("GIT to be able to download the repo itself")]),i("li",[e._v("ZSH as your new default shell")]),i("li",[e._v("Python3")]),i("li",[e._v("oh my zsh")]),i("li",[e._v("ghar for managing the dotfiles itself (links everything into your home folder)")]),i("li",[e._v("SpaceVim")]),i("li",[e._v("fasd")]),i("li",[e._v("some handy aliases")])]),i("p",[i("strong",[e._v("Note:")]),e._v(" Use the "),i("span",{staticClass:"command"},[e._v("~/.gitconfig-personal")]),e._v(" file to set your git username. That file is imported in "),i("span",{staticClass:"command"},[e._v(".gitconfig")]),e._v(" so that settings can be ported via this repo, but the username stays personal. ")]),i("p",[e._v("In the misc folder you can find:")]),i("ul",[i("li",[e._v("the Powerline patched SourceCode font (you may use any "),i("a",{attrs:{href:"https://www.nerdfonts.com/"}},[e._v("Nerdfont")]),e._v(")")]),i("li",[e._v("my currently used Sundried.itermcolors")]),i("li",[e._v("better-osx-settings script")]),i("li",[e._v("an opinionated set of tools ("),i("a",{attrs:{href:"https://github.com/kakulukia/dotfiles/blob/master/misc/essentials.txt"}},[e._v("these")]),e._v(" and "),i("a",{attrs:{href:"https://github.com/kakulukia/dotfiles/blob/master/misc/additional-stuff.sh"}},[e._v("those")]),e._v(") ")])]),i("p",[e._v("The dotfiles repo can be updated with the "),i("span",{staticClass:"command"},[e._v("update-dotfiles")]),e._v(" alias.")]),i("h2",{staticClass:"subtitle"},[e._v("Features")]),i("p",[e._v("Apart from what's shown in the recording, here is some more of what's included:")]),i("ul",[i("li",[e._v("suggestions (grey text) - use the right arrow key to accept")]),i("li",[e._v("history reverse search - use the up arrow to cycle through previous commands. Anything you typed before hitting up will be used as filter and highlighted. This seriously saves a lot of typing. 😇"),i("br"),i("br"),i("figure",[i("img",{attrs:{src:"history.png"}}),i("figcaption",[e._v("migr + up")])])]),i("li",[e._v("red / green colored commands - shows that the command is (un)available")]),i("li",[e._v(". is in the path so no need for any ./ prefixing executables")]),i("li",[e._v("path"),i("ul",[i("li",[e._v("print a sorted version of $PATH")]),i("li",[e._v("add the given folder to $PATH and")]),i("li",[e._v("append the given path to your .profile when called with "),i("span",{staticClass:"command"},[e._v("path --save DIR")])])])]),i("li",[e._v("mv - no need to type the file name twice for renaming")]),i("li",[e._v("top - is aliased to glances if installed")]),i("li",[e._v("ctop - for docker containers")]),i("li",[e._v(",, - jump to the git root dir")]),i("li",[e._v("o - will open the finder in the current directory")]),i("li",[e._v("cd to.app - the is an app in the bin folder that provides a way to reverse the trick an open a terminal at the current finder location. Use the command key to just drag it into the finders toolbar."),i("br"),i("br"),i("figure",[i("img",{attrs:{src:"cdto.png"}}),i("figcaption",[e._v("The result will look like this")])])]),i("li",[e._v("tm - there's a tmux theme and tm will reconnect to to your last session or create a new one"),i("br"),e._v("I also changed the default prefix to CTRL+SPACE for easier usage.")]),i("li",[e._v("diff - aliased to diff-so-fancy in general, not just the git version")]),i("li",[e._v("co - use fasd to launch any known file in VS Code")]),i("li",[e._v("errorcode - in general I don't see the point in displaying the error code, hence the sad smiley in the prompt, but if you really wanna know, use that alias (unless you can remember the #?)")]),i("li",[e._v("ips - will show all local ips (IPV4) / ip will show some info about your external one")]),i("li",[e._v("ping - is aliased to prettyping if installed")]),i("li",[e._v("go-reload - hot reload for go apps you are working on")]),i("li",[e._v("mgs - multi git status - if your company/current project totally embraces micro services (🙈) this might come in handy to update em all in one go")]),i("li",[e._v('rg - alias for "rg -S --max-columns 444" won\'t clutter the screen with nasty one line files')])]),i("h2",{staticClass:"subtitle"},[e._v("ToDo")]),i("ul",[i("li",[e._v("colorls is a lil slow - there is a promising alternative, but"),i("a",{attrs:{hreaf:"https://github.com/Peltoche/lsd/issues/92"}},[e._v(" it's not looking sexy yet")])]),i("li",[e._v("Maybe some day in the future I'm switching yet again to prezto and will redo my default theme. But as of yet this still sounds like too much trouble. :/")])])],1)])])}],o={mounted:function(){var e=document.createElement("script");e.setAttribute("src","asciinema-player.js"),document.head.appendChild(e)}},n=o,r=(i("1e82"),i("bf43")),l=Object(r["a"])(n,s,a,!1,null,null,null);t["a"]=l.exports},fb61:function(e,t,i){}});
//# sourceMappingURL=app.6b13da16.js.map