#!groovy
@Library('instamotion-shared-libraries') _

pipeline {
  // Main build agent for whole pipeline
  agent {
    label 'nodejs'
  }

  // Oprional jenkins job configuration
  options {
    buildDiscarder(
      logRotator(
        daysToKeepStr: '-1',
        numToKeepStr: '7',
        artifactDaysToKeepStr: '14',
        artifactNumToKeepStr: '3'
      )
    )
    timeout(time: 10, unit: 'MINUTES')
  }

  // Jenkins job environment variables
  environment {
    RELEASE_VERSION          = '0.1'
    DEPLOY_VERSION           = "${RELEASE_VERSION}-${BUILD_ID}"
    REGION                   = "eu-central-1"
    NAMESPACE                = 'app'
    SERVICE_NAME             = 'react'
    TF_VAR_container_name    = "${env.ECR_REGISTRY}/${NAMESPACE}/${SERVICE_NAME}"
  }

  stages {
    stage ('Docker login') {
      steps {
        dockerLogin()
      }
    }

    stage('Test') {
      steps {
        sh 'npm install && npm run test --ci --reporters=default --reporters=jest-junit'
        junit 'junit.xml'
      }
    }

    stage('Build and deploy') {

      parallel {
        stage('Master') {
          when { branch "master" }

          stages {
            stage('Build master') {
              steps {
                script {
                  serviceApp = docker.build("${NAMESPACE}/${SERVICE_NAME}:${DEPLOY_VERSION}")
                }
              }
            }

            stage('Publish Docker (master build)') {
              steps {
                script {
                  docker.withRegistry("${env.ECR_REGISTRY_URL}") {
                    serviceApp.push()
                  }
                }
              }
            }

            stage('Deploy master image') {
              steps {
                script {
                  ecsDeploy("${SERVICE_NAME}", "${DEPLOY_VERSION}", "${NAMESPACE}")
                }
              }
            }

            stage("Autotests for master") {
              steps {
                echo "Get service heath"
                sh "for i in \$(seq 1 5); do [ \$i -gt 1 ] && sleep 15; curl -sSf https://\${SERVICE_NAME}.dev.instamotion.com/health && s=0 && break || s=\$?; done; (exit \$s)"
              }
            }
          }

          post {
            success {
              echo "[INFO] Smoke tests was successful."
            }
            unsuccessful {
              ecsDeploy("${SERVICE_NAME}", "latest", "${NAMESPACE}")
            }
          }
        }

        stage('Production') {
          when { branch "production" }

          stages {
            stage('Build production') {
              steps {
                script {
                  serviceApp = docker.build("${NAMESPACE}/${SERVICE_NAME}:${DEPLOY_VERSION}")
                }
              }
            }

            stage('Publish Docker (production build)') {
              steps {
                script {
                  docker.withRegistry("${env.ECR_REGISTRY_URL}") {
                    serviceApp.push()
                  }
                }
              }
            }

            stage('Deploy production image') {
              steps {
                script {
                  ecsDeploy("prod", "${SERVICE_NAME}", "${DEPLOY_VERSION}", "${NAMESPACE}")
                }
              }
            }

            stage("Production autotests") {
              steps {
                echo "Get service heath"
                sh "for i in \$(seq 1 5); do [ \$i -gt 1 ] && sleep 15; curl -sSf https://\${SERVICE_NAME}.instamotion.com/health && s=0 && break || s=\$?; done; (exit \$s)"
              }
              post {
                success {
                  echo "[INFO] Smoke tests was successful. Promoting image with latest tag"
                  script {
                    docker.withRegistry("${env.ECR_REGISTRY_URL}") {
                      serviceApp.push("latest")
                    }
                  }
                }
                unsuccessful {
                  ecsDeploy("prod", "${SERVICE_NAME}", "latest", "${NAMESPACE}")
                }
              }
            }
          }

          post {
            success {
                slackSend(channel: '#team-hulk-alerts', color: 'good', message: "Build finished successfully: ${env.JOB_NAME} [${env.BUILD_NUMBER}] (<${env.RUN_DISPLAY_URL}|Open>) :thumbsup:")
            }
            failure {
                slackSend(channel: '#team-hulk-alerts', color: 'danger', message: "Build failed: ${env.JOB_NAME} [${env.BUILD_NUMBER}] (<${env.RUN_DISPLAY_URL}|Open>) :man-shrugging::shrug:")
            }
          }
        }
      }

    }
  }
}
