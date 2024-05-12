// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var assert = require('assert'), eq = assert.deepStrictEqual,
  parseArgs = require('../index.js');

eq(parseArgs(['say', '--exclaim', '--append-word=world', 'hello']),
  [{ append_word: 'world', exclaim: true }, 'say', 'hello']);



console.info('+OK usage tests passed.');
