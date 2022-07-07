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
    apirepo = `https://api.github.com/users/${user}/repos`;
    html_table = `<table>`;

    //  $.getJSON is async and does not work here
    $.ajax({
        url: apirepo,
        dataType: 'json',
        async: false,
        success: function(json) {
            json.forEach(repo => {
                if (repo.description == null) {
                    return;        // this is equivalent of 'continue' for jQuery loop
                }

                html_table += `<tr><td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>`;

                descr_txt = repo.description;
                if (repo.stargazers_count > 0) {
                    descr_txt += ` (${repo.stargazers_count}⭐️ on <a href="${repo.html_url}" target="_blank">GitHub</a>)`;
                }

                html_table += `<td>${descr_txt}</td></tr>`;
            })
        }
    })
    return html_table + `</table>`;
}

const repos = getReposList("philippwulff");
