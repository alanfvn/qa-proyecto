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
          sh 'rm db.sqlite3'
          sh 'touch db.sqlite3'
          sh 'chmod 777 db.sqlite3'
          sh 'docker compose up -d --wait'
          sh 'docker compose ps'
      }
    }

    stage('Hacer init al setup de Django'){
      steps{
        sh 'docker compose exec web python manage.py collectstatic'
        sh 'docker compose exec web python manage.py migrate'
        sh 'docker compose exec web python manage.py create_test_items'
      }
    }
    
    stage('Clonar pruebas'){
      steps{
        git "https://github.com/alanfvn/qa-proyecto"
      }
    }

    stage('Dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Ejecutar tests'){
      steps{
        sh 'npm run cypress'
      }
    }
  }

  post {
    always {
      sh 'docker compose down --remove-orphans -v'
      sh 'docker compose ps'
    }
  }
}
