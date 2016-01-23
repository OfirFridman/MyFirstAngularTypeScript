# M y F i r s t A n g u l a r T y p e S c r i p t ---This project will help you to create your own [Angularjs](https://angularjs.org/) [TypeScript](http://www.typescriptlang.org/) project.## IDE---**I'm using [Atom editor](https://atom.io/) With the following packages*** [angularjs package](https://atom.io/packages/angularjs)* [atom-typescript](https://atom.io/packages/atom-typescript)## Installation---**Note**I'm using [Nodejs](https://nodejs.org/en/) v4.1.1 and [npm](https://www.npmjs.com/) v3.5.2 in order to install the different packages* open command line in your project folder* run this command to install [TypeScript](http://www.typescriptlang.org/) global```npm install -g typescript```* run this command to install [tsd](http://definitelytyped.org/tsd/) global```npm install -g tsd```>TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository.* run this command to install angular tsd```tsd install angular --resolve --overwrite --save```* create tsconfig.json on the root project[tsconfig.md](https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md)```json{    "compilerOptions": {      "target": "es5",      "sourceMap": true     }}```* create the index.html file on the root project```html<!DOCTYPE html><html>  <head>    <meta charset="utf-8">    <title>My First Angular TypeScript</title>  </head>  <body ng-app="app">    <div ng-controller="ctrl">      {{name}}    </div>    <!-- libs -->    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>    <!-- app -->    <script src="app/app.js"></script>    <script src="app/scripts/controllers/ctrl.js"></script>  </body></html>```
* create app folder

* create our first [TypeScript](http://www.typescriptlang.org/) file app.ts inside app folder

```javascript
(function(angular) {
    'use strict'

    angular.module('app', []);
})(angular);
```

* in app folder add new folder scripts and in scripts add new folder controllers
  now we should have 'app\scripts\controllers' path

* create ctrl.ts inside app\scripts\controllers folder

```javascript
(function(angular) {
    'use strict'
    class Ctrl {
        constructor($scope) {
            $scope.name = "ofir";
        }
    }

    angular.module('app')
        .controller('ctrl', Ctrl);
})(angular);
```


 
