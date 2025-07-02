#!/bin/bash

docker stop nginx
docker rm nginx

git pull

docker compose up --build -d
