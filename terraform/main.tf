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

  user_data_replace_on_change = true
  user_data = file("setup.sh")
  tags = {
    Name = "ethanrohman"
  }
}

resource "aws_eip" "lb" {
  instance = aws_instance.ethanrohman.id
  domain = "vpc"
}
