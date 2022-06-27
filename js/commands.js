
var linkedin = "https://www.linkedin.com/in/philippwulff/";
var github = "https://github.com/philippwulff";
var email = 'mailto:philipp.wulff@tum.de';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am Philipp, a student and software engineer, who enjoys building robots, AI, 
websites like this one and other cool projects that are useful to me or others
After graduating with a Bachelor's in Mechanical Engineering at RWTH Aachen I 
began my Master's in Robotics, Cognition, Intelligence at the Technical University 
of Munich. I am particularly interested in Deep Learning and have gained 
professional working experience in this field in a Fortune 500 company.`,
  "<br>"
];

// links = [
//   "<br>",
//   'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/philippwulff' + "</a>",
//   'github         <a href="' + github + '" target="_blank">github/philippwulff' + "</a>",
//   "<br>"
// ];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">linkedin/philippwulff</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">linkedin/philippwulff</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "Work in progress... most projects are still offline, on GitHub or confidential.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  ...repos,
];

// help = [
//   "<br>",
//   '<span class="command">about</span>        Who is Philipp?',
//   '<span class="command">links</span>        Display my links',
//   '<span class="command">projects</span>     View coding projects',
//   '<span class="command">history</span>      View command history',
//   '<span class="command">help</span>         You obviously already know what this does',
//   '<span class="command">email</span>        Do not email me',
//   '<span class="command">clear</span>        Clear terminal',
//   '<span class="command">banner</span>       Display the header',
//   '<span class="command">theme</span>        Change the theme',
//   '<span class="command">[tab]</span>        Trigger completion',
//   "<br>",
//   'Also try other commands that you know. I may have included some easter eggs 😆.',
//   "<br>",
// ];

help = [
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">about</span></td><td>You obviously already know what this does</td></tr>
  </table>`,

  'Also try other commands that you know. I may have included some easter eggs 😆.',
  "<br>",
];

banner = [
  "<br>",
  "______________ _______________                      ___       __      ____________________",
  "___  __ \\__  /____(_)__  /__(_)_______________      __ |     / /___  ____  /__  __/__  __/",
  "__  /_/ /_  __ \\_  /__  /__  /___  __ \\__  __ \\     __ | /| / /_  / / /_  /__  /_ __  /_ ", 
  "_  ____/_  / / /  / _  / _  / __  /_/ /_  /_/ /     __ |/ |/ / / /_/ /_  / _  __/ _  __/",  
  "/_/     /_/ /_//_/  /_/  /_/  _  .___/_  .___/      ____/|__/  \\__,_/ /_/  /_/    /_/",     
  "                              /_/     /_/",                                                 
  "<br>",
];
// banner = [
//   "<br>",
//   "██████╗ ██╗  ██╗██╗██╗     ██╗██████╗ ██████╗     ██╗    ██╗██╗   ██╗██╗     ███████╗███████╗",
//   "██╔══██╗██║  ██║██║██║     ██║██╔══██╗██╔══██╗    ██║    ██║██║   ██║██║     ██╔════╝██╔════╝",
//   "██████╔╝███████║██║██║     ██║██████╔╝██████╔╝    ██║ █╗ ██║██║   ██║██║     █████╗  █████╗  ",
//   "██╔═══╝ ██╔══██║██║██║     ██║██╔═══╝ ██╔═══╝     ██║███╗██║██║   ██║██║     ██╔══╝  ██╔══╝  ",
//   "██║     ██║  ██║██║███████╗██║██║     ██║         ╚███╔███╔╝╚██████╔╝███████╗██║     ██║     ",
//   "╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝╚═╝     ╚═╝          ╚══╝╚══╝  ╚═════╝ ╚══════╝╚═╝     ╚═╝     v1.0",   
//   "<br>",
// ];
// banner = [
//   `ooooooooo.   oooo         o8o  oooo   o8o                             oooooo   oooooo     oooo             oooo   .o88o.  .o88o. `,
//   `\`888   \`Y88. \`888         \`\"\'  \`888   \`\"\'                              \`888.    \`888.     .8\'              \`888   888 \`\"  888 \`\" `,
//   `${empty}888   .d88\'  888 .oo.   oooo   888  oooo  oo.ooooo.  oo.ooooo.         \`888.   .8888.   .8\'   oooo  oooo   888  o888oo  o888oo  `,
//   `${empty}888ooo88P\'   888P\"Y88b  \`888   888  \`888   888\' \`88b  888\' \`88b         \`888  .8\'\`888. .8\'    \`888  \`888   888   888     888    `,
//   `${empty}888          888   888   888   888   888   888   888  888   888          \`888.8\'  \`888.8\'      888   888   888   888     888    `,
//   `${empty}888          888   888   888   888   888   888   888  888   888           \`888\'    \`888\'       888   888   888   888     888    `,
//   `o888o        o888o o888o o888o o888o o888o  888bod8P'  888bod8P'            \`8\'      \`8\'        \`V88V\"V8P\' o888o o888o   o888o   `,
//   `${empty}                                           888        888                                                                       `,
//   `${empty}                                          o888o      o888o                                                                      `,                                                                                                                                    
// ];
// banner = [
// `${empty}   ___  __   _ ___             _      __     ________ `,
// `${empty}  / _ \\/ /  (_) (_)__  ___    | | /| / /_ __/ / _/ _/`,
// `${empty} / ___/ _ \\/ / / / _ \\/ _ \\   | |/ |/ / // / / _/ _/ `,
// `${empty}/_/  /_//_/_/_/_/ .__/ .__/   |__/|__/\\_,_/_/_//_/   `,
// `${empty}               /_/  /_/                              `,
// ]

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd", "vi", "vim", "emacs", "sudo",
];

allArgs = [
  "ls", "set", "random", "coral", "midnight", "chocolate",
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};