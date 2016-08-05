var apiKey = require('./../.env').apiKey;


$(document).ready(function() {

$("#gitUserForm").submit(function(event){
  event.preventDefault();
  console.log(apiKey);
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
  });

});
});
