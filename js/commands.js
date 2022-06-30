
var linkedin = "https://www.linkedin.com/in/philippwulff/";
var github = "https://github.com/philippwulff";
var email = 'mailto:philipp.wulff@tum.de';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am Philipp, a student and software engineer, who enjoys building robots, AI, 
websites like this one and other cool projects that are useful to me or others.`,
  `After graduating with a Bachelor's in Mechanical Engineering at RWTH Aachen I 
began my Master's in Robotics, Cognition, Intelligence at the Technical University 
of Munich. I am particularly interested in Deep Learning and have gained 
professional working experience in this field in a Fortune 500 company.`,
  "<br>",
];

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

help = [
  'Use these commands to navigate my web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is Philipp?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the header</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
  "<br>",
  'Also try other commands that you know. I may have included some easter eggs 😆.',
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
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Welcome to my personal website.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd", "vi", "vim", "emacs", "sudo", "gui",
];

allArgs = [
  "ls", "set", "random", ...themes,
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};