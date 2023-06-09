# 🌎 PROJECT BLUE PRINT
This project is the prototype of the new structure of Delta Tracking Platform. The main objective is be able to create a platform with agnostic technologies and and not specifically rely on a language or framework.

In this repo you will see te pretty basic structure of the new platform using Module Federation, Angular, Vue and React as our main technologies.



# Ejecutar el repositorio
Debido a que este es un prototipo se se utilizaron aplicaciones parcialmente creadas y configuradas según este tutorial.
https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/
Para ejecutar la aplicación completa siga los siguientes pasos:

## Ejecutar el módulo de angular
Se requiere ejecutar en node 18, es importante tener nodejs en esta versión para poder ejecutarlo
```console
    cd dt-angular
    npm i
    ng serve
```

## Ejecutar el módulo de React
Se requiere tener instalado la versión 14.19.3 de Node JS, puede usar Node Version Manager para gestionar distintas versiones de node al mismo tiempo
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

```console
    cd dt-react-dl
    nvm use 14.19.3
    npm i
    npm start
```
## Ejecutar el módulo de Vue
Se requiere tener instalado la versión 14.19.3 de Node JS, puede usar Node Version Manager para gestionar distintas versiones de node al mismo tiempo
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

```console
    cd dt-vue-dl
    nvm use 14.19.3
    npm i
    npm start
```

## Ejecutar el shell
Se requiere ejecutar en node 18, es importante tener nodejs en esta versión para poder ejecutarlo
```console
    cd dt-mf-shell
    npm i
    ng serve -o
```
ir a `http://localhost:4200/` para ver los cambios.





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
5. Agregar al archivo de rutas del shell el siguiente código:
```console
    {
        path: 'angular',
        loadChildren: () => loadRemoteModule({ type: 'module', remoteEntry: 'http://localhost:4201/remoteEntry.js', exposedModule: './AngularModule' }).then((m) => m.AngularModule)
    },
```
6. En el proyecto dt-angular en el archivo webpack.config.js agregar el módulo a exponer
```console
    exposes: {
        './AngularModule': './src/app/angular/angular.module.ts',
    },
```




