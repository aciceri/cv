module.exports = {
    name: 'Andrea Ciceri',

    title: 'Enthusiast',

    facts: {
	'Homepage': `
<a href="https://aciceri.dev">
<i class="fa fa-home" aria-hidden="true"></i>
aciceri.dev
</a>
`,
	'Email': `
<a href="mailto:andrea.ciceri@autistici.org"><i class="fa fa-envelope" aria-hidden="true"></i>andrea.ciceri@autistici.org</a>
`,
	'Linkedin': `
<a href="https://www.linkedin.com/in/andreaciceri/"><i class="fa fa-linkedin" aria-hidden="true"></i>andreaciceri</a>
`,
	'GitHub': `
<a href="https://github.com/aciceri"><i class="fa fa-github" aria-hidden="true"></i>aciceri</a>`
    },

    experiences: [
	{
	    title: 'MLabs',
	    date: '2022 &hyphens; now',
	    contents: `
Managing infrastructure (mainly for DevOps) both for internal needs and for customers. Mainly using Nix to manage infrastructures as code and writing internal tooling to work with Haskell, Cardano, PureScript and Nix.
Also worked on the Nix interpreter and on Hydra (Nix CI) as part of Cardano Catalyst proposals.
[mlabs.city](https://mlabs.city)
`
},
	{
	    title: 'NixOS Ocean sprint',
	    date: '2022 &hyphens; now',
	    contents: `
Hacked 1 week on Nix with fantastic people on the fantastic island Lanzarote: [https://oceansprint.org](https://oceansprint.org)
`
},
  {
	    title: 'BeatData',
	    date: '2020 &hyphens; now',
	    contents: `
I've designed and developed several Solidity smart contracts, often integrated with wider protocols (DeFI, NFTs, DAOs, etc..)  [https://beatdata.com](https://beatdata.com). Also extensevily worked with React (both Typescript and Javascript) and Django (Python).
`
	}, {
	    title: 'Lunik Cineforum',
	    date: '2019 &hyphens; now',
	    contents: `
I hold the role of vicepresident in the Lunik Cineforum association, a local cineforum. I'm also the technical manager and the creator of the website: [https://lunik.it](https://lunik.it)
`
	}, {
	    title: 'Cooperativa Edificatrice Cernuschese',
	    date: '2017 &hyphens; now',
	    contents: `
I'm a member of the Board of Directors of a local building cooperative, in addition to carrying out the most disparate tasks I'm also the tecnical manager and the creator of the website: [https://edifcernusco.it](https://edifcernusco.it)
`
	}, {
	    title: 'Playground',
	    date: 'June, 2014',
	    contents: `
I took part in an internship lasting one month at Playground ([https://playground.it](https://playground.it)) where I started to approach the web developement.
`
	}, {
	    title: 'Connect.ie',
	    date: 'June, 2014',
	    contents: `
I took part in this internship at Connects.ie (https://www.connect.ie/), the "Ireland's oldest independent service provider", where I developed a web scraping bot. Duration of the experience: two weeks.
`
	}
    ],

    projects: [
	{
	    title: 'Materia DeX',
	    contents: `
An open source and innovative *Decentralized Exchange* living on *Ethereum*, I mainly wrote the *Solidity* contracts and helped with the frontend integration.
`
	}, {
	    title: 'Cooper algorithm',
	    contents: `
Implemented in *C* as future part of *MCMT*, a model checker for infinite state systems based on the integration of Satisfiability Modulo Theories (SMT) solving and backward reachability. [Paper](https://raw.githubusercontent.com/aciceri/cooper/master/doc/elaborato.pdf).`
	}, {
	    title: 'LOGO interpreter',
	    contents: `
Simple proof of concept for an University course, written in *Python*.`
	}, {
	    title: 'BrainFuck compiler',
	    contents: `
Realized as divertissement, this small and naive compiler is written in Python. It parses the BrainFuck estoric language generating valid Python bytecode.
Here the Gist: [https://git.io/JYa2x](https://git.io/JYa2x)`
	}, {
	    title: 'My blog',
	    contents: `
A simple container for my thoughts and experiments, having no requirements I have the maximum freedom in the technologic choises. The contents are versioned using Git and the generation is done using *Haskell* and *Nix*.
Here the GitHub repository: [https://github.com/aciceri/blog](https://github.com/aciceri/blog)`
	}, {
    title: 'My keyboard',
    contents: `
I've built a split keyboard, 3d-printing the case and programming a custom firmware (using QMK): [https://github.com/aciceri/lily58](https://github.com/aciceri/lily58)
`
  }

    ],
    
    skills: [
	{
	    title: 'Languages',
	    contents: `
I've a deep *Nix* knowledge since I had to work on its codebase several time.
For blockchain develoment I feel confident with *Solidity* (also low-level EVM stuff with embedding yul) and I've a basic knowledge about Pluto.
I did web development in the past using different languages like TypeScript and JavaScript for frontend (mainly React) and Python and Dotnet for the backend.
I'm a big Lisp-like languages fan (I use Emacs Lisp frequently), I can work on codebases written in C, C++ and Java (I could be a little rusty and not efficient).
I'm a big fan of functional programming, currently trying to improve my Haskell. I would like to study Agda and Idris in a near future.
`
	}, {
	    title: 'Techonologies',
	    contents: `
I've a long experience with *POSIX* systems and I'm a *Nix(Os)* enthusiast of which I love its declarativeness and reproducible builds.
My appreciation of decentralized systems led me to study of blockchain protocols like *Ethereum* and *Cardano* and also other decentralized solutions like *IPFS*, allowing me to work in the context of *Dapps* and *Decentralized Finance*.
`
	}, {
	    title: 'Softwares',
	    contents: `
I've been using GNU/Linux for years, I'm comfortable with the shell and I'm used to customize my environment for greater efficiency.
Moreover I extensively use *Emacs*, not just as a text editor. Other softwares I've dealt with in the past, in no particular order, includes *Terraform*, *Nomad*, *Hardhat*, *Gimp*, *Blender*, *Matlab*, *LaTeX*, *MySQL*, *SQLite*, *ANTLR* and *Arduino*.
`
	}
    ],
    
    interests: `
As person who studied math and computer science I enjoy analyzing and formalizing problems and puzzles looking for optimal solutions, this applies to every aspect of my life, even my personal life.
When I was younger I studied music, and even if now only as a listener, I continue to marvel at its expressive possibilities in all its genres. I made this interest collide with my attitude tried programming simple sequencers and synthesizers. 
I'm fond of science fiction books but sometimes I also enjoy the great classics, I also like Cinema. 
It's been a few years that I run and I've even partecipated in some races, I think that devote few hours a week to my pshysical well-being allows for a greater mental efficiency.
`,
    
    languages: `
I 'm native Italian speaker and I've a solid command of English, in both written and spoken language. As developer I use to read and write technical documents and I actively partecipate in several online community.
In the last year I've also attended severval conferences in which I had the opportunity to improve my ability to hold face-to-face discussions, I'm extremely prone to improve my fluency.
`,
  education: `I've studied Math at the "La Statale" University of Milan, futhermore I've an high school diploma in information technology and telecommunications. But I'm also quite self-taught.`
}
