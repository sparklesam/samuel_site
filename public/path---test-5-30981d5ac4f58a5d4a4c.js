webpackJsonp([41178784558228],{1006:function(e,t){e.exports={data:{markdownRemark:{html:"<h3>Book Review</h3>\n<p>Testing</p>",excerpt:"Book Review Testing",frontmatter:{path:"/test-5",title:"Hello How Are You",date:"2018-07-20",tags:["test","design","technology"],image:null}}},pathContext:{prev:{html:'<p>TLDR: I\'m summing up the reasons why a designer should build a custom site using Gatsby.JS. </p>\n<p>One of my year resolution for 2018 is to learn front-end coding. I feel that being a designer, learning how to code is the way how I could step up the game in web design, by understanding how every bit and piece fall into places. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-2ed49.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1280px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB07pqGBX/xAAYEAEBAQEBAAAAAAAAAAAAAAABAhEAE//aAAgBAQABBQL3kS5ZHTDmRAA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIRIx/9oACAEBAAY/Atw6uFR4SIiP/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARMSGR/9oACAEBAAE/IVwvRrsE0ixWCSCOJFtHksigcqCgAMCf/9oADAMBAAIAAwAAABCsD//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EIf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFxofD/2gAIAQEAAT8Qb5EpQYzXkucBe8+OOA1RRN5J+w4U9YLgfy4yTQEDf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Framev2"\n        title=""\n        src="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-71e08.jpg"\n        srcset="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-996a7.jpg 320w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-06faf.jpg 640w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-71e08.jpg 1280w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-2ed49.jpg 1920w"\n        sizes="(max-width: 1280px) 100vw, 1280px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I had two personal websites, one is my Tumblr and another is my portfolio site, separately hosted and running <a href="https://cargocollective.com/">Cargo Collective</a>. But I was thinking, "Wouldn\'t it be great if both of my portfolio and blog are together?"</p>\n<h2>Why do you need a personal website?</h2>\n<p>It\'s 2018. Online presence is becoming the norm, even in the professional field. Your previous work, your side projects, even your work in progress matter. </p>\n<p>A personal site also means more control over your message and story, whether you\'re looking for new clients, landing a dream job or establishing a personal brand. For sure it takes more time and effort, but I think it is quite a good practice to sharpen your skill and catching up. Needless to say, making a personal site is much easier than a decade ago. </p>\n<p>While platforms like Medium, Facebook Pages are building homogeneous style for coherent browsing / reading experience. Your website should pursue personality instead. I\'m not saying you shouldn\'t post to Medium publications or run a Facebook Page, but just not as the destination but a way to reach your very own website where you deliver your message. </p>\n<h2>What\'re my options?</h2>\n<p>Speaking of the BIG question, which platform should you choose? Wordpress is great for beginners since all settings are visible without dealing with code. But it was developed as a blogging platform, so it requires specific template in order to create a decent looking personal page. </p>\n<p>Website builder like <a href="https://webflow.com/?rfsn=1574887.557b84">Webflow</a> and <a href="http://squarespace.com/">Squarespace</a> is also an elegant option, but they adopt subscription model so the cost would be definitely higher.  </p>\n<p>After taking the <a href="http://designcode.io/">Design+Code\'s</a> React course instructed by Meng To, I was introduced to <a href="https://www.gatsbyjs.org/">Gatsby.JS</a>. After trying it out for few weeks, I genuinely rooting it as the up-and-coming personal website &#x26; blog option. Because:</p>\n<ol>\n<li>A custom personal website allows maximum creativity, a great advantage for designers.</li>\n<li>It\'s blaze-fast. Because all files are generated already. It also adopts modern web technology like React, Webpack and GraphQL. I compared the Lighthouse audit ran on beta site and current site. Performance has insanely improved.</li>\n<li>Gatsby is a static site generator, but dynamic data source is widely supported. Wordpress, Contentful or even Airtable can be used as a database. </li>\n<li>Deploying is as easy as drag-and-drop. <a href="http://netlify.com/">Netlify</a> provides free hosting for static site, and Gatsby is free, meaning the project could be free as long as you have your own domain.</li>\n<li>Personal reason but a good one. <strong>I admit the process of making your own site is empowering.</strong> It\'s nice to not rely on anybody and build a website designed and developed all by yourself. I\'ve been taking some screenshots logging daily progress, will share it later.</li>\n</ol>\n<h2>Last word</h2>\n<p>As Gatsby is quite new since it was first released a year ago. I wouldn\'t say current resources available is sufficient, but it is a strong and growing community. Most users are frontend web developer right now, but I\'m optimistic to see more designers onboard.</p>\n<p>I admit there is indeed a learning curve to React, Gatsby and also GraphQL since I know fundamental HTML and CSS only. There were long nights that I was figuring out causes of errors, which turned out to be some stupid mistakes. </p>\n<p>I\'m writing this also for my own future reference:</p>\n<blockquote>\n<p>A personal website should not only showcase your work, but also speak who you are and how you work.</p>\n</blockquote>\n<p>That\'s why I\'m eager to share my work in progress, hoping to launch the site as soon as possible. </p>\n<h5>Reading List:</h5>\n<h5><a href="https://uxdesign.cc/things-i-honestly-dont-want-to-see-in-your-portfolio-3d3497666ca8">Things I (honestly) don’t want to see in your portfolio</a></h5>',id:"/Users/samuelisme/Code/blog/src/blog/2018-08-27 Why designers need a personal website/index.md absPath of file >>> MarkdownRemark",excerpt:"TLDR: I'm summing up the reasons why a designer should build a custom site using Gatsby.JS.  One of my year resolution for 2018 is to learn front-end coding. I feel that being a designer, learning how to code is the way how I could step up the game…",frontmatter:{path:"/why-designers-need-a-personal-website",title:"Why designers need a personal website?",date:"2018-08-26",tags:["personalbrand","process","gatsby"],image:null}},next:{html:'<p>We have a lot of assumptions in the process of creating wireframes and mockups for websites &#x26; apps. As wireframes &#x26; mock-ups are not dynamic, it is easy to aware various scenarios when dummy content or placeholders are used.</p>\n<p>In contrast to graphic design or typesetting, which you build on certain materials delivered by the client. Website &#x26; app is on the other side of the track, it’s like working on a blank canvas at the beginning. Stakeholders like clients &#x26; users have some rough ideas but there is still space that requires our imagination and instinct to predict how people would use them.</p>\n<p>A lot of tools that help designers to generate filler text easily to imitate a real product. Lorem Ipsum (originated from a sadistic quote in Latin) has become the synonym of dummy text. Tools like <a href="https://itunes.apple.com/us/app/littleipsum/id405772121?mt=12">Little Lorem</a> enable quick access to different lengths of text, either by sentence, by line, or by paragraph. But when lorem ipsum is everywhere, it is not a good sign for a sophisticated design. What it really means is you need be more thorough of your design or you will need to revise it after all. I recognized placing them in my design files is actually a lazy step back, and the lesson I learned is to use real data &#x26; content as soon as possible.</p>\n<p>Here are the reasons why:</p>\n<h2>Misinformed Design Delays Process</h2>\n<p>Unless intentional, filler text usually delays my design process. Once lorem is placed, I can hardly get rid of it, especially when I was designing an app with content management system (CMS) or user-generated content. The idea of mock-up text will be replaced by anything, encouraged my mind to do nothing about it.</p>\n<p>But for the exact same reason, users could also do nothing or confused about it, without context knowing what should they fill in. It would also become developers’ trouble when the draft has been developed. It would take more time and effort to adjust. What if the lorem is not text-only? Or the design incorporated personas photo that most user does not feel like to upload? Getting ahead start to collect actual copy or real sets of data would save you tons of time in the development process.</p>\n<h2>One Step Ahead To Stop Design Flaws</h2>\n<p>Using dummy text could also result in design flaws in terms of visual design. I would definitely redesign if article headlines are too long on a blog page, as they affect how the page looks like on a photo background. Button text is also tricky, the space you need placing a “View More” button is not the same as “Read {Blog Title} ”. Using real data would provide a more accurate estimate of the information I am dealing with, resulting in a more informed decision.</p>\n<h2>Design With Real Data is Designing Reality</h2>\n<p>What makes mock-up real is not how refined a box shadow is created, but context. How every single detail falls into the right place, that’s how a mock-up straightly takes you in the context. However, working in a web agency that handles clients’ design and feature request every day. Getting information from stakeholders or clients is not an easy task. Most clients come with a business plan or sketchy idea, do not realize the importance of getting the real data.</p>\n<p>Depending on the scope of work of the project, the step of researching actual data could be an extra effort to the design process, or even it should before design process begin. As <a href="https://medium.com/bridge-collection/modern-design-tools-using-real-data-62d499e97482">Josh Puckett</a> stated, “ (Designers) allow data to inform and constrain their work. Their decisions are wholly informed; implementation details carefully considered; edge cases solved. They build empathy for how their users will actually experience things in a variety of contexts.”</p>\n<p>Trying to obtain data is also one step toward practicality. Realistic data that you can obtain eventually will be the data shown on screen. Those you cannot obtain will remain in the fancy template. I worked on an app that showcases tourist destinations, the “editorial” introduction that filled with lorem ipsum has eventually become excerpts from Wikipedia, which have removed after all. With Sketch quick-and-easy plugin (Try <a href="https://github.com/timuric/Content-generator-sketch-plugin">Content Generator</a> or <a href="https://www.invisionapp.com/craft">Invision’s Craft</a>, inputting dynamic data is easier than ever. Craft even support JSON so any dataset can be imported into the design within clicks.</p>\n<p>If you are working on a new website / app idea, getting real data is an essential step leads to a better design. It would require collaborative effort from both clients and designers to do so. To me, if I’m doing all my old projects again, this would be the way I choose.</p>',id:"/Users/samuelisme/Code/blog/src/blog/2018-04-24 why real data and content matter/index.md absPath of file >>> MarkdownRemark",excerpt:"We have a lot of assumptions in the process of creating wireframes and mockups for websites & apps. As wireframes & mock-ups are not dynamic, it is easy to aware various scenarios when dummy content or placeholders are used. In contrast to graphic…",frontmatter:{path:"/design-with-real-data",title:"Why real data & content matter",date:"2018-04-24",tags:["prototype","design"],image:null}}}}}});
//# sourceMappingURL=path---test-5-30981d5ac4f58a5d4a4c.js.map