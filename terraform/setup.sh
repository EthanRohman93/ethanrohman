#!/bin/bash

for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o
/etc/apt/keyrings/docker.asc
          sudo chmod a+r /etc/apt/keyrings/docker.asc

              sudo apt-get update

              sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
              sudo systemctl enable docker
              sudo systemctl start docker
              cd /home/ubuntu
              git clone https://github.com/${var.github_repo}

              mkdir -p .certs
              echo "${var.ethanrohman_crt}" > .certs/ethanrohman.com.crt
              echo "${var.ethanrohman_key}" > .certs/ethanrohman.com.key
              echo "${var.ethanrohman_bundle}" > .certs/ethanrohman.com.bundle

              sudo docker compose up -d
              EOF


