// Get playlists 


          $.ajax({
                url: 'https://api.spotify.com/v1/me/playlists',
                type: 'GET',
                headers: {
                  'Authorization' : 'Bearer ' + access_token
                },
                contentType:"application/json",
                success: function(response) {   
                  var items = response.items;
                  for(var i=0; i<items.length; i++) {
                    outputToDiv(items, i, "#showPlaylists");
                  }
                }
          });


           function outputToDiv(items,i,id) {
            type ='playlist';
           if(items[i].images[0]) {
           $(id).append(        
                "<div class='grid-item'>" +
                    "<div class='pl-img-container'>" +
                        "<img class='pl-img' src=" + items[i].images[0].url + "> </a>" +
                        "<div class='pl-overlay'>" +
                          '<button id="playlist' + i +'" onclick="playThis(\'' + i  +'\',\'' + type + '\')" class="over-text" value="'+items[i].uri+'"> Play </button>' +
                          '<button id="pl'+i+'" onclick="showSongs(\'' + i  +'\',\'' + type + '\')" class="over-text2" data-id="'+ items[i].id + '" data-name="' +items[i].name+'">Show songs</button>' +
                          '<button id="playlist-btn'+i+'" onclick="analyzeSeveralTracks(\'' + i  +'\',\'' + type + '\')" class="over-text3" data-id="'+ items[i].id +'" data-name="' +items[i].name+'">Features</button>' +

                         "<div id='myModal' class='modal'>"+

                           "<div class='modal-content'>"+
                             "<span class='close'>&times;</span>"+
                             "<p id='modal-text'></p>"+
                           "</div>"+
                         "</div>"+
                       "</div>"+  

                    
                    "<p>" + items[i].name + "</p>" +
                "</div>"
                ); 
           // No playlist cover image
           } else {
           $(id).append(              
                "<div class='grid-item'>" +
                  "<a href=" + items[i].uri + "> <h2> No playlist image </h2> </a>" +
                  "<p>" + items[i].name + "</p>" +
                "</div>"
                ); 
           }      
          }
          