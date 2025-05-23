terraform {
  backend "s3" {
    bucket       = "terraformbackend382956"
    key          = "backend/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
  }
}
