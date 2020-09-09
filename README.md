# CORS-server ![Publish to CR](https://github.com/RomiC/cors-server/workflows/Publish%20to%20CR/badge.svg)

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

## Using Docker

There is one more option to run the cors-server is docker image, based on `nginx:alpine`. Yes, no nodejs is required! Just build an image using the command bellow:

```sh
docker build -t nginx-cors:latest .
```

Or pull it from docker-hub:

```sh
docker pull romic/nginx-cors:latest
```

Now you can run it with the following command:

```sh
docker run -dp 8080:80 --name nginx-cors nginx-cors:latest
# Or if you pull an image from the hub
docker run -dp 8080:80 --name nginx-cors romic/nginx-cors:latest
```

## Using now.sh

By using [now.sh](https://now.sh)-service you can create a free public available cors-server. Just create a free account, install cli-utility and run an instance of server using one simple command:

```sh
now
```

You'll see something like this in your console:

```sh
> Deploying ~/code/cors-server under [username]
> Using project cors
> Synced 5 files (3.43KB) [579ms]
> https://cors-hdakqm3s0.now.sh [v2] [906ms]
> Ready! Deployed to https://cors.[username].now.sh [in clipboard] [10s]
```

Now you may use link in the last row as an address of you cors-service.
