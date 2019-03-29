# CORS-server

It's simple nodejs server, which main functionality is proxying any request and adding CORS-headers to the reponse. To run server, just tun the following command in your console:

```sh
npm i && node index.js
```

Your server should start and start listening port `3000`.

So, you can make a request it:

```sh
curl -i http://localhost:3000/https://api.forismatic.com/api/1.0/\?method\=getQuote\&format\=json\&lang\=en
```

If you wish you can change the port by setting up `PORT` env-variable:

```sh
PORT=5000 node index.js
```
