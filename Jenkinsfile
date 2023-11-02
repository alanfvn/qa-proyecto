pipeline {
  agent any

    tools {nodejs "Node20"}

  environment {
    NOMBRE = "ALAN"
  }

  stages {

    stage('Clonar repositorio con codigo'){
      steps{
        git "https://github.com/alanfvn/seminario"
      }
    }

    stage('Limpiar datos de Docker'){
      steps{
        sh 'docker system prune -a --volumes -f'
      }
    }

    stage('Iniciar contenedor'){
      steps{
        sh 'docker compose up -d --wait'
        sh 'docker compose ps'
      }
    }
  }

  post {
      always {
        // sh 'docker compose down --remove-orphans -v'
        sh 'docker compose ps'
      }
    }


    // stage('Dependencies') {
    //   steps {
    //     sh 'npm i'
    //   }
    // }
    //
    // stage('e2e Tests') {
    //   Parallel{
    //     stage('Test 1') {
    //       steps {
    //         sh 'npm run cypress:ci'
    //       }
    //     }
    //
    //     stage('Test 2') {
    //       steps {
    //         sh 'npm run cypress2:ci'
    //       }
    //     }
    //
    //   }
    //   stage('Deploy') {
    //     steps {
    //       echo 'Deploying....'
    //     }
    //   }
    // }
}
