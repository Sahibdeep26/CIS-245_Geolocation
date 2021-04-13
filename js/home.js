function geoinfo() {

    var request = new XMLHttpRequest();
    var url = "https://www.ipinfo.io/json";
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // your code goes here
            var response = JSON.parse(request.responseText);
            var ip = response.ip;
            var city = response.city;
            var region = response.region;
            var country = response.country;
            var location = response.loc;
            var mid;
            var latitude = "";
            var longitude = "";
            for (var i = 0; i < location.length; i++) {
                if (location[i] == ",") {
                    mid = i;
                }
            }
            for (var i = 0; i < mid; i++) {
                latitude += location[i];
            }
            mid++;
            for (var i = mid; i < location.length; ++i) {
                longitude += location[i];
            }

            var data = [];
            data.push("Latitude");
            data.push(latitude);
            data.push("Longitude");
            data.push(longitude);
            data.push("IP");
            data.push(ip);
            data.push("City");
            data.push(city);
            data.push("Region");
            data.push(region);
            data.push("Country");
            data.push(country);
            var ipinfo = document.getElementById("ipinfo");
            var tbody = document.createElement("tbody");
            var color = ["bg-info", "bg-primary", "bg-success", "bg-warning", "bg-danger"]

            for (var i = 0; i < data.length; i++) {
                tr = document.createElement("tr");
                var j = 0;
                var random = Math.floor(Math.random() * 5);
                for (j = 0; j < 2; j++) {
                    td = document.createElement("td");
                    td.setAttribute("class", "text-center " + color[random]);
                    cell = document.createTextNode(data[i]);
                    td.appendChild(cell);
                    tr.appendChild(td);
                    i++;
                }
                tbody.appendChild(tr);
                i--;
            }
            ipinfo.appendChild(tbody);
        }
    };
    request.open('Get', url, true);
    request.send();


}