const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
const absolute = path.resolve(__dirname,'content','subfolder');
console.log(absolute);

const fs = require('fs');
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messagelogged', function () {
    console.log('Listener called');
});
emitter.emit('messagelogged');

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page.")
    }
    if(req.url === '/about'){
        res.end('Welcome to about page.')
    }
    res.write(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>`)
})

server.listen(3000);

// serverObj.on('connection', (socket) => {
//     console.log('gii');
// });
// serverObj.listen(3000);

// console.log('Listening on port 3000 ....');

const  _ = require('lodash');
const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)