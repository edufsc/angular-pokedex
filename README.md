# TestApp

Nota: el proyecto no está desarrollado con la última versión de Angular. Si da problemas al trabajar con el CLI que tenemos instalado, podemos crear un nuevo proyecto de Angular y tratar de repetir lo que hemos hecho en clase. El código y la forma de trabajar son iguales.

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

# Instalar Bootstrap

Ejecuta `npm install bootstrap jquery @popperjs/core` para instalar Bootstrap y sus dependencias.

Para utilizarlo en el proyecto no lo insertamos en el index.html, sino en el fichero de configuración de Angular (angular.json).
De esta forma, si actualizamos Bootstrap o jQuery con npm, no hay que cambiar nada.

En angular.json:

Los scripts los añadimos a la lista de "scripts", (dentro de "build"), jQuery va antes, ya que Bootstrap lo utilizará

"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

Los estilos los añadimos a la lista de "styles", (dentro de "build")

"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css",
]

# Trabajado en clase

En clase hemos trabajado en el directorio "src", hemos creado un servicio en src/app/services con el CLI de Angular y en src/app/pages, un componente.

Hemos importado en nuestra aplicación las funcionalidades para hacer peticiones HTTP, añadiendo HttpClientModule a la lista de imports de AppModule.

Hemos instalado Bootstrap con npm y añadido los scripts de los módulos instalados, que se encuentran en el directorio "node_modules".

## Desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La app se recarga automáticamente al guardar tus cambios.

## Generar código

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes crear `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Ejecuta `ng build` para "compilar" el proyecto. El resultado se guardará en `dist/`.

## Test unitarios

Ejecuta `ng test` para jecutar los test unitarios via [Karma](https://karma-runner.github.io).

Hasta ahora no hemos trabajado los test unitarios, pero los ficheros están generados.
Podemos buscar más información para tratar de implementar algunos test.

## Más ayuda

Usa `ng help` o visita [Angular CLI Overview and Command Reference](https://angular.io/cli).
