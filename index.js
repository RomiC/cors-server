const http = require('http');
const fetch = require('node-fetch');
const zlib = require('zlib');

const port = process.env.PORT || 3000;

http
  .createServer(async (request, response) => {
    try {
      const requestedUrl = request.url.replace(/^\//, '').replace(/:\/([^/])/i, '://$1');

      if (!requestedUrl) {
        response.writeHead(400);
        response.end('Error: url is empty!');
        return false;
      }

      const fetchResponse = await fetch(requestedUrl).catch((err) => {
        response.writeHead(500);
        response.end(`Error occured while requesting "${requestedUrl}": ${err.toString()}`);
      });

      if (!fetchResponse) {
        return;
      }

      response.statusCode = fetchResponse.status;

      for (const headerName of fetchResponse.headers.keys()) {
        if (headerName !== 'Access-Control-Allow-Origin' && headerName !== 'Access-Control-Allow-Credentials') {
          response.setHeader(headerName, fetchResponse.headers.get(headerName));
        }
      }

      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Credentials', 'true');

      switch (fetchResponse.headers.get('Content-Encoding')) {
        case 'gzip':
          fetchResponse.body.pipe(zlib.createGzip()).pipe(response);
          break;

        default:
          fetchResponse.body.pipe(response);
          break;
      }
    } catch (err) {
      process.stderr.write(err.toString());
    }
  })
  .listen(port);
