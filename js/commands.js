
// var youtube = "https://www.youtube.com/fknight/";
// var twitter = "https://www.twitter.com/forrestpknight/";
var password = "fkcodes";
var linkedin = "https://www.linkedin.com/in/philippwulff/";
var github = "https://github.com/philippwulff";
var email = 'mailto:philipp.wulff@tum.de';

about = [
  "<br>",
  "Hi there, 👋🏽",
  "I am Philipp, a student and software engineer, who enjoys building robots, AI,", 
  "websites like this one and other cool projects that are useful to me or others.",
  "After graduating with a Bachelor's in Mechanical Engineering at RWTH Aachen I", 
  "began my Master's in Robotics, Cognition, Intelligence at the Technical University", 
  "of Munich. I am particularly interested in Deep Learning and have gained", 
  "professional working experience in this field in a Fortune 500 company.",
  "<br>"
];

links = [
  "<br>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/philippwulff' + "</a>",
  'github         <a href="' + github + '" target="_blank">github/philippwulff' + "</a>",
  "<br>"
];

projects = [
  "<br>",
  "Work in progress... most projects are still offline, on GitHub or confidential.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  ...repos,
];

help = [
  "<br>",
  '<span class="command">about</span>          Who is Philipp?',
  '<span class="command">links</span>          Display my links',
  // '<span class="command">secret</span>         Find the password',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
  'Also try other commands that you know. I may have included some easter eggs 😆.',
  "<br>",
];

banner = [
  "<br>",
  "██████╗ ██╗  ██╗██╗██╗     ██╗██████╗ ██████╗     ██╗    ██╗██╗   ██╗██╗     ███████╗███████╗",
  "██╔══██╗██║  ██║██║██║     ██║██╔══██╗██╔══██╗    ██║    ██║██║   ██║██║     ██╔════╝██╔════╝",
  "██████╔╝███████║██║██║     ██║██████╔╝██████╔╝    ██║ █╗ ██║██║   ██║██║     █████╗  █████╗  ",
  "██╔═══╝ ██╔══██║██║██║     ██║██╔═══╝ ██╔═══╝     ██║███╗██║██║   ██║██║     ██╔══╝  ██╔══╝  ",
  "██║     ██║  ██║██║███████╗██║██║     ██║         ╚███╔███╔╝╚██████╔╝███████╗██║     ██║     ",
  "╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝╚═╝     ╚═╝          ╚══╝╚══╝  ╚═════╝ ╚══════╝╚═╝     ╚═╝     v1.0",   
  "<br>",
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">Type </span> <span class=\"command\">'help'</span><span class=\"color2\"> to see a list of available commands.</span>",
  "<br>",
];

gui = [
  // TODO
];