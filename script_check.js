//couldn't solve the error of this one
/*var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1Ijoic2h1aHNpZW4iLCJhIjoiY2psa29vYXVsMG93NzNwbzVremd1amFudSJ9.T9flJFqLKlNmVCmlFv6CWA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);*/

// 建立 Leaflet 地圖
var map = L.map('mapid');

// 設定經緯度座標
map.setView(new L.LatLng(22.997500, 120.221403), 16);

// 設定圖資來源
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16});
map.addLayer(osm);