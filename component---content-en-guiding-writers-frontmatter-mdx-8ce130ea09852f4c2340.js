(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[7866],{89022:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var r=a(19756),n=(a(67294),a(63497)),i=a(28360),o=["components"],l={},s={_frontmatter:l},d=i.Z;function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frontmatter",style:{position:"relative"}},"Frontmatter",(0,n.kt)("a",{parentName:"h1",href:"#frontmatter","aria-label":"frontmatter permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",null,"Frontmatter is the stuff you put at the very top of your markdown files to control everything from the title, page description, images, and SEO. On this site, we also use it to control what appears in the global header navigation, as well as how the sidebar gets rendered in each section. It's therefore quite important to know how to structure your frontmatter so that your file appears in the place you want it to."),(0,n.kt)("h2",{id:"title",style:{position:"relative"}},"Title",(0,n.kt)("a",{parentName:"h2",href:"#title","aria-label":"title permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"title-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"title[String] - Display title used for Header,Sidenav, and SEO.  \ntitle: Frontmatter\n")),(0,n.kt)("blockquote",null,(0,n.kt)("h3",{parentName:"blockquote",id:"the-title-rule",style:{position:"relative"}},"The Title Rule",(0,n.kt)("a",{parentName:"h3",href:"#the-title-rule","aria-label":"the title rule permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",{parentName:"blockquote"},"This specifies that we read and display the title in the ",(0,n.kt)("strong",{parentName:"p"},"frontmatter first"),", then the ",(0,n.kt)("strong",{parentName:"p"},"first h1 (#) in the file"),", then we ",(0,n.kt)("strong",{parentName:"p"},"fall back to the name of the file"),".")),(0,n.kt)("p",null,'The "title" attribute is used for the title meta attribute for SEO. The title rule still applies - it is global.'),(0,n.kt)("h2",{id:"order",style:{position:"relative"}},"Order",(0,n.kt)("a",{parentName:"h2",href:"#order","aria-label":"order permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",null,"This is a frontmatter attribute unique to this site which we use to define the order in which different pages appear in the sidebar navigation."),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"order-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"order[Integer] - The order in which this file is displayed on the sidenav.\norder: 0\n")),(0,n.kt)("blockquote",null,(0,n.kt)("h3",{parentName:"blockquote",id:"ordering",style:{position:"relative"}},"Ordering",(0,n.kt)("a",{parentName:"h3",href:"#ordering","aria-label":"ordering permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",{parentName:"blockquote"},"Order in the sidenav is based on lowest number (TOP) to highest (BOTTOM). Files that don't have an order are applied AFTER files that have order in alphabetical order. If this file isn't rendered on the sidenav (i.e. Top section files) this won't matter.")),(0,n.kt)("p",null,'The "order" is ',(0,n.kt)("strong",{parentName:"p"},"relative to the current directory"),", so you can't take a page deeper in the directory and put it on the top level of the sidebar. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"/learn/module-1/value.mdx")," with an order of 0 will just appear at the top of the ",(0,n.kt)("inlineCode",{parentName:"p"},"module-1")," dropdown in the sidenav and not at the top of the ",(0,n.kt)("inlineCode",{parentName:"p"},"learn")," sidenav."),(0,n.kt)("h2",{id:"language-selector",style:{position:"relative"}},"Language Selector",(0,n.kt)("a",{parentName:"h2",href:"#language-selector","aria-label":"language selector permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",null,"This is a frontmatter attribute unique to this site which defines whether users will be able to see the different languages available for the particular page they are currently on."),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"language-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"hideLanguageSelector[Boolean] - Language selectors render by default, setting this to true for your page allows you to hide it.\nhideLanguageSelector: false\n")),(0,n.kt)("h2",{id:"header-navigation",style:{position:"relative"}},"Header Navigation",(0,n.kt)("a",{parentName:"h2",href:"#header-navigation","aria-label":"header navigation permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",null,"The header options are an easy way of adding internal files to the global header. Files specified in header.mdx gets applied ",(0,n.kt)("strong",{parentName:"p"},"after"),' these. Files are organised in the header based on lowest number (LEFT) to highest (RIGHT). "Home" is ',(0,n.kt)("strong",{parentName:"p"},"always")," first, then files with headerOrder, then links in header.mdx."),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"header-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"header[String] - Whether this File should be rendered in the Header Navigation.\nheader: true\n\nheaderOrder[Integer] - The order in which this file will be displayed on the header.\nheaderOrder: 0\n")),(0,n.kt)("h2",{id:"seo",style:{position:"relative"}},"SEO",(0,n.kt)("a",{parentName:"h2",href:"#seo","aria-label":"seo permalink",className:"anchor-link after"},(0,n.kt)("span",{parentName:"a"},"¶"))),(0,n.kt)("p",null,"So you want your page to rank well, and have a nice image and description when you share it on social media to show your friends the awesome work you've done? We've got you covered."),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"image-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'featuredImage[String] - Image to use when a link is shared (i.e. Twitter/Facebook)\nfeaturedImage: "content/images/test.png"\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'The "image" attribute ',(0,n.kt)("strong",{parentName:"p"},"must")," be a path to the images in ",(0,n.kt)("inlineCode",{parentName:"p"},"content/images/"))),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"keywords-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'keywords[String] - Comma separated keywords used for SEO\nkeywords: "cool, sweet, awesome"\n')),(0,n.kt)("div",{className:"gatsby-code-title prism-code-title"},"description-example.mdx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'description[String] - Description of this page for SEO.\ndescription: "The most complete guide to writing frontmatter in mdx files that you\'ve ever read."\n')),(0,n.kt)("p",null,'The "description" attribute can also be used for the excerpt that gets rendered and indexed for searching articles on the site.'))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-guiding-writers-frontmatter-mdx-8ce130ea09852f4c2340.js.map