# Konectpal UI
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

A minimalist front-end design toolkit built with Bootstrap, JavaScript, jQuery and Node.js for developing responsive, browser-consistent web apps. Konectpal also provides helpful, browser-consistent styling for default HTML elements - buttons, forms, tables, lists, and typography.

View Official UI documentation (Coming soon)

## Introduction

**What is Konectpal Invest?**

Konectpal Invest is the real estate hub for property owners and homebuyers. 
This platform is designed to connect homeowners with real cash offers.

### Project Scope
This is part of an ongoing project for a client in the real estate industry. The client initially needed a simple online presence to send traffic. Potential clients are sellers, investors, house flippers, land developers and real estate agents. 

For the initial release, I created a Bootstrap template website placing emphasis on being a mobile-first site as this target demographic was more likely to consume information while on the out on the job. This README.md showcases how you can get started with this template.

**Moving forward:**

New features is constantly being developed. I'm currently refactoring code to accommodate the following:
- RESTful API
- Graphic User Interface (GUI): Portal for internal purposes
- CLI

This documentation will be updated once the new functionality is in production.

### Download and Installation

Get started with the Konectpal UI.

### CSS

Copy-paste the **Bootstrap**, **FontAwesome** and then **Konectpal** stylesheets <link> into your <head> before all other stylesheets to load our CSS.
  
```html
<!-- CSS Global Compulsory -->
<link rel="stylesheet" href="../../assets/vendor/bootstrap/css/bootstrap.css">

<!-- CSS Implementing Plugins -->
<link rel="stylesheet" href="../../assets/vendor/font-awesome/css/fontawesome-all.min.css">

<!-- CSS Konectpal Template -->
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

<!-- JS Konectpal -->
<script src="../../assets/js/hs.core.js"></script>
```

