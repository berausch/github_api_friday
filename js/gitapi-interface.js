var allRepos = [];
exports.getRepos = function(user, apiKey){
  $.get('https://api.github.com/users/' + user +'?access_token=' + apiKey).then(function(response){
    console.log(response);
    var profileName = response.name;
    var bio = response.bio;
    $("#outputArea").show();
    $("#outputLeft").empty().append("<img id='profilePic' src=" + response.avatar_url + ">");
    $("#outputRight").empty().append("<h2><a href=" + response.html_url + ">" + response.login + "</a></h2>" );
    if(profileName !== null){
      $("#outputRight").append("<h3 class='bold'>" + profileName + "</h3><br>" );
    } else {
      $("#outputRight").addClass("space");
    }
    if(bio !== null){
      $("#outputRight").append("<h4><span class='bold'>Bio: </span>" + bio + "</h4><br>" );
    }
    $("#outputRight").append('<h4>followers:<a href=' + response.followers_url +'> ' + response.followers + '</a>     |     following:<a href='+ response.following_url + '> ' + response.following +'</h4>');
    $("#output").empty();
    $.get(response.repos_url + '?access_token=' + apiKey).then(function(response2){
      console.log(response2);
      for(var i =0; i<response2.length; i++){
      var repo = [];
      var name = response2[i].name;
      var link = response2[i].html_url;
      var createDate = response2[i].created_at.slice(0,10);
      var description = response2[1].description;
      if(description === "")
      {
        description = "N/A";
      }
      $("#output").append('<div class="row"><div class="col-md-2"></div><div class="col-md-3" class="repoOutputLeft"><p><a href=' + link +'>' + name + '</a></div> <div class="col-md-2" class="repoOutputMiddle">'+ createDate + '</p></div><div class="col-md-3" class="repoOutputRight">'+ description + '</p></div><div class="col-md-2"></div></div>');
      }

    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};




exports.allRepos = allRepos;
