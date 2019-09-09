resource "aws_iam_role" "task_role" {
  name = "${var.service_name}-${var.environment}-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

  tags = {
    ENV = "${var.environment}"
  }
}

resource "aws_iam_policy" "policy" {
  name = "${var.service_name}-${var.environment}-policy"
  path = "/"
  description = "Task Role Policy for service - ${var.service_name}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ssm:DescribeParameters",
        "ssm:ListDocuments",
        "ssm:ListDocumentVersions",
        "ssm:DescribeDocument",
        "ssm:GetDocument",
        "ssm:GetParameter",
        "ssm:GetParameterHistory",
        "ssm:GetParameters",
        "ssm:GetParametersByPath"
      ],
      "Resource": [
        "arn:aws:ssm:eu-central-1:${var.remote_account_id}:parameter/${var.namespace}/${var.service_name}/*"
      ]
    }
  ]
}
EOF
}

resource "aws_iam_policy_attachment" "test-attach" {
  name = "${var.service_name}-${var.environment}-attachment"
  roles = ["${aws_iam_role.task_role.name}"]
  policy_arn = "${aws_iam_policy.policy.arn}"
}