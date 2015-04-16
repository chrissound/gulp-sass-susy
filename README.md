<h1 align="center">gulp-sass-susy</h1>

<p align="center">
  <a href="https://registry.hub.docker.com/u/revett/collectd/" target="_blank"><img src="https://img.shields.io/badge/Docker-Hub-3a9bdc.svg?style=flat-square"></a>
</p>

<p align="center">
  Docker container for running <b><a href="https://github.com/dlmanning/gulp-sass">gulp-sass</a></b> with <b><a href="https://github.com/ericam/susy/">Susy</a></b>.
</p>

### What is this?

A very simple Docker image for compiling SASS to CSS using gulp-sass, with global Susy support:

```sass
@import "susy";
```

### Usage

```
docker run -v /path/to/assets:/data revett/gulp-sass-susy
```

**Note**

`/path/to/assets`
  - This is your directory of static assets (SCSS, images, javascript).
  - It **must** contain a director named `scss/`.
  
### Results

The compiled CSS will be in the `css/` directory.

### Licence

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright (c) 2015 [Charlie Revett](http://twitter.com/charlierevett)
