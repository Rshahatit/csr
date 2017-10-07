var http = require("https");
var madeMoney = false;
var options = {
  "method": "GET",
  "hostname": "www.blackrock.com",
  "port": null,
  "path": "/tools/hackathon/performance?identifiers=AAPL",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "e55ccf03-8ef8-2fe4-3068-ca5768c0a5a8"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    body = JSON.parse(body.toString());
    percentReturned = body.resultMap.RETURNS[0].latestPerf.threeMonth;
    if (percentReturned > 0.10) {
      madeMoney = true;
    }
  });
});

req.end();

var json1 = {
            "items": [
                        {
                          "id": "Y2lzY29zcGFyazovL3VzL1JPT00vNGIxOTMzMDAtYWI5Yy0xMWU3LThmN2ItMjUzMzAzZDc5MDE3",
                          "title": "Remington Campbell, Rami Shahatit + 1 other",
                          "type": "group",
                          "isLocked": false,
                          "lastActivity": "2017-10-07T20:37:50.216Z",
                          "creatorId": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8wNzUyNzRhZi0wYzhlLTRlZmYtOGQ3My1hNTRhOTMxOTA4YjU",
                          "created": "2017-10-07T20:15:42.128Z"
                        }
                      ]
          };
var roomID = json1.items[0]["id"];
var json2 =
{
  "id": roomID,
  "title": "Remington Campbell, Nina Orellana + 1 other",
  "type": "group",
  "isLocked": false,
  "sipAddress": "88460590383@meet.ciscospark.com",
  "lastActivity": "2017-10-07T20:37:50.216Z",
  "creatorId": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8wNzUyNzRhZi0wYzhlLTRlZmYtOGQ3My1hNTRhOTMxOTA4YjU",
  "created": "2017-10-07T20:15:42.128Z"
};

var sipAddress = json2.sipAddress;

var url = "https://web.ciscospark.com/rooms/joinsip/" + sipAddress
console.log(url)

// if (madeMoney) {
//   var http = require("https");

//   var options = {
//     "method": "POST",
//     "hostname": "api.sparkpost.com",
//     "port": null,
//     "path": "/api/v1/transmissions?num_rcpt_errors=3",
//     "headers": {
//       "content-type": "application/json",
//       "accept": "application/json",
//       "authorization": "f43a7b6e7870747f3e505f7dd0c0f687a95a73cd",
//       "cache-control": "no-cache",
//       "postman-token": "5f3acf49-a041-348f-941e-d5c3d4bc348e"
//     }
//   };

//   var req = http.request(options, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     res.on("end", function () {
//       var body = Buffer.concat(chunks);
//       console.log(body.toString());
//     });
//   });

//   req.write(JSON.stringify({ campaign_id: 'postman_inline_both_example',
//     recipients: 
//      [ { address: 'ashahatit@yahoo.com' },
//        { address: 'ninaorellana23@berkeley.edu' },
//        { address: 'shahatit.rami@gmail.com' },
//        { address: 'parsa.attari@berkeley.edu' } ],
//     content: 
//      { from: 
//         { email: 'MamaWeMadeIt@celebratestockreturn.com',
//           name: 'Cal Hacks Investment Group' },
//        subject: 'You\'ve made money in the markets, time to hold an investment group meeting: ' + url,
//        html: '<html><body>YAY, {{first_name or \'you great person\'}}!<br></body></html>' } }));
//   req.end();
// } else {
//   var http = require("https");

// var options = {
//   "method": "POST",
//   "hostname": "api.sparkpost.com",
//   "port": null,
//   "path": "/api/v1/transmissions?num_rcpt_errors=3",
//   "headers": {
//     "content-type": "application/json",
//     "accept": "application/json",
//     "authorization": "f43a7b6e7870747f3e505f7dd0c0f687a95a73cd",
//     "cache-control": "no-cache",
//     "postman-token": "5f3acf49-a041-348f-941e-d5c3d4bc348e"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(JSON.stringify({ campaign_id: 'postman_inline_both_example',
//   recipients: 
//    [ { address: 'ashahatit@yahoo.com' },
//      { address: 'ninaorellana23@berkeley.edu' },
//      { address: 'shahatit.rami@gmail.com' },
//      { address: 'parsa.attari@berkeley.edu' } ],
//   content: 
//    { from: 
//       { email: 'MamaWeMadeIt@celebratestockreturn.com',
//         name: 'Cal Hacks Investment Group' },
//      subject: 'You\'ve lost money in the markets, time to hold an investment group meeting: ' + url,
//      html: '<html><body>Oh No, {{first_name or \'you great person\'}}!<br></body></html>' } }));
// req.end();
// }





// var options = {
//   "method": "GET",
//   "hostname": "api.ciscospark.com",
//   "port": null,
//   "path": "/v1/rooms",
//   "headers": {
//     "authorization": "Bearer NGMwNTNkZTgtNjc1OC00ZmQyLTk1ZDYtODAzNzE5OTM2NDA2N2I2NWJiOTctYjU3",
//     "content-type": "application/json; charset=utf-8",
//     "cache-control": "no-cache",
//     "postman-token": "f94d3178-3a35-31b6-91b4-b1c77e4e1c10"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body)
//     body = JSON.parse(body.toString());
//     console.log(body)
//     // console.log(body.toString());
//   });
// });


