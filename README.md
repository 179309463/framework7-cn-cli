# Framework7 CN CLI

Framework7Cn command line utility makes easier to create [Framework7Cn](http://framework7.io) apps. Since Framework7Cn v4 release, CLI the most recommended way to start Framework7Cn app development.

## Install

First of all make sure you have globally installed cordova (may require "sudo"):
```
$ npm install -g cordova
```

Then install framework7-cn-cli (may require "sudo"):
```
$ npm install -g framework7-cn-cli
```

## Create Framework7Cn app

To create Framework7Cn app, run the following command in the directory where you want to create app:
```
$ framework7-cn create
```

Program will prompt for few questions about framework and template you want to start with.

## Create Framework7Cn app with user interface

Run the following command in the directory where you want to create app:
```
$ framework7-cn create --ui
```

It will launch UI where you will be able to configure the project. By default it launches server on `localhost:3001` address. If you want to change the port then use `--port <n>` argument:
```
$ framework7-cn create --ui --port 8080
```

## Generate assets

In created project there is an `assets-src` directory. It contains required icons and splash screens source images. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:
```
$ framework7-cn assets
```

That is all, script will generate all required sizes of icons and splash screens and place them automatically where they need to be.

## Generate assets with user interface

Run the following command in the directory with Framework7Cn project:
```
$ framework7-cn assets --ui
```

It will launch UI where you will be able to change icons and splash screens. By default it launches server on `localhost:3001` address. If you want to change the port then use `--port <n>` argument:
```
$ framework7-cn assets --ui --port 8080
```

## Cordova APIs

To run cordova related commands run the following command in the project root directory:
```
$ framework7-cn cordova [..args]
```

For example:
```
$ framework7-cn cordova plugin add cordova-plugin-statusbar
$ framework7-cn cordova plugin add cordova-plugin-splashscreen
$ framework7-cn cordova build ios
...
```
