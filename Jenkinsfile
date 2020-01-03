#!groovy
@Library('instamotion-shared-libraries') _

pipeline {
  // Main build agent for whole pipeline
  agent {
    label 'nodejs-10'
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
    timeout(time: 20, unit: 'MINUTES')
  }

  // Jenkins job environment variables
  environment {
    RELEASE_VERSION          = '0.1'
    DEPLOY_VERSION           = "${RELEASE_VERSION}-${BUILD_ID}"
    REGION                   = "eu-central-1"
    NAMESPACE                = 'app'
    SERVICE_NAME             = 'design'
    TF_VAR_container_name    = "${env.ECR_REGISTRY}/${NAMESPACE}/${SERVICE_NAME}"
    NPM_RO_TOKEN             = credentials('npm_read_only_token')
    NPM_PUB_TOKEN            = credentials('npm_publish_token')
    HUSKY_SKIP_HOOKS         = '1'
  }

  stages {
    stage('Bootstrap') {
      steps {
        sh 'yarn'
        sh 'yarn bootstrap'
        sh 'yarn build:components'
        sh 'yarn typecheck'
        sh 'yarn test'
      }
    }

    stage('Publish components') {
      when {
        allOf {
          branch 'master'
          expression {
            return sh(script: 'yarn changeset status', returnStatus: true) == 0
          }
        }
      }
      steps {
        withCredentials([
          string(credentialsId: 'gh_user_name', variable: 'GIT_USERNAME'),
          string(credentialsId: 'gh_user_email', variable: 'GIT_EMAIL'),
          string(credentialsId: 'github_token', variable: 'GH_TOKEN')
        ]) {
          sh './configs/setup-npm.sh'
          sh './configs/publish.sh'
        }
      }
    }

    stage('Build docker') {
      when { branch 'master' }
      steps {
        dockerLogin()
        sh 'yarn'
        sh 'yarn bootstrap'
        sh 'yarn build'
        script {
          docker.withRegistry("${env.ECR_REGISTRY_URL}") {
            serviceApp = docker.build("${NAMESPACE}/${SERVICE_NAME}:${DEPLOY_VERSION}")
            serviceApp.push()
          }
        }
      }
    }

    stage("Deploy storybook") {
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
