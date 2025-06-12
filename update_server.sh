#!/bin/bash

INSTANCE_ID=aws ec2 describe-instances \
    --filters "Name=tag:Name,Values=ethanrohman*" \
    --output text \
    --query "Reservations[*].Instances[*].InstanceId"

aws ssm send-command \
    --document-name "UpdateServer" \
    --parameters "commands=[
        \"#!/bin/bash\",
        \"cd /home/ubuntu/ethanrohman\",
        \"docker stop nginx\",
        \"docker rm nginx\",
        \"cd /home/ubuntu/ethanrohman\",
        \"git pull origin main\",
        \"docker compose up --build -d\"
    ]" \
    --targets "Key=InstanceIds,Values=$INSTANCE_ID"
