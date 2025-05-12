#!/bin/bash

docker stop nginx-ssl
docker rm nginx-ssl
docker compose up --build
