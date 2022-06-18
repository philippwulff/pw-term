var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!😠",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(" > " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  var cmdAll = cmd.split(" "); 
  var cmd = cmdAll[0];
  var args = "";
  if (cmdAll.length > 1) {
    args = cmdAll.slice(1).join(" ");
  }
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "about":
      loopLines(about, "color2 margin", 80);
      break;
    case "links":
      loopLines(links, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:philipp.wulff@tum.de">philipp.wulff@tum.de</a>...', "color2", 80);
      newTab(email);
      break;
    // socials
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    // functional commands
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "theme":
      break;
    case "echo":
      addLine(`${args}`, "color2", 80);
      break;
    // fun commands
    // case "secret":
    //   liner.classList.add("password");
    //   pw = true;
    //   break;
    // case "password":
    //   addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂 </span>", "error", 100);
    //   break;
    case "ls":
      addLine("<span class=\"inherit\">some</span>", "color2", 80);
      addLine("<span class=\"inherit\">fake</span>", "color2", 80);
      addLine("<span class=\"inherit\">files</span>", "color2", 80);
      break;
    case "cd":
      // check for file like path given in args
      addLine("<span class=\"inherit\"></span>", "color2", 80);
      break;
    case "vi":
      addLine("<span class=\"inherit\">why use vi? Try <span class=\"command\">'vim'</span> instead</span>", "color2", 80);
      break;
    case "vim":
      addLine("<span class=\"inherit\">why use vim? Try <span class=\"command\">'emacs'</span> instead</span>", "color2", 80);
      break;
    case "emacs":
      addLine("<span class=\"inherit\">really? emacs? You should be using <span class=\"command\">'vim'</span></span>", "color2", 80);
      break;
    case "sudo":
      addLine(`<span class=\"inherit\">Permission denied: unable to run '${args}' as root.</span>`, "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1); 
      break;
    case "":
      addLine("", "color2", 0);
      break;
    default:
      addLine(`<span class=\"inherit\">Command not found: ${cmd}. Type <span class=\"command\">'help'</span> to see available commands.</span>`, "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

