#!/bin/bash

# Docker and compose

for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
sudo apt-get update sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:

echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc]
    https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable docker
sudo systemctl start docker

# repo

cd /home/ubuntu
git clone https://github.com/EthanRohman93/ethanrohman.git

# aws install and ssl secrets

sudo apt install unzip
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

mkdir -p .certs
touch .certs/certs.json

aws sts get-caller-identity

aws secretsmanager get-secret-value --secret-id prod/ssl --region us-east-1 | jq -c '.SecretString | fromjson' > .certs/certs.json

jq -r '.ETHANROHMAN_CRT' .certs/certs.json > .certs/ethanrohman.com.crt
jq -r '.ETHANROHMAN_KEY' .certs/certs.json > .certs/ethanrohman.com.key
jq -r '.ETHANROHMAN_BUNDLE' .certs/certs.json > .certs/ethanrohman.com.bundle

# app start up

cd ethanrohman
sudo docker compose up -d
