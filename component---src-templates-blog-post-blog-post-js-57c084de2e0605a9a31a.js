(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{170:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return o}),t.d(a,"pageQuery",function(){return u});var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(182),c=t(171),p=t.n(c);function o(e){var a=e.data.markdownRemark,t=a.frontmatter,n=t.title,i=t.date,l=a.excerpt,c="blog - "+n;return r.a.createElement(s.a,{pageTitle:c,pageDescription:l},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{className:p.a.title},n),r.a.createElement("p",{className:p.a.date},i)),r.a.createElement("div",{className:p.a.content,dangerouslySetInnerHTML:{__html:a.html}})))}o.propTypes={data:l.a.shape({markdownRemark:l.a.shape({frontmatter:l.a.shape({title:l.a.string.isRequired}).isRequired,html:l.a.string.isRequired,excerpt:l.a.string.isRequired}).isRequired}).isRequired};var u="2444180190"},177:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},178:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(176),c=t.n(s),p=t(155),o=t.n(p);function u(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:t}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:t})),r.a.createElement("main",{className:o.a.content,"aria-label":"Content"},n))}u.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var d=u;a.a=d},179:function(e,a,t){"use strict";t(181);var n=t(177),r=t(0),i=t.n(r),l=t(1),s=t.n(l),c=t(55),p=t(156),o=t.n(p);function u(e){var a=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){return i.a.createElement("h1",{className:o.a.header+" "+(a?o.a.headerUnderline:"")},i.a.createElement("a",{href:"/",className:o.a.link},e.site.siteMetadata.title))},data:n})}u.propTypes={underline:s.a.bool},u.defaultProps={underline:!0};var d=u;a.a=d},180:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(178),c=t(179),p=t(157),o=t.n(p);function u(e){var a=e.pageTitle,t=e.pageDescription,n=e.title,i=e.titleHref,l=e.children;return r.a.createElement(s.a,{pageTitle:a,pageDescription:t},r.a.createElement("div",{className:o.a.container},r.a.createElement("header",{className:o.a.header},r.a.createElement("span",null,r.a.createElement(c.a,{underline:!1})),r.a.createElement("span",{className:o.a.separator},"/"),r.a.createElement("h3",{className:o.a.title},i?r.a.createElement("a",{href:i},n):n)),l))}u.propTypes={pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired,title:l.a.string.isRequired,titleHref:l.a.string,children:l.a.node.isRequired},u.defaultProps={titleHref:null};var d=u;a.a=d},182:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),l=t.n(i),s=t(180),c=t(161),p=t.n(c);function o(e){var a=e.pageTitle,t=e.pageDescription,n=e.children;return r.a.createElement(s.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},r.a.createElement("main",{className:p.a.container},n))}o.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var u=o;a.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-blog-post-js-57c084de2e0605a9a31a.js.map