# Konectpal Investments
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

## Introduction 
Get started with the Konectpal Invest Responsive Website Template for building any responsive, mobile-first sites, with Bootstrap and a template starter page. 

### Getting Started

### CSS

Copy-paste the **Bootstrap**, **FontAwesome** and then **Konectpal** stylesheets <link> into your <head> before all other stylesheets to load our CSS.
  
```html
<!-- CSS Global Compulsory -->
<link rel="stylesheet" href="../../assets/vendor/bootstrap/css/bootstrap.css">

<!-- CSS Implementing Plugins -->
<link rel="stylesheet" href="../../assets/vendor/font-awesome/css/fontawesome-all.min.css">

<!-- CSS Space Template -->
<link rel="stylesheet" href="../../assets/css/theme.css">
```

### JS 
Many of Bootstrap's (since Konectpal runs on Bootstrap) components require the use of JavaScript to function. Specifically, they require [jQuery](https://jquery.com/), [Popper.js](https://popper.js.org/), Bootstrap JavaScript and our own JavaScript plugins. 

Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, then Popper.js, Bootstrap's JavaScript, and then our plugins.

Bootstrap and Konectpal use [jQuery's slim build](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/), but the full version is also supported.

All Konectpal plugins start with `hs.` prefix.

```js
<!-- JS Global Compulsory -->
<script src="../../assets/vendor/jquery/dist/jquery.min.js"></script>
<script src="../../assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
<script src="../../assets/vendor/popper.js/dist/umd/popper.min.js"></script>
<script src="../../assets/vendor/bootstrap/bootstrap.min.js"></script>

<!-- JS Space -->
<script src="../../assets/js/hs.core.js"></script>
```

### Starter template
Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```html
<!doctype html>
<html lang="en">
<head>
  <!-- Title -->
  <title>Hello, world!</title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.ico">

  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSS Global Compulsory -->
  <link rel="stylesheet" href="../../assets/vendor/bootstrap/css/bootstrap.css">

  <!-- CSS Implementing Plugins -->
  <link rel="stylesheet" href="../../assets/vendor/font-awesome/css/fontawesome-all.min.css">

  <!-- CSS Space Template -->
  <link rel="stylesheet" href="../../assets/css/theme.css">
</head>

<body>
  <h1>Hello, world!</h1>

  <!-- JS Global Compulsory -->
  <script src="../../assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="../../assets/vendor/popper.js/dist/umd/popper.min.js"></script>
  <script src="../../assets/vendor/bootstrap/bootstrap.min.js"></script>

  <!-- JS Space -->
  <script src="../../assets/js/hs.core.js"></script>
</body>
</html>
```

That's all you need for overall page requirements. Visit the [Bootstrap's Layout docs](https://getbootstrap.com/docs/4.1/layout/overview/) our official examples to start laying out your site's content and components.

### Important globals 

Konectpal employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the _normalization_ of cross browser styles. Let's dive in.

HTML5 doctype 
Space requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

### HTML5 doctype
Konectpal requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but includingi it shouldn't cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag 
Konectpal is developed _mobile first_, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

## File Structure

## Quick Start

### Gulp
Learn how to use Konectpal's included `npm` scripts to automate your time-consuming tasks in your development workflow with Gulp toolkit.

### Tooling setup
Konectpal uses [NPM scripts](https://docs.npmjs.com/misc/scripts) for its build system. Our `package.json` includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use our build system and run our documentation locally, you'll need a copy of Konectpal's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/download/), which we use to manage our dependencies.
2. [Download and install Gulp.js](https://nodejs.org/download/), which we use to manage our dependencies.
3. Navigate to the root `/Konectpal` directory and run `npm install` to install our local dependencies listed in `package.json`.

When completed, you'll be able to run the various commands provided from the command line.

### Installations 

#### Installing Node.js 

If you do not have Node installed already, you can get it by [downloading the package installer from Node's website](https://nodejs.org/en/). Please download the stable version of Node.js (LTS) **NOT** the latest.

#### Installing Gulp.js
You need to have Node.js (Node) installed onto your computer before you can install Gulp. When you're done with installing Node, you can install Gulp by using the following command in the command line:

```bash
npm install gulp-cli
```

Please note, first Gulp should be installed globally and for that reason -g command is used.

```bash
npm install gulp-cli -g
```

>**Important**
>If you are using MacOS please use `sudo` keyword in the command because they need >administrator rights to install Gulp globally.

#### Installing NPM modules 
First, change the command line path into your project where Konectpal folder is located. If you have not done this before, you may check the following article to quick start [Command Prompt - How to use the simple, basic commands](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands).

Once the path of your workflow is changed to Konectpal folder, you may run `package.json` file by using the following command:

```bash
npm install
```

This time, we're installing Gulp with its all dependency plugins like g`ulp-sass`, `gulp-autoprefixer` and etc. It might take a couple of minutes depends on your internet connection.

If you check the project folder when the command has finished executing, you should see that Gulp has created a `node_modules` folder.


#### Run Gulp 

Now we have an integrated workflow. To try it out run:

```bash
gulp
```

Now you can try making some changes to `assets/include/scss/theme.scss` and save it.

#### Gulp dist 
Run `gulp dist` to minify CSS, merge JS files into one file, compress images size and also updates the npm libraries to their available latest npm version.

```bash
gulp dist
```

>**Note**
>All npm libraries that are used in the Konectpal template can be seen in the `package.json` file.

#### Autoprefixer
Konectpal uses [Autoprefixer](https://github.com/postcss/autoprefixer) (included in our build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins.

## Credits
First, let us take this opportunity to thank all the creative minds for their great products and plugins.

All third-party plugins (libraries) are located in the `assets/vendor/..` folder, while image sources in the `assets/img/..` folder and Premium SVG files are in the `assets/svg/..` folder.

### Free plugins (libraries)
- [Animate.css](https://github.com/daneden/animate.css)
- [Appear.js](http://creativelive.github.io/appear/)
- [Bootstrap](https://getbootstrap.com/)
- [Custombox](http://dixso.github.io/custombox/)
- [Gmaps.js](http://hpneo.github.com/gmaps/)
- [Flag Icon CSS](https://github.com/lipis/flag-icon-css)
- [FontAwesome](https://fontawesome.com/)
- [Instafeed.js](http://instafeedjs.com/)
- [jQuery](https://jquery.com/)
- [jQuery Countdown](http://hilios.github.io/jQuery.countdown/)
- [jQuery Countdown](https://plugins.jquery.com/migrate/)
- [jQuery UI](http://jqueryui.com/)
- [jQuery Validation Plugin](http://jqueryvalidation.org/)
- [Popper.js](https://popper.js.org/)
- [Prism.js](http://prismjs.com/plugins/)
- [Slick](http://kenwheeler.github.io/slick/)
- [Typed.js](https://mattboldt.com/demos/typed-js/)
- [Player.js](https://github.com/vimeo/player.js)

### Free design sources 
- [Freebie Supply](https://freebiesupply.com/)
- [Free Designre Sources](https://freedesignresources.net/)
- [Google Fonts](https://fonts.google.com/specimen/Poppins)
- [Graphic Burger](http://graphicburger.com/)
- [Mockup Catalog](https://www.mockupcatalog.com/)
- [Undraw](https://undraw.co/illustrations)
- [Unplash](https://unsplash.com/)
- [Foodiesfeed](https://www.foodiesfeed.com/)


## Changelog

See what's new added, changed, fixed, improved or updated in the latest Space versions.

### 1.0 - 23 January 2020
Initial release


## Author
The Konectpal Invest website is created, written by, and maintained by [Fred Siika](https://github.com/fredsiika) and a team of swell people. The tech stack for this site is fairly [boring](https://css-tricks.com/simple-boring/). I've used GitHub pages to host the site since day one, a decision that I'm happy with. 
