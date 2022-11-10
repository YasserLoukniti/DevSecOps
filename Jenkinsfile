pipeline {
    agent any
    tools{
        nodejs '19.0.1'
        git 'git'
    }
    stages {
        stage('build') {
            steps {
                git 'https://github.com/YasserLoukniti/DevSecOps'
                bat 'npm i'
            }
        }
        stage('test') {
            steps {
                bat 'npm test'
            }
        }
    }
}