### HTML Starter template
Be sure to have your pages set up with the latest design and development standards. That means using an [HTML5 doctype](https://en.wikipedia.org/wiki/HTML5) that includes the following: 
- Defines the website's [default language](http://www.w3schools.com/tags/ref_language_codes.asp) and [character set](https://en.wikipedia.org/wiki/UTF-8)
- Defines the [viewport meta tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) for proper mobile responsive behavior.
- **(Optional)** Loads the latest [Internet Explorer](https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx) browser. 
- Includes the Konectpal CSS, SASS and JavaScript files listed above.

Put it all together and your pages should look like this:

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

That's all you need for overall page requirements. 


## Directory Structure

The project contains the source and destination folders, as well as a few necessary project files.
- **dist** - the distribution folder that contains the final CSS, JavaScript, and HTML output.
- **src** - the source folder that contains all the `scss` files and folders.
- **.gitignore** - ignore `node_modules` and `.sass-cache` files.
- **package.json** - npm package folder to initialize `node_modules`

Here is a very simple example of the directory tree structure which is vastly simplified.

```bash
dist/
├── css/
│   ├── main.css
│   └── main.css.map
├── js/
│   └── script.js
├── images/
│   └── favicon.png
├── index.html
src/
└── scss/
    ├── base/
    │   ├── _mixins.scss
    │   ├── _normalize.scss
    │   ├── _reset.scss
    │   └── _variables.scss
    └── components/
        ├── _scaffolding.scss
        ├── _grid.scss
        ├── _helpers.scss
        ├── _buttons.scss
        ├── _forms.scss
        ├── _tables.scss
        ├── _navigation.scss
        └── _layout.scss
        main.scss
.gitignore
LICENSE.md
README.md
package-lock.json
package.json
```

## Main Sass File

If you look at my source docs, my primary sass file is named `./assets/scss/theme.scss`. 
For simplicity we'll creating a simple file called `./assets/scss/main.scss`.

Now that we've created the main Sass file, `main.scss`, its time to we'll pull in the configuration (variables and mixins) first, followed by resets, then all the components.

```scss
// Configuration
@import "base/variables";
@import "base/mixins";

// Reset
@import "base/normalize";
@import "base/reset";

// Components
@import "components/scaffolding";
@import "components/grid";
@import "components/helpers"; 
@import "components/buttons";
@import "components/forms";
@import "components/tables";
@import "components/navigation";
@import "components/layout";
```

Most of the components should be self-explanatory. **Scaffolding** is the main styling of typography, links, headings, etc. **Navigation** and **layout** are empty files, but I kept them in because they're generally necessary. Add more files as necessary (3rd party, fonts, etc).

### Configuration

Much of the design can be configured just by changing some settings in _variables.scss. This file will define your colors, typography, sizes, breakpoints, buttons, borders, and more. Define all your variables here to keep your project organized.

```scss
/*----------------------------------------------------------------------
  * Konectpal Variables - Responsive Website Template version v1.0
  * Copyright 2020 Fred Siika
------------------------------------------------------------------------*/

$root-path:             "../../";

// Breakpoints
// =======================================================

$xs:                    0;
$sm:                    576px;
$md:                    768px;
$lg:                    992px;
$xl:                    1200px;

$grid-breakpoints: (
     xs:                 $xs,
     sm:                 $sm,
     md:                 $md,
     lg:                 $lg,
     xl:                 $xl
 ) !default;

// =======================================================
// Color System
// =======================================================

// Stylelint-disable
// =======================================================

$white:                 #fff !default;
$white-soft:            rgba($white, 0.1) !default;
$dark:                  #151b26 !default;
$dark-soft:             rgba($dark, .4) !default;
$darker:                #181515 !default;
$header-color:          #5a5757 !default;

// Grays
// =======================================================

$gray-100:              #f5f8fb !default;
$gray-150:              #bfc3ca !default;
$gray-200:              #8f95a0 !default;
$gray-300:              #e3e6f0 !default;
$gray-400:              #d4d7dd !default;             
$gray-600:              #8c98a4 !default;
$gray-700:              #646f79 !default;

// Gray Palettes
// =======================================================

$darkgrey                 : #2c3643 !default
$titlegrey                : #3b444f !default
$bodygrey                 : #67747c !default
$lightgrey                : #99a9b3 !default
$subduedgrey              : #dbe6ec !default

// Primary Palette
// =======================================================
/* Coolors Exported Palette - coolors.co/85ffc7-091540-796eff-c9d7f8-646f79 */

$green                     : #85ffc7 !default;
$darkblue                  : #091540 !default;
$purple                    : #796eff !default;
$lightgrey                 : #c9d7f8 !default;
$darkgrey                  : #646f79 !default;
$teal                      : #0FDEBD !default;
$yellow                    : #feef6d !default;
$orange                    : #ffc83f !default;
$red                       : #fa5e5b !default;
$plum                      : #bf538d !default;

// Secondary Palette
// =======================================================
$mauve                     : #684e79 !default;
$pink                      : #ff708e !default;
$darkcyan                  : #47a899 !default;
$softblue                  : #8abee5 !default;
$softgreen                 : #c7e6aa !default;
$beige                     : #cfcbaf !default;
$maroon                    : #582c2b !default;
$darkred                   : #841e1b !default;


// Color List
// =======================================================

$color-palette-names: "darkgray" "titlegray" "bodygray" "lightgray" "subduedgray" "darkblue" "navblue" "lpblue" "linkblue" "teal" "green" "yella" "orange" "red" "plum" "mauve" "pink" "darkcyan" "softblue" "softgreen" "beige" "maroon" "darkred";
$color-palette: $darkgray $titlegray $bodygray $lightgray $subduedgray $darkblue $navblue $lpblue $linkblue $teal $green $yella $orange $red $plum $mauve $pink $darkcyan $softblue $softgreen $beige $maroon $darkred;

// Logical Theme Color:
// =======================================================
$primary:               #85ffc7 !default;
$primry-soft:           rgba($primary, .1) !default;
$secondary:             #646f79 !default;
$success:               #85ffc7 !default;
$info:                  #00dffc !default;
$warning:               #ffbc42 !default;
$danger:                #da4b48 !default;
$light:                 #f5f8fb !default;


// Physical Theme Color
// =======================================================
$blue:                  #1c6be1 !default;
$lightblue:              #00dffc !default;
$green:                 #85ffc7 !default;
$darkblue:              #091540 !default;
$purple:                #796eff !default;
$lightgrey:             #c9d7f8 !default;
$darkgrey:              #646f79 !default;

// Social Network Colors
// =======================================================
$facebook:              #3b5998 !default;
$google:                #d14130 !default;
$twitter:               #1da1f2 !default;
$instagram:             #3f729b !default;
$github:                #24292e !default;

// Social Network Colors:
// =======================================================
$social-network-colors: () !default;
$social-network-colors: map-merge((
  "facebook":           $facebook,
  "google":             $google,
  "twitter":            $twitter,
  "instagram":          $instagram,
  "github":             $github
), $social-network-colors);

// Theme Colors
// =======================================================
$theme-colors: () !default;
$theme-colors: map-merge((
  "blue":               $blue,
  "lightblue":          $lightblue,
  "green":              $green,
  "darkblue":           $darkblue,
  "purple":             $purple,
  "lightgrey":          $lightgrey,
  "darkgrey":           $darkgrey,
  "primary-soft":       $primary-soft,
  "white-soft":         $white-soft,
  "dark-soft":          $dark-soft,
), $theme-colors);
// Stylelint-enable


// Custom Setup
// =======================================================
//@import "user-variables";
```

Changing these default configurations will go a long way in setting the tone of the rest of your site.

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

**Permission has been granted by client to make this open-source.**
