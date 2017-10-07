var http = require("https");

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
    var madeMoney = false;
    if (percentReturned > 0.10) {
      sendEmail = true;
    }
      
    }
  });
});

req.end();

if (madeMoney) {

  var options = {
    "method": "POST",
    "hostname": "api.sparkpost.com",
    "port": null,
    "path": "/api/v1/transmissions?num_rcpt_errors=3",
    "headers": {
      "content-type": "application/json",
      "accept": "application/json",
      "authorization": "f43a7b6e7870747f3e505f7dd0c0f687a95a73cd",
      "cache-control": "no-cache",
      "postman-token": "5f3acf49-a041-348f-941e-d5c3d4bc348e"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify({ campaign_id: 'postman_inline_both_example',
    recipients: 
     [ { address: 'ashahatit@yahoo.com' },
       { address: 'ninaorellana23@berkeley.edu' },
       { address: 'shahatit.rami@gmail.com' },
       { address: 'parsa.attari@berkeley.edu' } ],
    content: 
     { from: 
        { email: 'MamaWeMadeIt@celebratestockreturn.com',
          name: 'Cal Hacks Investment Group' },
       subject: 'You\'ve made money in the markets, time to hold an investment group meeting: https://hangouts.google.com/call/kTbGfW6Ms82lCF8G7HwCAAEE',
       html: '<html><body>YAY, {{first_name or \'you great person\'}}!<br></body></html>' } }));
  req.end();
} else {

var options = {
  "method": "POST",
  "hostname": "api.sparkpost.com",
  "port": null,
  "path": "/api/v1/transmissions?num_rcpt_errors=3",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json",
    "authorization": "f43a7b6e7870747f3e505f7dd0c0f687a95a73cd",
    "cache-control": "no-cache",
    "postman-token": "5f3acf49-a041-348f-941e-d5c3d4bc348e"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ campaign_id: 'postman_inline_both_example',
  recipients: 
   [ { address: 'ashahatit@yahoo.com' },
     { address: 'ninaorellana23@berkeley.edu' },
     { address: 'shahatit.rami@gmail.com' },
     { address: 'parsa.attari@berkeley.edu' } ],
  content: 
   { from: 
      { email: 'MamaWeMadeIt@celebratestockreturn.com',
        name: 'Cal Hacks Investment Group' },
     subject: 'You\'ve lost money in the markets, time to hold an investment group meeting: https://hangouts.google.com/call/kTbGfW6Ms82lCF8G7HwCAAEE',
     html: '<html><body>Oh No, {{first_name or \'you great person\'}}!<br></body></html>' } }));
req.end();
}

var json = {
  "items" : [ {
    "id" : "Y2lzY29zcGFyazovL3VzL1JPT00vYmJjZWIxYWQtNDNmMS0zYjU4LTkxNDctZjE0YmIwYzRkMTU0",
    "title" : "Project Unicorn - Sprint 0",
    "type" : "group",
    "isLocked" : true,
    "teamId" : "Y2lzY29zcGFyazovL3VzL1JPT00vNjRlNDVhZTAtYzQ2Yi0xMWU1LTlkZjktMGQ0MWUzNDIxOTcz",
    "lastActivity" : "2016-04-21T19:12:48.920Z",
    "created" : "2016-04-21T19:01:55.966Z"
  } ]
}


var options = {
  "method": "GET",
  "hostname": "api.ciscospark.com",
  "port": null,
  "path": "/v1/rooms",
  "headers": {
    "authorization": "Bearer NGMwNTNkZTgtNjc1OC00ZmQyLTk1ZDYtODAzNzE5OTM2NDA2N2I2NWJiOTctYjU3",
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-cache",
    "postman-token": "f94d3178-3a35-31b6-91b4-b1c77e4e1c10"
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
    body.items[0].id
    console.log(body.toString());
  });
});



