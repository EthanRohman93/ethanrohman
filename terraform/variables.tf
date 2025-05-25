variable "region" {
  type = string
}

variable "env_prefix" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "ec2_name" {
  type = string
}

variable "ethanrohman_crt" {
  type = string
  sensitive = true
}

variable "ethanrohman_key" {
  type = string
  sensitive = true
}

variable "ethanrohman_bundle" {
  type = string
  sensitive = true
}
