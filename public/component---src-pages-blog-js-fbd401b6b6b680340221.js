webpackJsonp([0xc19374f83753],{57:function(e,M,N){var t,n;!function(){"use strict";function N(){for(var e=[],M=0;M<arguments.length;M++){var t=arguments[M];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)&&t.length){var u=N.apply(null,t);u&&e.push(u)}else if("object"===n)for(var D in t)a.call(t,D)&&t[D]&&e.push(D)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(N.default=N,e.exports=N):(t=[],n=function(){return N}.apply(M,t),!(void 0!==n&&(e.exports=n)))}()},98:function(e,M,N){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}M.__esModule=!0;var n=N(1),a=t(n),u=function(){return a.default.createElement("div",{className:"author"},a.default.createElement("img",{style:{width:"90px",height:"90px"},src:"/static/propic.png"}),a.default.createElement("div",{className:"intro"},a.default.createElement("div",{className:"arrowbox"},a.default.createElement("p",{className:"smallbody grey"},"Greetings ✌️ "),a.default.createElement("p",{className:"smallbody"}," My name is Samuel. I'm a UI/UX designer. I share my passion towards design and technology regularly on this blog. Feel free to share your thoughts with me."),a.default.createElement("small",null,a.default.createElement("a",{href:"https://twitter.com/desktopofsamuel",target:"_blank"},"Twitter")," | ",a.default.createElement("a",{href:"https://medium.com/@desktopofsamuel",target:"_blank"}," Medium")))))};M.default=u,e.exports=M.default},22:function(e,M){},55:function(e,M,N){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,M){if(!(e instanceof M))throw new TypeError("Cannot call a class as a function")}function a(e,M){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!M||"object"!=typeof M&&"function"!=typeof M?e:M}function u(e,M){if("function"!=typeof M&&null!==M)throw new TypeError("Super expression must either be null or a function, not "+typeof M);e.prototype=Object.create(M&&M.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(e,M):e.__proto__=M)}function D(e,M){return e.raw=M,e}M.__esModule=!0;var i=D(["\ndisplay: none;\n\n@media (max-width: 700px) {\n    position: relative;\n    display: block;\n    top: 0px;\n    width: 100%;\n    z-index: 689;\n    \n    a:hover {\n      padding-bottom: 0;\n    }\n}\n"],["\ndisplay: none;\n\n@media (max-width: 700px) {\n    position: relative;\n    display: block;\n    top: 0px;\n    width: 100%;\n    z-index: 689;\n    \n    a:hover {\n      padding-bottom: 0;\n    }\n}\n"]),g=D(["\nposition: relative; \nwidth: 100%;\nheight: 40px;\nbackground-color: #ffffff;\ndisplay: flex;\nflex-direction: horizontal;\njustify-content: space-between;\nalign-items: center;\n"],["\nposition: relative; \nwidth: 100%;\nheight: 40px;\nbackground-color: #ffffff;\ndisplay: flex;\nflex-direction: horizontal;\njustify-content: space-between;\nalign-items: center;\n"]),j=D(["\n"],["\n"]),l=D(["\n    cursor: pointer;\n"],["\n    cursor: pointer;\n"]),I=D(["\n    width: 100%;\n    display: none;\n    grid-template-columns: 1fr 1fr;\n    transition: 500ms ease-in-out;\n    visibility: hidden;\n    grid-gap: 0.5px;\n"],["\n    width: 100%;\n    display: none;\n    grid-template-columns: 1fr 1fr;\n    transition: 500ms ease-in-out;\n    visibility: hidden;\n    grid-gap: 0.5px;\n"]),z=D(["\n    background-color: #F7F7F7;\n    border: none;\n    padding: 20px;\n    cursor: pointer;\n    width: 100%;\n"],["\n    background-color: #F7F7F7;\n    border: none;\n    padding: 20px;\n    cursor: pointer;\n    width: 100%;\n"]),r=D(["\n  width: 50px;\n  margin-bottom: 0;\n"],["\n  width: 50px;\n  margin-bottom: 0;\n"]),o=D(["\n  \n/* This is where the onClick Trigger would perform */\n  &.active #Mobile {\n    display: grid;\n    visibility: visible;\n    animation-name: dropin;\n    animation-duration: 500ms;\n    transition: 500ms ease-in-out;\n    box-shadow: 0px 10px 42px -26px rgba(0,0,0,0.55);\n\n   @keyframes dropin {\n      from { transform: translate(0, -10px)};\n      to { transform: translate(0, 0px)};\n    }\n  }\n"],["\n  \n/* This is where the onClick Trigger would perform */\n  &.active #Mobile {\n    display: grid;\n    visibility: visible;\n    animation-name: dropin;\n    animation-duration: 500ms;\n    transition: 500ms ease-in-out;\n    box-shadow: 0px 10px 42px -26px rgba(0,0,0,0.55);\n\n   @keyframes dropin {\n      from { transform: translate(0, -10px)};\n      to { transform: translate(0, 0px)};\n    }\n  }\n"]),c=N(1),A=t(c),d=N(7),T=t(d),y=N(57),s=t(y),L=N(10),Q=t(L),f=N(8),E=t(f),m=N(28),x=t(m),O=N(27),U=t(O),w=N(71),p=t(w),C=N(38),k=t(C);N(22);var Y=Q.default.section(i),S=Q.default.div(g),h=Q.default.h6(j),b=Q.default.div(l),v=Q.default.div(I),G=Q.default.button(z),Z=Q.default.img(r),B=Q.default.div(o),P=function(e){function M(){var N,t,u;n(this,M);for(var D=arguments.length,i=Array(D),g=0;g<D;g++)i[g]=arguments[g];return N=t=a(this,e.call.apply(e,[this].concat(i))),t.state={isActive:!1},t.handleClick=function(){t.setState(function(e){return{isActive:!e.isActive}})},u=N,a(t,u)}return u(M,e),M.prototype.render=function(){var e=(0,s.default)({menu:!0,active:this.state.isActive});return A.default.createElement(Y,{id:"Navbar"},A.default.createElement(B,{id:"nav-toggle",className:e,onClick:this.handleClick},A.default.createElement(S,{className:"Container"},A.default.createElement(h,{className:"clean"},"Samuel Wong"),A.default.createElement(b,{className:e},A.default.createElement("button",{className:"hamburger hamburger--collapse "+e,type:"button"},A.default.createElement("span",{className:"hamburger-box"},A.default.createElement("span",{className:"hamburger-inner"}))))),A.default.createElement(v,{id:"Mobile"},A.default.createElement(E.default,{className:"borderright bordertop",to:"/"},A.default.createElement(G,null,A.default.createElement(Z,{src:U.default}),A.default.createElement("p",{className:"clean"},"Profile"))),A.default.createElement(E.default,{className:"bordertop",to:"/work"},A.default.createElement(G,null,A.default.createElement(Z,{src:x.default}),A.default.createElement("p",{className:"clean"},"Work"))),A.default.createElement(E.default,{className:"borderright",to:"/blog"},A.default.createElement(G,null,A.default.createElement(Z,{src:k.default}),A.default.createElement("p",{className:"clean"},"Blog"))),A.default.createElement(E.default,{className:"",to:"/#footer"},A.default.createElement(G,null,A.default.createElement(Z,{src:p.default}),A.default.createElement("p",{className:"clean"},"Social"))))))},M}(c.Component);P.propTypes={children:T.default.node},P.defaultProps={children:null},M.default=P,e.exports=M.default},71:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDI0QzAgMTAuNzQ1MiAxMC43NDUyIDAgMjQgMEg3NkM4OS4yNTQ4IDAgMTAwIDEwLjc0NTIgMTAwIDI0Vjc2QzEwMCA4OS4yNTQ4IDg5LjI1NDggMTAwIDc2IDEwMEgyNEMxMC43NDUyIDEwMCAwIDg5LjI1NDggMCA3NlYyNFoiIGZpbGw9IiNBRkQxRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNCAyOS42QzIxLjc5MDkgMjkuNiAyMCAzMS4zOTA4IDIwIDMzLjZWNjUuNkMyMCA2Ny44MDkxIDIxLjc5MDkgNjkuNiAyNCA2OS42SDY0LjhMODAgODAuNFY2OS42VjMzLjZDODAgMzEuMzkwOCA3OC4yMDkxIDI5LjYgNzYgMjkuNkgyNFpNMzYgNTQuNEMzOC40MzAxIDU0LjQgNDAuNCA1Mi40MzAxIDQwLjQgNTBDNDAuNCA0Ny41Njk5IDM4LjQzMDEgNDUuNiAzNiA0NS42QzMzLjU2OTkgNDUuNiAzMS42IDQ3LjU2OTkgMzEuNiA1MEMzMS42IDUyLjQzMDEgMzMuNTY5OSA1NC40IDM2IDU0LjRaTTU0LjQgNTBDNTQuNCA1Mi40MzAxIDUyLjM0MDUgNTQuNCA0OS44IDU0LjRDNDcuMjU5NSA1NC40IDQ1LjIgNTIuNDMwMSA0NS4yIDUwQzQ1LjIgNDcuNTcgNDcuMjU5NSA0NS42IDQ5LjggNDUuNkM1Mi4zNDA1IDQ1LjYgNTQuNCA0Ny41NyA1NC40IDUwWk02My42IDU0LjRDNjYuMDMgNTQuNCA2OCA1Mi40MzAxIDY4IDUwQzY4IDQ3LjU3IDY2LjAzIDQ1LjYgNjMuNiA0NS42QzYxLjE2OTkgNDUuNiA1OS4yIDQ3LjU3IDU5LjIgNTBDNTkuMiA1Mi40MzAxIDYxLjE2OTkgNTQuNCA2My42IDU0LjRaIiBmaWxsPSIjMzI4NERDIi8+Cjwvc3ZnPgo="},27:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDI0QzAgMTAuNzQ1MiAxMC43NDUyIDAgMjQgMEg3NkM4OS4yNTQ4IDAgMTAwIDEwLjc0NTIgMTAwIDI0Vjc2QzEwMCA4OS4yNTQ4IDg5LjI1NDggMTAwIDc2IDEwMEgyNEMxMC43NDUyIDEwMCAwIDg5LjI1NDggMCA3NlYyNFoiIGZpbGw9IiNGMUYzOTciLz4KPHBhdGggZD0iTTUwLjUyNzkgNjMuMjk4N0M0Ny4xMDk5IDY0LjM0MDMgNDQuMjg0NSA2My44NDM5IDQxLjQxMTggNjEuNjkxMUM0MC4xOTU2IDYwLjc3NTkgMzguMTExMSA1OC4yNjIxIDM3Ljk5MzMgNTEuNzY1NkMzNy45NjgyIDUwLjg2NjIgMzguNTI0MyA1MC4wMjUxIDM5LjM2NzEgNDkuNzAxNUMzOS45ODQ0IDQ5LjQ0MzYgNDAuNjMzMyA0OS4yMjc1IDQxLjI4NjQgNDkuMDM0NEM0NC42Mzk4IDQ4LjAyODcgNTAuOTcyNiA0Ni45NDM1IDU1LjcwMjEgNTEuMTUzQzU2LjIxNCA1MS42MDQ3IDU2LjUyMiA1Mi4yMzcyIDU2LjU4MTcgNTIuOTM5OEM1Ni43NTkyIDU1LjE2NjcgNTYuNzg2MSA2MC41MzgzIDUzLjA5MzQgNjIuMjczM0M1Mi4xNzYgNjIuNzA2IDUxLjMzNzUgNjMuMDUyNiA1MC41Mjc5IDYzLjI5ODdaTTQxLjY1MTQgNTAuMjI3M0M0MS4wMjEyIDUwLjQxNjEgNDAuNDE4MiA1MC42MjM3IDM5LjgyMzkgNTAuODc3MkMzOS40NjkzIDUxLjAxNDYgMzkuMjI2NCA1MS4zNjkyIDM5LjIyNjEgNTEuNzQ5OUMzOS4yNzc0IDUzLjgxMDEgMzkuNjM5IDU4LjgwOTkgNDIuMTQ4OSA2MC42NzM1QzQ0LjY2MzEgNjIuNTYwMSA0Ny4xMTgzIDYyLjk4MjcgNTAuMTM1NyA2Mi4wODcyQzUwLjg5OTQgNjEuODQ5NiA1MS42NzMyIDYxLjUzODkgNTIuNTQ5IDYxLjEzNzdDNTMuNTU0IDYwLjY2NDkgNTUuODIxNiA1OC45MzM4IDU1LjMxNTggNTMuMDMzQzU1LjI5MzIgNTIuNjU2NiA1NS4xMDk4IDUyLjMxMDEgNTQuODUxNyA1Mi4wNzI3QzUwLjYwNjkgNDguMjk2MyA0NC43NTY0IDQ5LjI5MTYgNDEuNjUxNCA1MC4yMjczWiIgZmlsbD0iIzk1OTczQiIvPgo8cGF0aCBkPSJNNzAuODYwNCA2My44ODYxQzY3LjY2NzggNjQuODYxOCA2NC43MDQ2IDY0LjM5MTIgNjIuNzYxNSA2Mi42MzZDNTkuNzYzIDU5LjkzNTcgNTkuODM3IDU1LjYxNTkgNjAuMTY0OCA1My4yOTQ4QzYwLjMxMDYgNTIuMjkyMiA2MC44ODU0IDUxLjQyMzggNjEuNzYyOCA1MC45MDM0QzYzLjE1MjcgNTAuMDczNCA2NC41MDggNDkuNDQwMSA2NS44MTQ0IDQ5LjA1MzlDNzIuOTIxNiA0Ni44OTY0IDc1Ljg4OTEgNTIuMzYyMiA3NS45MjA2IDUyLjQwMzlDNzUuOTYwNyA1Mi40OTE2IDc2LjAwMDggNTIuNTc5MyA3NS45OTUgNTIuNjc1NUM3Ni4wMjMxIDUzLjMzNjQgNzYuMTk4OCA1OS4yNTExIDc1LjMwNDYgNjEuMDgzMUM3NC43ODI4IDYyLjEwODIgNzIuOTUzNCA2My4yNTggNzAuODYwNCA2My44ODYxWk02Ni4xMzc2IDUwLjI3ODNDNjQuOTQ2MiA1MC42NDMxIDYzLjY3NDEgNTEuMjEzMyA2Mi4zNzE4IDUyLjAwMzJDNjEuODM2MiA1Mi4zMTcxIDYxLjQ2MjYgNTIuODYyNiA2MS4zOTAzIDUzLjQ5NDZDNjEuMTExNSA1NS41Njg3IDYxLjAyMDYgNTkuNDE1OCA2My41OTMyIDYxLjc0MzVDNjUuODgwNSA2My44MTUxIDY5LjE3MDUgNjMuMTA2NyA3MC40NzY4IDYyLjcyMDVDNzIuNTY5OCA2Mi4wOTI1IDczLjg3NTIgNjEuMDY0MSA3NC4xMTUzIDYwLjU2NzNDNzQuNzMyMSA1OS4yODY2IDc0Ljc0NDYgNTQuNzY0MiA3NC42ODYgNTIuOTE5NUM3NC4yNjA0IDUyLjE2NjIgNzEuNzU5MiA0OC41NjQzIDY2LjEzNzYgNTAuMjc4M1oiIGZpbGw9IiM5NTk3M0IiLz4KPHBhdGggZD0iTTYxLjEyNjQgNTMuMzUzNUM2MC45MjQgNTMuNDE1MSA2MC43MDQ0IDUzLjM4NDYgNjAuNTMyMyA1My4yMjY0QzU4LjY0NjUgNTEuNjUwOSA1Ni40NTIxIDUzLjM5MjIgNTYuMzY4OCA1My40NTUzQzU2LjEwMDIgNTMuNjcxOSA1NS43MTEzIDUzLjYyNTQgNTUuNDcxOSA1My4zNjA4QzU1LjI1NTQgNTMuMDkxOCA1NS4zMDE3IDUyLjcwMjYgNTUuNTY2IDUyLjQ2M0M1Ni42MTcyIDUxLjYwMDkgNTkuMTggNTAuNDMzMyA2MS4zNDI2IDUyLjIxODlDNjEuNjE5NCA1Mi40MjkgNjEuNjQ2MyA1Mi44Mjg0IDYxLjQzNjYgNTMuMTA1NEM2MS4zNDMyIDUzLjI0MTggNjEuMjM2OSA1My4zMDkxIDYxLjEyNjQgNTMuMzUzNVoiIGZpbGw9IiM5NTk3M0IiLz4KPHBhdGggZD0iTTM4LjQ2MDUgNTEuNjI3QzM4LjI0OTMgNTEuNjM4NCAzOC4wNDMzIDUxLjU1NjQgMzcuOTE0MSA1MS4zNjE2QzM2LjQ1OTQgNDkuMzgxMSAzMy45MTI0IDUwLjU0NzUgMzMuODE2NCA1MC41ODg5QzMzLjUwMzkgNTAuNzM1IDMzLjEzNzQgNTAuNTk2OSAzMi45NjgxIDUwLjI4MjhDMzIuODIyMiA0OS45Njk5IDMyLjk2MDEgNDkuNjAzIDMzLjI3NCA0OS40MzM1QzM0LjUwMDggNDguODQ3NiAzNy4yNjg0IDQ4LjMyNjMgMzguOTQxNiA1MC41NzY5QzM5LjE2MDIgNTAuODQ3MSAzOS4wOTA5IDUxLjI0MTQgMzguODIxIDUxLjQ2MDJDMzguNjk3NyA1MS41NzAzIDM4LjU3ODUgNTEuNjEwMyAzOC40NjA1IDUxLjYyN1oiIGZpbGw9IiM5NTk3M0IiLz4KPHBhdGggZD0iTTcyLjY4MTQgMjkuNjg0QzY4LjM1OTkgMjQuMzUzNSA2My4xMTEzIDIxLjYyMDcgNjIuNzE1OSAyMS40MjAzQzU3LjYyOTIgMTguNDI1NCA1MS42Mzk4IDE5LjI4ODggNDcuNTMzOSAyMC41MzkxQzQzLjk2NjIgMjEuNjI1OCA0MS4zNTIyIDIzLjA4MyA0MC43NjMgMjMuNDI0OEM0MC43NjMgMjMuNDI0OCAxNy41NTggMjUuODMxMyAyMy40MDk2IDU0Ljg1MTJDMjMuNTkxNCA1NC45MjI4IDIzLjc5NSA1NC44ODQ4IDIzLjk1OTIgNTQuNzQ4OEMyNC4yNTA3IDU0LjUwNDcgMjQuNTU3NCA1NC4zNDIxIDI0Ljg3NTUgNTQuMjQwNkMyNi4yMzMxIDUzLjg0IDI3LjUzMjIgNTQuODIwOCAyNy41MzYgNTQuODQxMkMyOC44NTQyIDU1LjkyMzkgMzAuMTk0NSA1Ny44MDM3IDMxLjQ4ODQgNjAuNDUxM0MzMS43MTgyIDYwLjg5MzQgMzIuMjIzIDYxLjExNTYgMzIuNzA0IDYwLjk4MzhDMzMuMDgzMSA2MC44NzEgMzMuMzQyOSA2MC41Njk1IDMzLjQxNyA2MC4xNzYyQzMzLjQxMzIgNjAuMTU1OCAzMy40Mjk4IDYwLjEzMTYgMzMuNDI2IDYwLjExMTJMMzMuODggNTEuMzYwM0MzMy45MTc1IDUwLjY1NzUgMzQuMTM2OSA1MC4wMjYyIDM0LjUzOCA0OS40NjY0QzM2LjMzMjQgNDcuMDAyMyAzOS4yNjk1IDM5LjcwNzMgNDAuNjQ3NiAzNi4xNEM0MC45Nzk1IDM3LjgwNzIgNDEuNTg0MyA0MC4wMzUgNDIuNjM4OSA0MS4zOTg3QzQyLjg2MjUgNDEuNjk0NCA0My4yNDI3IDQxLjgxMzMgNDMuNTgxMiA0MS43MDgxQzQzLjg1ODYgNDEuNjE0MiA0NC4wOTI4IDQxLjQwMTkgNDQuMTY1NiA0MS4xMTQyQzQ0LjE3ODMgNDEuMDY5NiA0NC4xOTExIDQxLjAyNTEgNDQuMTgzNSA0MC45ODQzQzQ0LjMxNTMgMzguNjQwMyA0NC45ODE0IDM2LjExMjMgNDYuMjA3NSAzMy4zMTEzQzQ2LjU5MzEgMzQuNTg4OSA0Ny41MDg3IDM2LjMzNzEgNDkuNDM2NCAzOC42NTU3QzQ5LjYwNDEgMzguODc3NSA0OS44OTE1IDM4Ljk1MDQgNTAuMTUyMyAzOC44ODA3QzUwLjQ5MDggMzguNzc1NCA1MC42ODE5IDM4LjQ0NDYgNTAuNjE3MyAzOC4wOTgyQzUwLjIzMDkgMzYuMjUxNCA1MS42ODgxIDMyLjU0MjggNTIuNjAzMSAzMC41NTg5QzU0LjE4MjUgMzIuNDc4NSA1OC42OTQ5IDM3LjgxNTUgNjAuOTU4OCAzOS41NjU0QzYxLjIwNzkgMzkuNzcyIDYxLjUzMjMgMzkuODE3IDYxLjgzMzggMzkuNzM5N0M2Mi4zNTE3IDM5LjU3OTkgNjIuNjMwNyAzOS4wNDI5IDYyLjQ5MTIgMzguNTIwN0w2MC43NzM5IDMyLjgxMDJDNjMuMjQ0NCAzMy45NzMzIDY5LjExODUgMzcuMDExMiA3MS4yNDIzIDQwLjQ5NTJDNzMuMTQ3MyA0My45MzU1IDc0LjQzODQgNDguMzc1OSA3NS4xODUyIDU0LjA3NzVDNzUuMjEwNCA1NC4zMjU4IDc1LjQxNTEgNTQuNTE5NiA3NS42NzQ1IDU0LjU1NTZDNzUuNzU5NyA1NC41NjA4IDc1LjgyNDYgNTQuNTY5OCA3NS45MDIyIDU0LjUzNDNDNzYuMDYxMyA1NC40ODM1IDc1Ljk2MDIgNTQuNjk1OSA3Ni4wMzUzIDU0LjUzNDNDODAuNDg0NCA0My4zNzI5IDc2Ljc3NTUgMzQuNjk4NCA3Mi42ODE0IDI5LjY4NFoiIGZpbGw9IiM5NTk3M0IiLz4KPC9zdmc+Cg=="},245:function(e,M,N){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}M.__esModule=!0,M.pageQuery=void 0;var n=N(1),a=t(n),u=N(8),D=t(u),i=N(38),g=t(i),j=N(20),l=t(j),I=N(24),z=t(I),r=N(98),o=t(r),c=N(55),A=(t(c),function(e){var M=e.data;return a.default.createElement("div",null,a.default.createElement(l.default,{data:""}),a.default.createElement(z.default,{title:"Blog | Desktop of Samuel",meta:[{property:"og:url",content:"http://desktopofsamuel.com/blog"}]}," > "),a.default.createElement("div",{className:"BlogIndex"},a.default.createElement("div",{className:"Container Padding-S"},a.default.createElement("div",{className:"HeroIcon"},a.default.createElement("div",{className:"HeroIconWrapper Padding-S"},a.default.createElement("img",{src:g.default,alt:"BlogLogo",width:"100px",height:"100px"}),a.default.createElement("h2",null,"Blog"),a.default.createElement("div",{className:"Container CenterContainer"},a.default.createElement("p",{className:"Grey Width-70"},"Articles I’ve written about design, technology and productivity. ")))),M.allMarkdownRemark.edges.map(function(e){return a.default.createElement("div",{className:"Column Grid-S",key:e.node.id},a.default.createElement("div",{className:"LeftColumn Lower"},a.default.createElement("small",null,e.node.frontmatter.date," ")),a.default.createElement("div",{className:"RightColumn Blog"},a.default.createElement(D.default,{to:e.node.frontmatter.path},a.default.createElement("h2",null,a.default.createElement("span",{className:"highlight"},e.node.frontmatter.title))),a.default.createElement("p",null,e.node.excerpt),a.default.createElement("br",null),a.default.createElement("hr",null)))}))),a.default.createElement(o.default,null))});M.pageQuery="** extracted graphql fragment **";M.default=A}});
//# sourceMappingURL=component---src-pages-blog-js-fbd401b6b6b680340221.js.map