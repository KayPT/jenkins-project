pipeline {
    agent any

        parameters { 
        string(name: 'DOCKER_IMAGE_NAME', defaultValue: 'nodejs', description: 'Docker Image')
        string(name: 'DOCKER_CONTAINER_NAME', defaultValue: 'nodejs', description: 'Docker Container Name')
        
    }

    // Apaga os dados do Workspace usando o plugin Workspace Cleanup Plugin
    stages {
        stage ('CleanResources') {
            agent any
            steps
            {
                cleanWs()
            }
        }
    // Criar a imagem docker
        stage ('Build Docker Image') {
                agent any
                steps {
                        sh 'docker build -t "${DOCKER_IMAGE_NAME}" .'
                }
            }
    // Inicia o container
            stage ('Run Docker Container') {
                agent any
                steps {
                    sh 'docker run --detach --publish=3000:3000 '
                    sh 'docker rm -f '
                    sh 'docker run -d -p 3000:3000 --name "${DOCKER_CONTAINER_NAME}" "${DOCKER_IMAGE_NAME}"'
                }
            }
        }
    }