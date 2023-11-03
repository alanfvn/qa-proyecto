# App puesta a prueba

- [Seminario](https://github.com/alanfvn/seminario/)

# Documentación utilizada
- [Instalación de Jenkins](https://solutiontoolkit.com/2023/04/complete-guide-setting-up-aws-ec2-instance-with-ubuntu-os-and-jenkins/)
- [Ejecutar pruebas de cypress en Jenkins](https://www.lambdatest.com/blog/jenkins-and-cypress-tutorial/)
- [Correr Containers con Jenkins](https://www.youtube.com/watch?v=ZPD_PzGOvFM)
- [WebHook Jenkins](https://www.youtube.com/watch?v=PhxZamqYJws)
- [Reportes](https://medium.com/@mvairamuthu20000/how-to-generate-html-reports-in-cypress-a34d2eb3675e)

```bash
# agregar permisos a jenkins de usar Docker
sudo usermod -aG docker jenkins
```

```bash
# dependencias cypress entorno CI
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```



# Comandos

```bash
# ejecutar los specs mediante CLI
npx cypress run 
# visualizar los specs mediante GUI
npx cypress open
```

```bash
# ci
npx cypress run 
npx mochawesome-merge "cypress/results/*.json" > mochawesome.json
npx marge --inline=true mochawesome.json
```
