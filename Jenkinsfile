pipeline {
    agent any
    stages {
        stage('Detect Branch and Set Environment') {
            steps {
                script {
                    def branchName = env.BRANCH_NAME
                    env.ENVIRON = 'portfolio'
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
                        userRemoteConfigs: [[credentialsId: 'git-pat', url: '']]
                    ])

                }
            }
        }
        stage('move Script'){
            steps {
                sh "mv Template/_____.sh ."
                sh "mv Template/env_master.sh ."
            }
        }
        stage('Execute Script') {
            steps {
                // Run script.sh
                sh "chmod +x ____.sh"
                sh "./____.sh ${env.ENVIRON}"
            }
        }    
}
   post {
        success {
            script {
                echo "Pushing image to Docker Hub..."

                docker.withRegistry('https://index.docker.io/v1/', "${DOCKERHUB_CREDENTIALS}") {
                    docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                }

                echo "Image pushed successfully!"
            }
        }
        failure {
            echo "Pipeline failed. Docker image will not be pushed."
        }
    }
}