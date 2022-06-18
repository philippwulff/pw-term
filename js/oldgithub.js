// async function getUserRepos(username) {
//    const repos = await fetch(`https://api.github.com/users/${username}/repos`);
//    return repos;
// }

// getUserRepos("[USERNAME]")
//       .then(repos => {
//            console.log(repos);
//  }); 


//  var repos = getUserRepos("philippwul");

//  document.write(repos);
//  document.write("1111");

function getRepoList(user) {
   var requestURL = 'https://api.github.com/users/' + user + '/repos';
   var request = $.get(requestURL, function() {})
      .done(function () {
         request = request.responseJSON;
         for (i = 0; i < request.length; i++) {
            // variables from api request
            var repo_url = request[i].html_url;
            var username = request[i].owner.login;
            var repo_name = request[i].name;
            var repo_description = request[i].description;
            var repo_language = request[i].language;
            var repo_stars = request[i].stargazers_count;
            var repo_forks = request[i].forks;
         }
      });
   return request;
}


document.write(genRepo("philippwulff"));
document.write("1");

