pipeline {
    agent any	
    stages {     
        stage('Build') {
            steps {
             sh "sudo docker build -t csnpm-registry:2.19.4  docker/"
        	}
        }
        stage('Push') {
            steps {
             sh "sudo docker tag csnpm-registry:2.19.4 docker.registry.cscloud.com/csnpm-registry:2.19.4 "
             sh "sudo docker push docker.registry.cscloud.com/csnpm-registry:2.19.4"
            }
        }
    }
}
