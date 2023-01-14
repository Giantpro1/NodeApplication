// const {users,userAges} = require('./object');

// console.log(users, userAges);

// const ops = require('os');

// console.log(ops.platform());
const http = require('node:http');
const fs = require('node:fs');
// const { json } = require('stream/consumers');

const user = {
    firstname: 'Maloe',
    lastname: 'perez'
}
 const name = 'GIANTPRO';
const server = http.createServer((req, res) =>{
    let html = fs.readFileSync(__dirname+"/docs/index.html", "utf-8");
    html = html.replace("{{name}}",  name);
    res.end(html);
    // fs.createReadStream(__dirname +"/docs/index.html").pipe(res)
    // res.writeHead(200, {"Content-Type": "text/html"});
    // res.end(JSON.stringify(user));
});
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
