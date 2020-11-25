pipeline {
    agent any
    options {
         disableConcurrentBuilds()
         buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
    }

    environment {
        PROJECT_NAME     = "radioretail"
        PROJECT_VERSION  = "2"
        APPLICATION_NAME = "rdr-web-radio-ui"
        APPLICATION_HASH = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('Run tests') {
            steps {
                sh "npm test"
            }
        }

    }

    post {
        cleanup {
            cleanWs()
        }
    }
}