variable "region" {
  default = ""
}

variable "cluster_name" {
  default = ""
}

variable "environment" {
  default = "default"
}

variable "namespace" {
  default = ""
}

variable "service_name" {
  default = ""
}

variable "container_name" {
  default = ""
}

variable "container_tag" {
  default = ""
}

variable "local_account_id" {
  default = ""
}

variable "remote_account_id" {
  default = ""
}

variable "application_port" {
  description = "Application startup port. Example: node defaults to 8080."
  default     = 80
}