/* global $ */

$(document).ready(function() {

//   $.getJSON(
     
//       "https://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC",
     
     
//       function(response) {
//         console.log(response);
//         $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
//       });


      $("#submit").click(function() {
        var storesearch = $("#search").val();
        //build url here
        // "https://api.giphy.com/v1/gifs/search?q=" + storesearch + "&api_key=dc6zaTOxFJmzC"

        var url = "https://api.giphy.com/v1/gifs/search?q=" + storesearch + "&api_key=dc6zaTOxFJmzC"
        
        $.getJSON(url, function(response) {
            console.log(response);
            
            var htmlString = "<img src=" + response.data[0].images.fixed_width_downsampled.url + ">";
            htmlString += "<img src=" + response.data[1].images.fixed_width_downsampled.url + ">";
            $("#list").html(htmlString);

            
        });
//        var resetButton = document.getElementbyId('reset');
// resetButton.onclick= reloadPage;

// function reloadPage(){
//   window.location.reload();
// }
      });
   });