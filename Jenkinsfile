pipeline {
    agent any

    parameters {
            String( name: 'FILE_NAME', defaultValue: 'myfile.txt', description: 'File name to archive?')
    }

    environment {
        FILE_NAME = 'NewFile.txt'
    }
    
    stages {
        stage('Parallel') {
        parallel{
            stage('A') {
                agent any
                steps {
                    echo "On Stage A"
                }
            }
            stage('B') {
                agent any
                steps {
                    echo "On Stage B"
                }
            }
        }
    }
        stage('Echo Hello World') {
            steps {
                echo 'Hello World'
             }
        }
        stage('create write file') {
            steps {
                writeFile file: '$FILE_NAME', text: 'hell write file'
            }
        }
        stage('Archive Artifact write File') {
            steps {
                archiveArtifacts artifacts: '$FILE_NAME', followSymlinks: false
                }
             }
        }
    }