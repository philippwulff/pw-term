// helper function
function compare(a, b) {
    if (a.watchers > b.watchers) {
        return -1;
    };
    if (a.watchers < b.watchers) {
        return 1;
    };
    return 0;
};

function getReposList(user) {
    var reposTxtList = [];
    var indent = 25;
    var maxLen = 60
    apirepo = `https://api.github.com/users/${user}/repos`;
    //  $.getJSON is async and does not work here
    $.ajax({
        url: apirepo,
        dataType: 'json',
        async: false,
        //data: myData,
        success: function(json) {
            json.forEach(repo => {
                if (repo.description == null) {
                    return;        // this is equivalent of 'continue' for jQuery loop
                }
                var end_str = "  (";
                if (repo.stargazers_count > 0) {
                    end_str += `${repo.stargazers_count}⭐️ on `;
                }
                end_str +=  `<a href="${repo.html_url}" target="_blank">GitHub</a>)`;

                var d1 = "";
                var d2 = "";
                if (repo.description.length > maxLen) {
                    repo.description.split(" ").forEach( w => {
                        if (d1.length + w.length < maxLen){
                            d1 += " " + w;
                        }
                        else {
                            d2 += " " + w;
                        }
                    })
                    d1 = " ".repeat(indent - repo.name.length - 1) + d1;
                    d2 = " ".repeat(indent - 1) + d2 + end_str;
                }
                else {
                    d1 = " ".repeat(indent - repo.name.length) + repo.description + end_str;
                }            
                reposTxtList.push(`<a href="${repo.html_url}" target="_blank">${repo.name}</a>` + d1);
                if (d2 != null) {
                    reposTxtList.push(d2);
                }
            })
        }
    })
    return reposTxtList;
}

const repos = getReposList("philippwulff");
