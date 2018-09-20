webpackJsonp([0x7ab76f7a7e61],{1018:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/samuelisme/Code/blog/src/blogs/2018-09-07 Building Gatsby With Mutliple Post Type/index.md absPath of file >>> MarkdownRemark",html:'<p>TLDR: I\'m sharing my way of setting up a multiple post types in GatsbyJS. It works for portfolio setup with blog + projects . </p>\n<p>As a designer with no prior experience in React, starting Gatsby with a starter template is the easiest way. After that, adding bits and pieces by following online tutorials and github threads are the parts that you learn, as you undersstand how to adapt others\' code and review each expression and argument means whenever you encounter errors.</p>\n<h2>Use Case</h2>\n<p>I\'m setting up my Gatsby to support multiple post types, as I want to display my blog articles and projects at the same time. It is useful for personal / agency site setup. Since all posts will be rendered by markdown files, they will be saved in different source folders for simplicity.   </p>\n<h2>What To Do</h2>\n<p>Let me explain the whole process verbally since there are only a few tutorials online. For the record, this have all assume you have an existing Gatsby blog already.  </p>\n<p>Things we need to do:</p>\n<ol>\n<li>Create a new "projects" folder and post under source folder</li>\n<li>Edit <code>gatsby-config.js</code> to include new source folder in <code>gatsby-source-filesystem</code> plugin</li>\n<li>Duplicate <code>blog-post.js</code> to create <code>project-post.js</code> template</li>\n<li>Edit <code>gatsby-node.js</code> CreatePage API to adopt separate template for different post type. </li>\n<li>Create Project Main page to query project post</li>\n<li>Edit Blog Main page not to query project post</li>\n<li>Make sure other functions like Tags, Prev/Next will not mix up in both types</li>\n</ol>\n<h2>1. Create New Projects Folder</h2>\n<p>My source folder setup is like this:</p>\n<pre><code>src\n——blogs\n    —— Blog Post #1\n        ——index.md\n        ——photo1.jpg\n——projects\n    ——Project #1\n        ——index.md\n        ——photo2.jpg    \n——templates\n        ——blog-post.js\n        ——project-post.js\n</code></pre>\n<p>All blog posts and project posts will be grouped in separated folders, with individual project post named <code>index.md</code> and a feature photo. In this scenario, all project files will require a feature photo since it will be displayed on Project Main page. </p>\n<p>For frontmatter of the markdown, I have added a new field called "Posttype", those specified as <code>posttype: project</code> will be queried later in project main page.</p>\n<p>My markdown frontmatter setup is:</p>\n<pre><code>path: "/project-1"\ndate: "2018-09-07"\ntitle: "Project 1"\ntags: ["app", "design"]\nposttype: "project"\nimage: "./project-1.png"\n</code></pre>\n<h2>2. Edit Gatsby-Config.js</h2>\n<p>We will need to edit gatsby-config.js in order to let Gatsby know where to look when create new post page. </p>\n<pre><code>{\n  resolve: \'gatsby-source-filesystem\',\n  options: {\n    path: `${__dirname}/src/projects`,\n    name: \'project\'\n  }\n},\n</code></pre>\n<h2>3. Create Project Post Template</h2>\n<p>Then, we will need to create a Project Post template <code>project-post.js</code>, putting in my template (src/templates) folder together with <code>blog-post.js</code>, so later <code>gatsby-node.js</code> can reference to when creating project pages.</p>\n<p>Let\'s copy everything from <code>blog-post.js</code> and paste it in Project Post. This will ensure everything works accordingly. However, you will only need to rename the GraphQL query name, since all GraphQL query need to have unique name. I changed from "BlogPostByPath" to "ProjectPostByPath". We can come back and edit it later. </p>\n<h2>4. Edit Gatsby-Node.js</h2>\n<p><strong>Being a static site generator, Gatsby-Node.js handles how the site create each page from React into HTML.</strong> Personally speaking, it is a rather confusing part of the whole process. </p>\n<p>CreatePages should be in the file already.\n<code>exports.createPages = ({boundActionCreators, graphql}) => { const { createPage } = boundActionCreators</code></p>\n<p>We will need to import the <code>project-post.js</code>right after the blog template. </p>\n<p><code>const postTemplate = path.resolve(\'src/templates/blog-post.js\'); const projectTemplate = path.resolve(\'src/templates/project-post.js\');</code>\n<br>\nAfter that, we will use our newly created frontmatter field, "posttype" to filter all our markdown pages. Because majority of markdown pages will be blog page, I use the if / else argument. Unless specified post "posttype" is equal to "project" (or any other posttype to be included in the future), or else Gatsby will recognise the post as a blog post. </p>\n<p>Here\'s my <code>gatsby-node.js</code> file:</p>\n<pre><code class="language-Javascript">result.data.allMarkdownRemark.edges.forEach(edge => {\n    if (edge.node.frontmatter.posttype === \'project\') {\n        createPage({\n            path: edge.node.frontmatter.path,\n            component: projectTemplate,\n            cotext: {}\n        });\n    }   \n    else {\n        createPage({\n            path: edge.node.frontmatter.path,\n            component: postTemplate,\n            context: {\n            },\n        })\n    }\n})    \n</code></pre>\n<p>Remember you will need starting the site again with <code>gatsby-develop</code> since hot reload does not include regenerating all posts </p>\n<p>If you have successfully <code>gatsby-develop</code> the site, let\'s go to the project post path to make sure it is working. You should be seeing a blog post with your project cotent. Now you may adjsut the project post template to suit your needs.</p>\n<p>Right now this method is not creating a prefix path in front of the project post. So there might be a chance that project post shares the same path with a blog post. I\'m still looking for a solution, feel free to suggest any. </p>\n<h2>5. Create Project Main Page</h2>\n<p>Now the individual post is done, let\'s work on a Project Main page that will query all project post. </p>\n<p>First, all the standards:</p>\n<pre><code>import React from \'react\'\nimport Link from \'gatsby-link\'\n\nconst ProjectPage = ({data}) => {\n    {data.allMarkdownRemark.edges.map(post => (\n        &#x3C;div key={ post.node.id }>\n                &#x3C;Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />\n                &#x3C;Link to={post.node.frontmatter.path} >\n                    &#x3C;h2>{post.node.frontmatter.title}&#x3C;/h2>\n                &#x3C;/Link>\n                &#x3C;p>{post.node.excerpt}&#x3C;/p>\n        &#x3C;div/>>\n\nreturn (\n)}\nexport const pageQuery = graphql`\n</code></pre>\n<p>Then we will add our GraphQL query at the end, notice I have filtered using the frontmatter, only those markdown files with assigned "project" as a post type will display. </p>\n<pre><code>query ProjectIndex {\n  allMarkdownRemark(\n      sort: {order: DESC, fields: [frontmatter___date]}, \n      filter: {frontmatter: {posttype: {eq: "project"}}}\n    ){\n    edges {\n      node {\n        id\n        excerpt(pruneLength: 250)\n        frontmatter {\n          path\n          title\n          date\n          tags\n          image {\n            childImageSharp {\n              sizes(maxWidth: 1140) {\n                base64\n                aspectRatio\n                src\n                srcSet\n                srcWebp\n                srcSetWebp\n                sizes\n                originalImg\n                originalName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n</code></pre>\n<p>Remember to add <code>export default ProjectPage</code></p>\n<h2>6. Edit Blog Main</h2>\n<p>Then if you go to Blog Main page, you would still see all the markdown fiels located in project. That is because you will need filter the GraphQL as well. </p>\n<p>Because we use if/else function in <code>gatsby-node.js</code>, stating all post without specifying posttype will be a blog post. We cannot query this page using frontmatter\'s post type,  we will use the filter function that is only available for allMarkdownRemark.</p>\n<pre><code class="language-GraphQL">allMarkdownRemark (\n        sort: { order: DESC, fields: [frontmatter___date] },\n        filter: {fileAbsolutePath: {regex: "\\/blogs/"}}\n    )\n</code></pre>\n<h2>7. Make sure other functions will not mix up in different post types</h2>\n<p>Last but not least, we\'ll need to double check if functions like tags, prev/next will mix up both post type. </p>\n<p>All of these posts should separated under the two post type. I\'m still figuring out how to do that. Will update soon. </p>',excerpt:"TLDR: I'm sharing my way of setting up a multiple post types in GatsbyJS. It works for portfolio setup with blog + projects .  As a designer with no prior experience in React, starting Gatsby with a starter template is the easiest way. After that…",frontmatter:{title:"Building Gatsby With Multiple Post Type",date:"Sep 07, 2018",tags:["Work-In-Progress","Gatsby"],path:"/building-gatsby-with-multiple-post-type"}}},{node:{id:"/Users/samuelisme/Code/blog/src/blogs/2018-08-27 Why designers need a personal website/index.md absPath of file >>> MarkdownRemark",html:'<p>TLDR: I\'m summing up the reasons why a designer should build a custom site using Gatsby.JS. </p>\n<p>One of my year resolution for 2018 is to learn front-end coding. I feel that being a designer, learning how to code is the way how I could step up the game in web design, by understanding how every bit and piece fall into places. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-2ed49.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1280px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB07pqGBX/xAAYEAEBAQEBAAAAAAAAAAAAAAABAhEAE//aAAgBAQABBQL3kS5ZHTDmRAA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIRIx/9oACAEBAAY/Atw6uFR4SIiP/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARMSGR/9oACAEBAAE/IVwvRrsE0ixWCSCOJFtHksigcqCgAMCf/9oADAMBAAIAAwAAABCsD//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EIf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFxofD/2gAIAQEAAT8Qb5EpQYzXkucBe8+OOA1RRN5J+w4U9YLgfy4yTQEDf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Framev2"\n        title=""\n        src="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-71e08.jpg"\n        srcset="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-996a7.jpg 320w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-06faf.jpg 640w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-71e08.jpg 1280w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-2ed49.jpg 1920w"\n        sizes="(max-width: 1280px) 100vw, 1280px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I had two personal websites, one is my Tumblr and another is my portfolio site, separately hosted and running <a href="https://cargocollective.com/">Cargo Collective</a>. But I was thinking, "Wouldn\'t it be great if both of my portfolio and blog are together?"</p>\n<h2>Why do you need a personal website?</h2>\n<p>It\'s 2018. Online presence is becoming the norm, even in the professional field. Your previous work, your side projects, even your work in progress matter. </p>\n<p>A personal site also means more control over your message and story, whether you\'re looking for new clients, landing a dream job or establishing a personal brand. For sure it takes more time and effort, but I think it is quite a good practice to sharpen your skill and catching up. Needless to say, making a personal site is much easier than a decade ago. </p>\n<p>While platforms like Medium, Facebook Pages are building homogeneous style for coherent browsing / reading experience. Your website should pursue personality instead. I\'m not saying you shouldn\'t post to Medium publications or run a Facebook Page, but just not as the destination but a way to reach your very own website where you deliver your message. </p>\n<h2>What\'re my options?</h2>\n<p>Speaking of the BIG question, which platform should you choose? Wordpress is great for beginners since all settings are visible without dealing with code. But it was developed as a blogging platform, so it requires specific template in order to create a decent looking personal page. </p>\n<p>Website builder like <a href="https://webflow.com/?rfsn=1574887.557b84">Webflow</a> and <a href="http://squarespace.com/">Squarespace</a> is also an elegant option, but they adopt subscription model so the cost would be definitely higher.  </p>\n<p>After taking the <a href="http://designcode.io/">Design+Code\'s</a> React course instructed by Meng To, I was introduced to <a href="https://www.gatsbyjs.org/">Gatsby.JS</a>. After trying it out for few weeks, I genuinely rooting it as the up-and-coming personal website &#x26; blog option. Because:</p>\n<ol>\n<li>A custom personal website allows maximum creativity, a great advantage for designers.</li>\n<li>It\'s blaze-fast. Because all files are generated already. It also adopts modern web technology like React, Webpack and GraphQL. I compared the Lighthouse audit ran on beta site and current site. Performance has insanely improved.</li>\n<li>Gatsby is a static site generator, but dynamic data source is widely supported. Wordpress, Contentful or even Airtable can be used as a database. </li>\n<li>Deploying is as easy as drag-and-drop. <a href="http://netlify.com/">Netlify</a> provides free hosting for static site, and Gatsby is free, meaning the project could be free as long as you have your own domain.</li>\n<li>Personal reason but a good one. <strong>I admit the process of making your own site is empowering.</strong> It\'s nice to not rely on anybody and build a website designed and developed all by yourself. I\'ve been taking some screenshots logging daily progress, will share it later.</li>\n</ol>\n<h2>Last word</h2>\n<p>As Gatsby is quite new since it was first released a year ago. I wouldn\'t say current resources available is sufficient, but it is a strong and growing community. Most users are frontend web developer right now, but I\'m optimistic to see more designers onboard.</p>\n<p>I admit there is indeed a learning curve to React, Gatsby and also GraphQL since I know fundamental HTML and CSS only. There were long nights that I was figuring out causes of errors, which turned out to be some stupid mistakes. </p>\n<p>I\'m writing this also for my own future reference:</p>\n<blockquote>\n<p>A personal website should not only showcase your work, but also speak who you are and how you work.</p>\n</blockquote>\n<p>That\'s why I\'m eager to share my work in progress, hoping to launch the site as soon as possible. </p>\n<h5>Reading List:</h5>\n<h5><a href="https://uxdesign.cc/things-i-honestly-dont-want-to-see-in-your-portfolio-3d3497666ca8">Things I (honestly) don’t want to see in your portfolio</a></h5>',excerpt:"TLDR: I'm summing up the reasons why a designer should build a custom site using Gatsby.JS.  One of my year resolution for 2018 is to learn front-end coding. I feel that being a designer, learning how to code is the way how I could step up the game…",frontmatter:{title:"Why designers need a personal website?",date:"Aug 26, 2018",tags:["Work-In-Progress","Design","Gatsby"],path:"/why-designers-need-a-personal-website"}}}]}},pathContext:{tag:"Gatsby"}}}});
//# sourceMappingURL=path---tags-gatsby-d43af7496e5560fc0a94.js.map