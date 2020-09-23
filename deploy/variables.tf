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

variable "desired_count" {
  type = "map"

  default = {
    default = 0
    dev     = 0
    prod    = 0
  }
}

variable "cpu" {
  default = 64
}

variable "memory_reservation" {
  default = 32
}

variable "memory" {
  default = 64
}
