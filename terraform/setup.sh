#!/bin/bash

# Docker and compose

su - ubuntu
sudo apt update
cd /home/ubuntu
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
# sudo apt install apt-transport-https ca-certificates curl software-properties-common
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# sudo apt update
# apt-cache policy docker-ce
# sudo apt install docker-ce
# sudo systemctl status docker
# sudo usermod -aG docker ubuntu
# mkdir -p ~/.docker/cli-plugins/
# curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
# chmod +x ~/.docker/cli-plugins/docker-compose
# docker compose version

# repo

# cd /home/ubuntu
# git clone https://github.com/EthanRohman93/ethanrohman.git

# aws install and ssl secrets

# sudo apt install unzip
# curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
# unzip awscliv2.zip
# sudo ./aws/install

# mkdir -p .certs
# touch .certs/certs.json

# aws sts get-caller-identity

# aws secretsmanager get-secret-value --secret-id prod/ssl --region us-east-1 | jq -c '.SecretString | fromjson' > .certs/certs.json

# jq -r '.ETHANROHMAN_CRT' .certs/certs.json > .certs/ethanrohman.com.crt
# jq -r '.ETHANROHMAN_KEY' .certs/certs.json > .certs/ethanrohman.com.key
# jq -r '.ETHANROHMAN_BUNDLE' .certs/certs.json > .certs/ethanrohman.com.bundle

# app start up

# cd ethanrohman
# sudo docker compose up -d
