pipeline {
    agent any

    environment {
        ENVIRON = 'portfolio'
    }

    stages {
        stage('Detect Branch and Set Environment') {
            steps {
                script {
                    def branchName = env.BRANCH_NAME
                    echo "Branch detected: ${branchName}"
                }
            }
        }

        stage('Checkout Configuration Repository') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: "refs/heads/${env.BRANCH_NAME}"]],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'Template']],
                        submoduleCfg: [],
                        userRemoteConfigs: [[credentialsId: 'git-pat', url: 'https://github.com/Saliram01/Jenkins-Config.git']]
                    ])
                }
            }
        }

        stage('Move Script') {
            steps {
                sh "mv Template/docker-hub.sh ."
                sh "mv Template/env_dev.sh ."
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-pat', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Execute Script') {
            steps {
                sh "chmod +x docker-hub.sh"
                sh "./docker-hub.sh ${env.ENVIRON}"
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
        success {
            echo "Image pushed successfully!"
        }
        failure {
            echo "Pipeline failed. Docker image was not pushed."
        }
    }
}