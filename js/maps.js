var nav = navigator.geolocation; 
var map = document.getElementById('rndmmap');
var  coords = 17;


function generateRandomCoordinates() {

    var data = new Array();

    for (i = 0; i < coords; i++) {

        // LONGITUDE -180 to + 180
        var longitude = (Math.random() * 180).toFixed(3);
        var longneg = Math.round(Math.random());
        if (longneg == 0) {
            longitude = longitude * -1;
        }

        // LATITUDE -90 to +90
        var latitude = (Math.random() * 90).toFixed(3);
        var latneg = Math.round(Math.random());
        if (latneg == 0) {
            latitude = latitude * -1;
        }

        data.push([latitude, longitude]);
    }


    var table = document.getElementById("rndm");
    var styles = ["active", "success", "danger", "warning"];
    var tbody = document.createElement("tbody");
    for (var i = 1; i < data.length; i++) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", styles[i % styles.length]);
        tr.onmouseover = displayMap;
        for (var j = 0; j < 2; j++) {
            var td = document.createElement("td");
            td.setAttribute("class", "text-center");
            var cell = document.createTextNode(data[i][j]);
            td.appendChild(cell);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }
}


    function displayMap(){
       var lat = Number(this.children[0].textContent);
      var lon =Number(this.children[1].textContent);
     
      var mapOptions ={
                    center: new google.maps.LatLng(lat,lon),
                    zoom: 6,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
               new google.maps.Map(map,mapOptions);
    }