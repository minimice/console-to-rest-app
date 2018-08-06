const { exec } = require('child_process');
var express = require('express');
var app = express();

app.get('/:drive', function(req, res) {
    if (!req.params.drive) {
        res.send("Invalid request");
        res.end();
    }
    var drive = req.params.drive;
    console.log(`Passed in ${drive}`);
    var command = `dir ${drive}: /w`;
    exec(`consoleApp ${drive}`, (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          res.send(stderr);
          return;
        }
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        res.send(stdout);
        //console.log(`stdout: ${stdout}`);
        //console.log(`stderr: ${stderr}`);
    });
});

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});
