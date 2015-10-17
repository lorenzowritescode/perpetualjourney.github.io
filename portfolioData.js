var portfolioData = [
{
	title: "Domini",
	subtitle:  "Summer Internship 2015",
	img: 'domini.png',
	description : "Over the 2 months spent at Domini I have created from scratch the Domini web application, which allows users to write and save code, request remote executions, and inspect the results - through custom charts and tables, all in the browser. This has been a very challenging project, and I have designed and curated the development of the application. I have used React + Flux for the front-end, Node + Express for the back-end, and PostgreSQL as the database.",
	link: '',
	btnText: ''
},{
	title: "BentoChat",
	subtitle:  "Year 2 WebApp Project",
	img: 'bento_cover.png',
	description : "BentoChat is an opinionated platform for group productivity. It offers a robust Chat, a streamlined Wiki, and intuitive Todos. It's still a work in progress for now, but I'm planning on releasing a private alpha in early 2016.",
	link: 'http://www.slideshare.net/lorenzop/bentochat-a-platform-for-group-organisation',
	btnText: 'Presentation on Slideshare'
},{
	title: "Befittd",
	subtitle:  "Internship - Summer 2014",
	img: 'befittd_portfolio_cover.png',
	description : "An overview of what I've done in my internship at Befittd, a fashion-tech startup based in London.",
	link: 'befittd.html'
},{
    title: "Pokedex",
    subtitle: "An AngularJS WebApp for your favourite fictional monsters",
    img: 'pokedex.png',
    description: '<p>I\'m writing this little cute thing to tinker with some of AngularJS features, such as the ui-router, the $cacheFactory and more.</p><p>The data is pulled from <a href="http://pokeapi.co">PokeAPI</a> the uber cool REST API for all your pokemon needs.</p><p>This project is open source and available <a href="http://github.com/perpetualjourney/pokedex">on my Github.</a></p>',
    link: 'http://perpetualjourney.github.io/pokedex',
    btnText: 'Gotta catch \'em all!'
},
{
    title: 'WACC-a-Script',
    subtitle: 'A WACC to ARM compiler + WACC to JavaSript transpiler + AngularJS Testing Rig',
    img: 'wacc.png',
    description: '<p>This project is the result of a 2 month group project on compilers.</p><p>It is a massive codebase (more than 10000 lines of code) made up of mostly Java. The rest is Ruby for testing scripts, ANTLR for parser generation, and JS for everything related to the transpiler, which was the extension we chose.</p><p>This was one of the hardest and longest projects I\'ve ever done, and there\'s many interesting parts of the codebase, such as the <a href="http://flowtype.org">Flow</a> parser which allows semantic checking of the WACC source when using external JavaScript libraries which have been type-annotated.<p/><p>This project is open source and available <a href="http://github.com/perpetualjourney/WACC-a-Script">on my Github.</a></p><p>The Testing Rig has an ExpressJS backend that tests the requested files against a set of inputs. It is hosted on a DigitalOcean droplet.</p>',
    link: 'http://178.62.82.220:3000/',
    btnText: 'Live Demo of the Testing Rig'
},
{
    title: 'Decus',
    subtitle: 'ICHACK 2015 - An open API to effortlessly donate to your favourite ',
    img: 'decus.png',
    description: '<p>A friend of mine and I hacked this over 24 hours at ICHACK 2015. The idea is quite complex, and I\'ll have to write a proper explanation of it at some point. Basically, I am fed up with pay walls such as the NYT or the WSJ, and this is a proof-of-concept experiment to see if there\'s a better way to pay content creators.</p><p>In the meantime, you can just go and post whatever you like on it.</p><p>The front-end repo is <a href="http://github.com/perpetualjourney/ichack2015-front-end">on my Github.</a></p>',
    link: 'https://ichack.firebaseapp.com/#/',
    btnText: 'Decus Home'
},
{
	title: "Startup Circus",
	subtitle:  "A work in progress.",
	img: 'startup_circus_cover.png',
	description : "<p>Startup Circus is a new concept of careers fair, which is internship focused and targets students in their first year of University.</p><p>The truth is that most STEM graduates (specially from Imperial) will either be swallowed by the world of corporate banking and finance, or end up doing some kind of software related job.</p><p>The idea is that if people get involved in the world of work early on, by the time they graduate there will be no need for careers fairs, because they'll already know where to work.</p>",
	link: 'http://startupcircus.co.uk',
	btnText: 'Launch Website',
	disabled: true
}, 
{
	title: "Internship Presentation",
	subtitle:  "The most important things I have learnt in my internship.",
	img: 'presentation_cover.png',
	description : "<p>This is a presentation I gave at the end of the <a href=\"http://www.joinef.com/founder-school-internship/\" target=\"_blank\">EF Summer Internship Programme</a> 2014.</p><p>This was also a cool opportunity to try a cool javaScript library <a href=\"http://lab.hakim.se/reveal-js/#/\" target=\"_blank\">reveal.js</a>.</p><p><i>This is a presentation where the slides support the speech, and therefore it's quite hard to follow without guidance.</i> <b>But it's very pretty so go on and click.</b></p>",
	link: 'ef_presentation/index.html',
	btnText: 'View Presentation'
}, 
{
	title: "Social Network Analysis",
	subtitle:  "Year One Group Project",
	img: 'social_network_portfolio.png',
	description : "<p>I made this as part of the \"Topics in Computing\" project at Imperial College London. It explains the science between social network phenomena such as influence, clustering and centrality.</p><p>My group and I won the Programme Prize for Best Group Project on Social Network Analysis.</p>",
	link: 'topics/',
	btnText: 'Launch Mini-Site',
    disabled: true
},
{
	title: "Kwittr",
	subtitle:  "Year 2 Human Centered Design project",
	img: 'kwittr_cover.png',
	description : "Kwittr is a proof of concept app that helps users measure and moderate their smoking habit. Caution: heavy emoji use.",
	link: 'http://www.slideshare.net/lorenzop/kwittr-human-centered-design',
	category: 'design',
	btnText: "Presentation on Slideshare"
},
{
	title: "Resident Designer at Wilkinson and Weeks Hall",
	subtitle:  "",
	img: 'wwsquared.png',
	description : "<p>I've been producing print and digital designs for my Hall of Residence for almost a year now.</p><p>It all started with the design of the new unified logo which was adopted as the official logo last year.</p><p>I have particularly enjoyed this because I got to design and shape the identity of this place in which 200+ new students come to live in every year.</p>",
	link: '',
	category: 'design'
}, 
{
	title: "Photography",
	subtitle:  "",
	img: 'photography_cover.png',
	description : "<p>I've been pressing shutter buttons for a fair amount of years and I've got some of my pictures up on flickr.</p><p>I've been interested in taking pictures of works of art, since they are often misrepresented in photography. I find the way we look at screens to be completely opposite to the way we look at art in museums and I've been exploring how the two can meet halfway.</p>",
	link: 'http://flickr.com/lorenzop',
	category: 'design',
	btnText: "Go to Flickr"
},
{
	title: "Presentation Design",
	subtitle:  "A short presentation I gave at the EF Unconference.",
	img: 'pres_design_cover.png',
	description : "<p>People always seem to appreciate my presentations. I have a bunch of <b>FREE</b> tricks to teach that will make any presentation instantly so much better. And I'd like to share them with the world <small>so that I don't have to sit through 40 slides of Comic Sans <i>ever again</i>.</small></p>",
	link: 'presentation-design.html',
	category: 'design',
	btnText: "View Presentation",
    disabled: true
},{
	title: "President, 2015/2016 - Imperial Entrepreneurs",
	subtitle:  "",
	img: 'ice_cover.png',
	description : "I have been elected president of the society for the academic year 2015/2016. I have written a (very controversial) article begging the question \"What is the role of a student entrepreneurship society?\", that upset the business people quite a lot.",
	link: 'https://medium.com/@lorenzopaoliani/what-is-the-role-of-an-entrepreneurship-society-cdb1ff40ded9',
	btnText: 'Read on Medium',
	category: 'else'
},
{
	title: "Hall Senior",
	subtitle:  "Wilkinson & Weeks 2014-2015",
	img: 'senior_cover.png',
	description : "Being on the senior team has been more challenging than I thought it would be. Planning social life for 200+ students and managing your own student life is a task and a half.",
	link: '',
	category: 'else'
}
];