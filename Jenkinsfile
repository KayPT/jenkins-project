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

    // Remove a imagem e container anterior
    /*   stage('Remove Previous Image and Container') {
            steps {
                sh 'docker rm --force "$CONTAINER_NAME"'
                sh 'docker rmi --force "$IMAGE_NAME"'

            }
        }*/

    // Criar a imagem docker
        stage ('Build Docker Image') {
                agent any
                steps {
                        sh '-v $(which docker):/usr/bin/docker'
                        sh 'docker build -t "${DOCKER_IMAGE_NAME}" .'
                }
            }
    // Inicia o container
            stage ('Run Docker Container') {
                agent any
                steps {
                    sh 'docker rm -f "${DOCKER_IMAGE_NAME}"'
                    sh 'docker run -d -p 3000:3000 --name "${DOCKER_CONTAINER_NAME}" "${DOCKER_IMAGE_NAME}"'
                }
            }
        }
    }