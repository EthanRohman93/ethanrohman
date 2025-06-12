#!/bin/bash

INSTANCE_ID=$(aws ec2 describe-instances \
    --filters "Name=tag:Name,Values=ethanrohman*" \
    --query "Reservations[*].Instances[*].InstanceId" \
    --output text)

aws ssm send-command \
    --document-name "AWS-RunShellScript" \
    --parameters "commands=[
        \"#!/bin/bash\",
        \"docker stop nginx\",
        \"docker rm nginx\",
        \"rm -rf /home/ubuntu/ethanrohman\",
        \"cd /home/ubuntu\",
        \"git clone https://github.com/EthanRohman93/ethanrohman.git ethanrohman\",
        \"cd /home/ubuntu/ethanrohman\",
        \"git pull origin main\",
        \"docker compose up --build -d\"
    ]" \
    --targets "Key=InstanceIds,Values=$INSTANCE_ID"
