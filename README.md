# nginx_docker

* /app2/* goes to app2; everything else goes to app1
* 3 container setup using nginx and 2 express instances
* to run: `docker-compose up`
* should be accessible at `http://localhost`
* `http://localhost/app2` returns "Hello app2"
* `http://localhost` returns "Hello app1"
* `http://localhost/app2/wut` returns "app2 catch-all"
* `http://wut` returns "app1 catch-all"
