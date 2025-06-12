#!/bin/bash

INSTANCE_IP=$(aws ec2 describe-instances \
    --filters "Name=tag:Name,Values=ethanrohman" \
    --query "Reservations[*].Instances[*].PublicIpAddress" \
    --output text)

scp -i "ethanrohman.pem" .certs/ethanrohman.com.crt .certs/ethanrohman.com.key \
    .certs/gd_bundle.crt ubuntu@$INSTANCE_IP:/home/ubuntu/.certs/
