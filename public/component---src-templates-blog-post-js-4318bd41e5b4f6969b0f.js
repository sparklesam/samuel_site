webpackJsonp([0x620f737b6699],{54:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),u=function(){return r.default.createElement("div",{className:"author"},r.default.createElement("img",{style:{width:"90px",height:"90px"},src:"/static/propic.png"}),r.default.createElement("div",{className:"intro"},r.default.createElement("div",{className:"arrowbox"},r.default.createElement("p",{className:"smallbody grey"},"Greetings ✌️ "),r.default.createElement("p",{className:"smallbody"}," My name is Samuel. I'm a UI/UX designer. I share my passion towards design and technology regularly on this blog. Feel free to share your thoughts with me."),r.default.createElement("small",null,r.default.createElement("a",{href:"https://twitter.com/desktopofsamuel",target:"_blank"},"Twitter")," | ",r.default.createElement("a",{href:"https://medium.com/@desktopofsamuel",target:"_blank"}," Medium")))))};t.default=u,e.exports=t.default},98:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),u=function(){return r.default.createElement("div",null,r.default.createElement("h1",null,"Want to work together? ",r.default.createElement("span",null,"Drop me a line")))};t.default=u,e.exports=t.default},30:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return e.raw=t,e}t.__esModule=!0;var r=n(["\n    position: relative;\n    margin-bottom: -50px;\n    text-align: center;\n    background-color: #f7f7f7;\n"],["\n    position: relative;\n    margin-bottom: -50px;\n    text-align: center;\n    background-color: #f7f7f7;\n"]),u=n(["\n\n    font-weight: 600;\n"],["\n\n    font-weight: 600;\n"]),o=n(["\n\n"],["\n\n"]),d=a(1),s=l(d),c=a(10),f=l(c),i=f.default.section(r),m=f.default.h1(u),p=f.default.p(o),E=function(){return s.default.createElement("div",{id:"#footer"},s.default.createElement(i,null,s.default.createElement("div",{className:"CenterContainer Padding-S"},s.default.createElement("img",{style:{width:"90px",height:"90px"},src:"/static/propic.png"}),s.default.createElement(m,null,"Let's Keep In Touch"),s.default.createElement("div",{className:""},s.default.createElement(p,null,"I'm interested in freelance projects and remote work, or feel free to ping me about design & technology. "),s.default.createElement(p,null,s.default.createElement("a",{href:"mailto:desktopofsamuel@gmail.com"},"desktopofsamuel@gmail.com"))))),s.default.createElement("section",{className:"S-Footer"},s.default.createElement("div",{className:"Container TextCenter Padding-XS"},s.default.createElement("div",{className:"FooterWrapper WhiteText"},s.default.createElement("small",null,"©2018 Samuel Wong — Made in Hong Kong")))))};t.default=E,e.exports=t.default},240:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),d=l(o),s=a(37),c=a(8),f=l(c),i=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.postNode,t=e.fields;return d.default.createElement("div",{className:"post-suggestions md-grid md-cell--12"},d.default.createElement(f.default,{to:t.prevSlug,className:"post-suggestion"},d.default.createElement(s.FaArrowLeft,null),d.default.createElement("div",{className:"headline-container hide-on-mobile"},d.default.createElement("h2",{className:"md-body-2 secondary-color"},"Previous"),d.default.createElement("h6",{className:"md-headline secondary-color"},t.prevTitle))),d.default.createElement(f.default,{to:t.nextSlug,className:"post-suggestion"},d.default.createElement("div",{className:"headline-container"},d.default.createElement("h2",{className:"md-body-2 secondary-color"},"Next"),d.default.createElement("h6",{className:"md-headline secondary-color"},t.nextTitle)),d.default.createElement(s.FaArrowRight,null)))},t}(o.Component);t.default=i,e.exports=t.default},250:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return e.raw=t,e}function r(e){var t=e.data,a=e.pathContext,l=t.markdownRemark,n=a.next,r=a.prev,o=y.default.div(u);return d.default.createElement("div",null,d.default.createElement(p.default,{data:l}),d.default.createElement("div",{className:"BlogContainer Blog"},d.default.createElement("div",{className:"Content"},d.default.createElement("small",null,l.frontmatter.date," "),d.default.createElement("h1",null,l.frontmatter.title),d.default.createElement("hr",null),d.default.createElement("div",{className:"BlogContent",dangerouslySetInnerHTML:{__html:l.html}}),d.default.createElement("div",{className:"BlogNavigate"},d.default.createElement("div",{className:"Previous"},r&&d.default.createElement(c.default,{to:r.frontmatter.path},"← Previous")),d.default.createElement("div",{className:"Next"},n&&d.default.createElement(c.default,{to:n.frontmatter.path},"Next → "))),d.default.createElement("hr",null),d.default.createElement("div",{className:"tag"},"Tagged with ",l.frontmatter.tags.map(function(e,t){return d.default.createElement("span",{key:t,className:"tag"},d.default.createElement(c.default,{to:"tags/"+e},e))})))),d.default.createElement("div",{className:"Container"},d.default.createElement(o,null,d.default.createElement("div",null,d.default.createElement(c.default,{to:l.fields.prevSlug},d.default.createElement("h4",null,"Last Article"),d.default.createElement("h5",null,l.fields.prevTitle))),d.default.createElement("div",null,d.default.createElement(c.default,{to:l.fields.nextSlug},d.default.createElement("h4",null,"What's Next"),d.default.createElement("h5",null,l.fields.nextTitle))))))}t.__esModule=!0,t.postQuery=void 0;var u=n(["\n        display: flex;\n        justify-content: space-between;\n    "],["\n        display: flex;\n        justify-content: space-between;\n    "]);t.default=r;var o=a(1),d=l(o),s=a(8),c=l(s),f=a(30),i=(l(f),a(35)),m=(l(i),a(26)),p=l(m),E=(a(37),a(54)),h=(l(E),a(98)),g=(l(h),a(240)),v=(l(g),a(10)),y=l(v);t.postQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-4318bd41e5b4f6969b0f.js.map