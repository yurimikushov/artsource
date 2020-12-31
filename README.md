![GitHub tag (latest by date)](https://img.shields.io/github/v/release/yurimikushov/artsource) ![GitHub Release Date](https://img.shields.io/github/release-date/yurimikushov/artsource) ![GitHub last commit](https://img.shields.io/github/last-commit/yurimikushov/artsource) ![GitHub](https://img.shields.io/github/license/yurimikushov/artsource)

# Artsource

My friend's landing page implemented on Pug, SCSS and JS. This project is built using Gulp task runner.

![Preview](docs/img/preview.png)

# Full view

To view the full landing page [follow link](docs/landing-page-view.md).

# How to use it

Installs the project

```
git clone https://github.com/yurimikushov/artsource.git
cd artsource
npm i
```

Minifies a images in the `src/images/**` directory

```
npm run imagemin
```

Checks a follow CSS and SCSS writing conventions

```
npm run stylelint
```

Runs the project in `development` mode

```
npm run start
```

Builds the project for `production` to the `build` directory

```
npm run build
```

# License

The project is open source and available under the [MIT License](LICENSE).
