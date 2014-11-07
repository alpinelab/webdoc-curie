// Dependencies
var fs = require('fs');
var url = require('url');
var http = require('http');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var ids = ["110470750", "110470750", "109821776", "109821775", "109821777", "109821778", "109823311", "109822028", "109823311", "109822169", "109822171", "110338626", "109823396", "109823398", "109823400", "109823401", "109823404", "109824852", "109824849", "109824975", "109824976", "109824978", "109824977", "109822164", "109822165", "109822167", "110338954", "109825282", "109825420", "109825603", "109825604", "109825605", "109825606", "109825607", "109834397", "109834399", "109834401", "109834402", "109834405", "109834539", "109825421", "109825422", "110338853", "109834612", "110576486", "109834722", "109834723", "109834725", "109834724", "109834971", "109834968", "109834969", "109834970", "109913563", "109913564", "109913565", "109913566", "109913567", "109913662", "109913663", "109913664", "109835176", "109835177", "109835179", "110338766", "109836792", "109836791", "109836793", "109838364", "109838365", "110339033", "109838488", "109838687", "109838688", "109838689", "109838539", "109838537", "110645678", "109839118", "109839117", "109839120", "109839119", "109839286", "109839285", "110645482", "110339082", "110339083"]

// App variables
var DOWNLOAD_DIR = './vimeo_thumbnail/';

// var file_url = "http://vimeo.com/api/v2/video/110645678.json";

var thumbnail_url = function(response) {
  var res = JSON.parse(response);
  var url = res[0]["thumbnail_small"];
  var title = res[0]["title"];
  var tmp = url.split('_');
  var url = tmp[0] + "_1280x720.jpg"
  download_thumbnail(url, title);
};

var getData = function(file_url) {
  var http = require('http');
  var buf = [];

  var options = {
      host: url.parse(file_url).host,
      port: 80,
      path: url.parse(file_url).pathname
  };

  callback = function(response) {

    response.on('data', function (chunk) {
      buf.push(chunk);
    });

    response.on('end', function () {
      payload = buf.join('');
      thumbnail_url(payload);
    });
  }
  var req = http.request(options, callback).end();
};

var download_thumbnail = function(file_url, title) {
  var options = {
      host: url.parse(file_url).host,
      port: 80,
      path: url.parse(file_url).pathname
  };

  var file = fs.createWriteStream(DOWNLOAD_DIR + title + ".jpg");

  http.get(options, function(res) {
    res.on('data', function(data) {
      file.write(data);
      }).on('end', function() {
        file.end();
        console.log(title + ' downloaded to ' + DOWNLOAD_DIR);
      });
    });
  };

for(var i = 0; i < ids.length; i++) {
  getData("http://vimeo.com/api/v2/video/" + ids[i] + ".json");
}
