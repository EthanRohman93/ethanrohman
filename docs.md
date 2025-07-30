# Docs

## cicd

### terraform server setup

- only run by workflow dispatch as an admin
- installs docker and repo
- requires manual scp of ssl certs
- connection to godaddy for eip returned by server
  - this is automated in old main branch terraform

### update server

- use aws creds to get ec2 instance id for `ethanrohman` ec2
- run reset server script through aws cli
- stops and removes current nginx container pulls main and rebuilds docker
  container

## connect to server

ssh -i "ethanrohman.pem" ubuntu@ec2-54-145-107-218.compute-1.amazonaws.com


