# App puesta a prueba

- [Seminario](https://github.com/alanfvn/seminario/)

# Documentación utilizada
- [Instalación de Jenkins](https://solutiontoolkit.com/2023/04/complete-guide-setting-up-aws-ec2-instance-with-ubuntu-os-and-jenkins/)
- [Ejecutar pruebas de cypress en Jenkins](https://www.lambdatest.com/blog/jenkins-and-cypress-tutorial/)

```bash
# agregar permisos a jenkins de usar Docker
sudo usermod -aG docker jenkins
```

# Comandos

```bash
# ejecutar los specs mediante CLI
npx cypress run 
# visualizar los specs mediante GUI
npx cypress open
```
