var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/gitapi-interface.js').getRepos;


$(document).ready(function() {

$("#gitUserForm").submit(function(event){
  event.preventDefault();
  var user = $("#gitUser").val();
  getRepos(user, apiKey);

});
});
