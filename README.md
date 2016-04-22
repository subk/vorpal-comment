vorpal-comment
==============

[![Travis](https://img.shields.io/travis/subk/vorpal-comment.svg)](https://travis-ci.org/subk/vorpal-comment)
[![Codecov](https://img.shields.io/codecov/c/github/subk/vorpal-comment.svg?maxAge=2592000)](https://codecov.io/github/subk/vorpal-comment)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Bash-like comments for [Vorpal.js](http://vorpal.js.org/)

## Installation
```bash
$ npm i vorpal-comment
```

## Usage
```javascript
import Vorpal from 'vorpal';
import comment from 'vorpal-comment';

const vorpal = new Vorpal();

vorpal
  .use(comment)
  .delimiter('example>')
  .show();
```
```bash
example> # im a comment
example>
```

## Options
```javascript
const options = {
  command: '//',          // comments start with // instead of #
  alias: [ '--', '<<' ]   // define some aliases
}
vorpal.use(comment, options);
```
## License
MIT
