var allRepos = [];
exports.getRepos = function(user, apiKey){
  $.get('https://api.github.com/users/' + user +'?access_token=' + apiKey).then(function(response){
    console.log(response);
    allRepos.push(response.avatar_url);
    $("#outputArea").show();
    $("#outputLeft").empty().append("<img id='profilePic' src=" + response.avatar_url + ">");
    $("#outputRight").empty().append("<h2>Username: <a href=" + response.html_url + ">" + response.login + "</a></h2>" )
    $("#outputRight").append('<h4>followers:<a href=' + response.followers_url +'> ' + response.followers + '</a>     |     following:<a href='+ response.following_url + '> ' + response.following +'</h4>')
    $("#output").empty();
    $.get(response.repos_url + '?access_token=' + apiKey).then(function(response2){
      console.log(response2);
      for(var i =0; i<response2.length; i++){
      var repo = [];
      var name = response2[i].name;
      var link = response2[i].html_url;
      var createDate = response2[i].created_at;
      repo.push(name, link, createDate);
      allRepos.push(repo);
      $("#output").append('<div class="row"><div class="col-md-3"></div><div class="col-md-3" class="repoOutputLeft"><p><a href=' + link +'>' + name + '</a></div> <div class="col-md-3" class="repoOutputRight">|   '+ createDate + '</p></div><div class="col-md-3"></div></div>');
      }

    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};




exports.allRepos = allRepos;
