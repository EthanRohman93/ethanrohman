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
              if command -v docker &> /dev/null
              then
                echo "Docker version: $(docker --version)"
              else
                echo "Docker not installed"
              fi
              
              if command -v docker compose &> /dev/null
              then
                echo "Docker Compose version: $(docker-compose --version)"
              else
                echo "Docker Compose not installed"
              fi
              sudo apt update -y
              sudo apt install nginx -y
              sudo systemctl start nginx
              sudo systemctlenable nginx
              EOF

  tags = {
      Name = "${var.env_prefix}-nginx-server"
  }
}

resource "aws_eip" "lb" {
  instance = aws_instance.ethanrohman.id
  domain = "vpc"
}
