// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var assert = require('assert'), eq = assert.deepStrictEqual,
  parseArgs = require('../index.js');

eq(parseArgs([
  'say',
  '--exclaim',
  '--append-word=world',
  '--===',
  '--',
  'hello',
  '--bold',
  '--',
  '--italic',
]), [
  {
    append_word: 'world',
    exclaim: true,
    '': '==',
  },
  'say',
  'hello',
  '--bold',
  '--',
  '--italic',
]);



console.info('+OK usage tests passed.');
