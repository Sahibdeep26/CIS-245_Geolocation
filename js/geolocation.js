      
       function getLocation() {
      var map, infoWindow;
     
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 28.341, lng: 77.997},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);

            output = document.getElementById("output");
            tbody = document.createElement("tbody");
            var data = [];
            var message="Geolocation is enabled by your browser"
            data.push(pos.lat);
            data.push(pos.lng);
            data.push(message);
            tr = document.createElement("tr");
            for(i=0;i<data.length;++i){
            td=document.createElement("td");
            td.setAttribute("class","text-center");
            cell=document.createTextNode(data[i]);
            td.appendChild(cell);
            tr.appendChild(td);    
        }
    tbody.appendChild(tr);
    output.appendChild(tbody);



          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }