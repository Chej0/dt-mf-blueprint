# 🌎 PROJECT BLUE PRINT
This project is the prototype of the new structure of Delta Tracking Platform. The main objective is be able to create a platform with agnostic technologies and and not specifically rely on a language or framework.

In this repo you will see te pretty basic structure of the new platform using Module Federation, Angular, Vue and React as our main technologies.








# Crear un nuevo shell en ANGULAR

1. Crea una carpeta para el proyecto dentro ejecuta el siguiente comando: 
```console
    ng new dt-mf-shell --style=scss --routing=true
```
2. Se debe acrivar Module Federation
```console
    cd dt-mf-shell
    npm i -D @angular-architects/module-federation
```
3. Una vez instalada la librería agregaremos el uso de Module Federation a nuestros MF (microfrontends) y agregaremos unas configuraciones:
```console
    ng add @angular-architects/module-federation --project dt-mf-shell --port 4200 --type host
```
4. Ejecutar el Shell
```console
    ng serve -o
```


# Crear un nuevo módulo en ANGULAR
1. En la misma carpeta raiz ejecuta el siguiente comando: 
```console
    ng new dt-angular --style=scss --routing=true
```
2. Se debe acrivar Module Federation
```console
    cd dt-angular
    npm i -D @angular-architects/module-federation
```
3. Una vez instalada la librería agregaremos el uso de Module Federation a nuestros MF (microfrontends) y agregaremos unas configuraciones:
```console
    ng add @angular-architects/module-federation --project dt-angular --port 4201 --type remote
```
4. Ejecutar el remote
```console
    ng serve -o
```