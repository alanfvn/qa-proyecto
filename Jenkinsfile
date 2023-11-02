pipeline {
  agent any

    tools {
      nodejs "Node20"
    }

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
        sh 'echo "DEBUG=FALSE" > .env'
          sh 'touch db.sqlite3'
          sh 'chmod 777 db.sqlite3'
          sh 'docker compose up -d --wait'
          sh 'docker compose ps'
      }
    }


    stage('Dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Ejecutar tests'){
      sh 'npm run cypress'
    }

  }

  post {
    always {
      sh 'docker compose down --remove-orphans -v'
        sh 'docker compose ps'
    }
  }
}
