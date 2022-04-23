pipeline{
  agent any
  tools {nodejs 'NodeJS'}
  
  stages{
    stage('Cloning git'){
      steps {
        echo "Cloning Git Repo"
        git "https://github.com/sunilgaddi/cicd.git"
      }
    }
    stage('Installing Dependencies'){
      steps{
        echo "Installing Deps"
        sh 'npm install'
      }
    }
  }
}
