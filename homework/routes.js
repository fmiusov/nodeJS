const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write('<body><h1>Sup dawg</h1></body>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="userName"><button type="submit">Submit</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(parsedBody)
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        })
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write(
            '<body><ul><li>Layla</li><li>Ben</li><li>Eden</li></ul></body>'
        );
        res.write('</html>');
    }
};

module.exports = requestHandler;
