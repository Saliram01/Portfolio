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
                        userRemoteConfigs: [[credentialsId: 'git-pat', url: 'https://github.com/Saliram01/Jenkins-Config.git']]
                    ])

                }
            }
        }
        stage('move Script'){
            steps {
                sh "mv Template/docker-hub.sh ."
                sh "mv Template/env_dev.sh ."
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
        success {
            script {
                echo "Image pushed successfully!"
            }
        }
        failure {
            echo "Pipeline failed. Docker image will not be pushed."
        }
    }
}