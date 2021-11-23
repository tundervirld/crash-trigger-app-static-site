# Crash trigger app static site
This app is an example to create errors in JS pressing a button.
#### Local development
```bash
docker run -it --rm  -d \
-p 8090:80 \
-v $(pwd):/usr/local/apache2/htdocs/ \
--workdir /usr/local/apache2/htdocs/ \
--name ${PWD##*/} \
httpd:2.4
```

#### Deploy on Azure
```
az login
az account set --subscription [name suscription]
az webapp up --resource-group [name RG] --location eastus2 --name  crash-trigger-static-site --html
```

##### References:
- [From git repo to App Service](https://docs.microsoft.com/en-us/azure/app-service/deploy-local-git?tabs=portal#create-a-git-enabled-app)