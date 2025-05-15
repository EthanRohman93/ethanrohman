resource "aws_security_group" "web_sg" {
  name        = "${var.env_prefix}-web-sg"
  description = "Allow HTTP and HTTPS and SSH traffic"

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = var.instance_type
  key_name               = var.ec2_name
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  associate_public_ip_address = true

# Note: This expects your docker-compose.yml, nginx.conf, etc. in the repo root
# user_data = <<-EOF
#!/bin/bash
# yum update -y
# amazon-linux-extras install docker -y
# systemctl start docker
# systemctl enable docker
# yum install -y git
# curl -L "https://github.com/docker/compose/releases/download/2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# chmod +x /usr/local/bin/docker-compose

# Clone your repo with PAT
# git clone
# https://${var.github_pat}@github.com/${var.github_repo}.git /home/ec2-user/app
# cd /home/ec2-user/app

# Write SSL certs from vars
# (coming from GitHub secrets)
# mkdir -p /home/ec2-user/ssl 
# echo "${var.ethanrohman_crt}" > /home/ec2-user/ssl/fullchain.pem
# echo "${var.ethanrohman_key}" > /home/ec2-user/ssl/privkey.pem
# echo "${var.ethanrohman_bundle}" > /home/ec2-user/ssl/chain.pem
# chmod 600 /home/ec2-user/ssl/*
# /usr/local/bin/docker-compose up -d --build
# EOF

    tags = {
      Name = "${var.env_prefix}-nginx-server"
  }
}

output "public_ip" {
  value = aws_instance.web.public_ip
}
