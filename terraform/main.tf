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

resource "aws_instance" "ethanrohman" {
  ami                    = "ami-084568db4383264d4"
  instance_type          = var.instance_type
  key_name               = var.ec2_name
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
              # Add Docker's official GPG key:
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

  tags = {
      Name = "${var.env_prefix}-nginx-server"
  }
}

resource "aws_eip" "lb" {
  instance = aws_instance.ethanrohman.id
  domain = "vpc"
}
