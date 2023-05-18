 
# Auth - Parkin - ArchiPlus

## Compilacion
1. Clonar este repositorio.
2. Ubicarse en una terminal en el proyecto clonado.
3. Ejecutar `docker build . -t archiplus/node-pica`
4. Verficar imagen creada `docker image ls`


## Instalación con docker compose
1. Clonar este repositorio.
2. Ubicarse en una terminal en el proyecto clonado.
3. Ejecutar `docker compose build`
4. Ejecutar `docker compose up -d`
5. Listo

**Nota:** Asegurarse de que los puertos *3000* y *3307* se encuentren libres antes de ejecutar el paso 4.

## Despliegue con Kubernetes
1. Clonar este repositorio.
2. Ubicarse en una terminal en el proyecto clonado.
3. Ejecutar `docker build . -t archiplus/node-pica`
4. Solo en K3S `docker save archiplus/node-pica | sudo k3s ctr images import -`
5. Ejecutar `kubectl apply -f mysql-pv.yml`
6. Ejecutar `kubectl apply -f reto-pica.yml`
7. Listo

## Tecnologías
- NodeJs
- Express JS
- MySQL 5.7
- Kubernetes
- Docker

## Postman
La colección de postman con los servicios GET y POST es el archivo ***auth.postman_collection.json***.

En esta colección se encuentran:
- **GET** Petición para buscar usuario.
- **POST** Petición para crear usuario.
- **POST** Para hacer Login.
- **GET** Para verificar el token.# parking_auth
