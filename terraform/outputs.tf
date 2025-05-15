output "public_ip" {
  description = "Public IP of EC2 Instance"
  value       = aws_instance.web.public_ip
}
