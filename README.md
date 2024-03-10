# Crear un proyecto con MONGO desde cero:

```sh
$ npm init --yes
```

```sh
$ npm i express
```
## Creamos .gitignore y añadimos: /node.modules y .env

```sh
$ npm i nodemon -D
```

```sh
$ npm i dotenv -E
``` 

## Creamos carpeta y archivo src/server.js
## Añadimos script en package.json para permitir el import y export:

```sh
{
"type": "module",
}
```
## Cambiamos el require por:

```sh 
import express from "express";
import 'dotenv/config';
```
## Ejecutamos en powershell, en este caso creamos un container a partir de una imagen de dokcker, mapeamos el puerto 27017 al 27017 al puerto del contenedor mongoDB, le asignamos --name y creamos un volumen dentro del contenedor para guardar los datos -v mongo_data:/data/db
```sh 
docker run -d -p 27017:27017 --name mongo -v mongo_data:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo:latest
``` 
## Instalamos mongoose:
```sh 
npm install mongoose --save
```
## Instalamos bcrypt
```sh
npm install bcrypt
```
## Instalamos jwt:
```sh
npm i jasonwebtoken
```
```sh
creamos modelo
```

```sh
creamos controlador
```

```sh
creamos ruta
```

```sh 
$ git init
```

```sh
$ git add .
```

```sh
$ git commit -m ""
```
## Para agregar algo al ultimo commit:
```sh
git commit --amend  
```