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
    SERVICE_NAME             = 'design'
    TF_VAR_container_name    = "${env.ECR_REGISTRY}/${NAMESPACE}/${SERVICE_NAME}"
  }

  stages {
    stage('Test') {
      steps {
        sh 'yarn && yarn bootstrap && yarn build:components && yarn test'
        junit 'junit.xml'
      }
    }

    stage ('Docker login') {
      when { branch 'master' }
      steps {
        dockerLogin()
      }
    }

    stage('Build') {
      when { branch 'master' }
      steps {
        script {
          serviceApp = docker.build("${NAMESPACE}/${SERVICE_NAME}:${DEPLOY_VERSION}")
        }
      }
    }

    stage('Publish Docker') {
      when { branch 'master' }
      steps {
        script {
          docker.withRegistry("${env.ECR_REGISTRY_URL}") {
            serviceApp.push()
          }
        }
      }
    }

    stage("Deploy to Production") {
      when { branch 'master' }
      steps {
        script {
          ecsDeploy("prod", "${SERVICE_NAME}", "${DEPLOY_VERSION}", "${NAMESPACE}")
        }
      }
    }
  }

  post {
    failure {
        slackSend(channel: '#team-hulk-alerts', color: 'danger', message: "Huh, not good... Build failed : ${env.JOB_NAME} [${env.BUILD_NUMBER}] (<${env.RUN_DISPLAY_URL}|Open>) :man-shrugging::shrug:")
    }
  }
}
