const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-type' : 'text/plain'});

    res.end("OLA, primeiro servidor");
});

server.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});