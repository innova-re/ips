# Innovare IPS

### Prerequisites

- [Node.js®](http://nodejs.org/), a platform built on Chrome's JavaScript runtime.
Download the Node.js source code or a pre-built installer for your platform from this [link](http://nodejs.org/download/).

- [Bower](http://bower.io/), a package manager for the web. To install Bower from the command line, execute the following command:

        npm install -g bower

- [Apache Cordova](http://cordova.apache.org/), a platform for building native mobile applications using HTML, CSS and JavaScript. To install Apache Cordova from the command line, execute the following command:

        sudo npm install -g cordova

- [Ionic](http://ionicframework.com/docs/guide/installation.html), an advanced HTML5 hybrid mobile app framework. To install Ionic from the command line, execute the following command:

        sudo npm install -g ionic

### Installation

    git clone git@github.com:innova-re/ips.git
    cd ips
    bower install

Set up Sass for this project:

    ionic setup sass
    
### Pull requests

1. [Use phonegap googlemaps plugin](https://github.com/innova-re/ips/pull/34)

### Running

For running the application in a browser:

    ionic serve

### Testing

Run unit tests automatically whenever app changes:

    TODO

### Troubleshooting

If you experience

    TODO

### Development Support Tools

- [Ripple Emulator (Beta)](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc?hl=en), a mobile environment emulator. Ripple is targeted towards WebWorks, PhoneGap, and mobile web development and testing!

- Android SDK. [Installing Cordova and the Android SDK on Windows 7 and 8](http://learn.ionicframework.com/videos/windows-android/).

- Apache Ant Java library.

- Android 4.4.2 (API 19). Run `android` to check if you have Android 4.4.2 (API 19) installed.

- Genymotion: [the faster android emulator](http://www.genymotion.com/)

- Gulp.js: [the streaming build system](http://gulpjs.com/)

Depending on the platform you want to simulate, for ios you can run:

    cordova platform add ios
    ionic build ios
    ionic emulate ios

for android you can run:

    cordova platform add android
    ionic build android
    ionic emulate android

for Windows Phone 8.1 you can run:

    cordova platform add wp8
    ionic build wp8
    ionic emulate wp8

## Supported Platforms

- Android

- BlackBerry WebWorks (OS 5.0 and higher)

- iPhone

- Windows Phone 8.1

## Source Code Analysis 

### Installation

Install the module with

    npm install -g plato

### Usage

    plato -r -d report www/js/
    open report/index.html

## References to build an app

- [Dependency Injection using RequireJS & AngularJS](http://solutionoptimist.com/2013/09/30/requirejs-angularjs-dependency-injection/)

- [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide#single-responsibility)

- [Angular-requirejs-seed](https://github.com/tnajdek/angular-requirejs-seed)

- [Ionic](http://ionicframework.com/)

- [Ionic Restify MongoDB – An End to End Hybrid App](http://thejackalofjavascript.com/an-end-to-end-hybrid-app/)

- [HTML5 Mobile Geolocation Tutorial](https://www.youtube.com/watch?v=me1SLfY5hus)

- [BackgroundGeoLocation](https://github.com/christocracy/cordova-plugin-background-geolocation)
