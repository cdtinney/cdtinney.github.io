(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{177:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return p}),t.d(a,"pageQuery",function(){return u});var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(193),c=t(178),o=t.n(c);function p(e){var a=e.data.markdownRemark,t=a.frontmatter,n=t.title,i=t.date,l=a.excerpt,c="blog - "+n;return r.a.createElement(s.a,{pageTitle:c,pageDescription:l},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{className:o.a.title},n),r.a.createElement("p",{className:o.a.date},i)),r.a.createElement("div",{className:o.a.content,dangerouslySetInnerHTML:{__html:a.html}})))}p.propTypes={data:l.a.shape({markdownRemark:l.a.shape({frontmatter:l.a.shape({title:l.a.string.isRequired}).isRequired,html:l.a.string.isRequired,excerpt:l.a.string.isRequired}).isRequired}).isRequired};var u="2444180190"},185:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},186:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(190),c=t.n(s),o=t(191),p=t.n(o),u=t(155),d=t.n(u);var m=function(){return r.a.createElement(p.a,{showUnder:160},r.a.createElement("div",{className:d.a.container},"up ↑"))},g=t(156),E=t.n(g);function f(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:t}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:t})),r.a.createElement("main",{className:E.a.content,"aria-label":"Content"},n),r.a.createElement(m,null))}f.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var h=f;a.a=h},187:function(e,a,t){"use strict";t(189);var n=t(185),r=t(0),i=t.n(r),l=t(1),s=t.n(l),c=t(55),o=t(157),p=t.n(o);function u(e){var a=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){return i.a.createElement("h1",{className:p.a.header+" "+(a?p.a.headerUnderline:"")},i.a.createElement("a",{href:"/",className:p.a.link},e.site.siteMetadata.title))},data:n})}u.propTypes={underline:s.a.bool},u.defaultProps={underline:!0};var d=u;a.a=d},188:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(186),c=t(187),o=t(158),p=t.n(o);function u(e){var a=e.pageTitle,t=e.pageDescription,n=e.title,i=e.titleHref,l=e.children;return r.a.createElement(s.a,{pageTitle:a,pageDescription:t},r.a.createElement("div",{className:p.a.container},r.a.createElement("header",{className:p.a.header},r.a.createElement("span",null,r.a.createElement(c.a,{underline:!1})),r.a.createElement("span",{className:p.a.titleContainer},r.a.createElement("span",{className:p.a.separator},"/"),r.a.createElement("h3",{className:p.a.title},i?r.a.createElement("a",{className:p.a.titleLink,href:i},n):n))),l))}u.propTypes={pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired,title:l.a.string.isRequired,titleHref:l.a.string,children:l.a.node.isRequired},u.defaultProps={titleHref:null};var d=u;a.a=d},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(188),c=t(164),o=t.n(c);function p(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(s.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},r.a.createElement("main",{className:o.a.container},n))}p.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var u=p;a.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-blog-post-js-80d4c64d0df3049523f2.js.map