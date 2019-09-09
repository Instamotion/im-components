terraform {
  required_version = ">= 0.11.12"

  backend "s3" {
    bucket = "instamotion-terraform-states"
    key    = ""
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"

  assume_role {
    role_arn    = "arn:aws:iam::${var.remote_account_id}:role/TerraformCrossAccTrustedRole"
    external_id = "${var.local_account_id}"
  }
}

provider "aws" {
  region = "eu-central-1"
  alias  = "r53"

  assume_role {
    role_arn    = "arn:aws:iam::716276464197:role/TerraformCrossAccTrustedRole"
    external_id = "141797902071"
  }
}

module "ecs_deploy" {
  source = "../terraform-repo/modules/deploy-ecs-alb"

  region         = "${var.region}"
  environment    = "${var.environment}"
  service_name   = "${var.service_name}"
  container_name = "${var.container_name}"
  container_tag  = "${var.container_tag}"
  cluster_name   = "${var.namespace}-${var.environment}"
  task_role_arn  = "${aws_iam_role.task_role.arn}"

  # Module defaults to 8080 port. In this case nginx uses 80, so to override module - these two vars should be here.
  container_port    = "${var.application_port}"
  target_group_port = "${var.application_port}"
}

module "alias_r53" {
  source = "../terraform-repo/modules/alias-r53"

  r53_dns_name = "${var.service_name}"
  alb_dns_name = "${module.ecs_deploy.service_endpoint}"
  environment  = "${var.environment}"

  providers = {
    aws = "aws.r53"
  }
}

output "app_endpoint" {
  description = "Application endpoint. By default point to app ALB."
  value       = "https://${module.alias_r53.service_endpoint}"
}