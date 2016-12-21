// JavaScript File

$(document).ready(function() {

   
    $("#search-btn").click(function(){
        var name=$("#search-query").val()
        console.log(name)
        
           $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+name+"&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });
    });
        
 
    
 $("#clear-btn").click(function(){
     $("#search-query").val('')
    
    
    
 })    
    
    
    
    
    
    
});