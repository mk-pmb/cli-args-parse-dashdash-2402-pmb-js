// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = function parseArgsDashDash(input) {
  var opt = {}, list = [opt], k, v;
  input.forEach(function each(arg) {
    if (arg.slice(0, 2) === '--') {
      k = arg.slice(2);
      k = (EX.splitOnce('=', k) || [k, true]);
      v = k[1];
      k = k[0];
      k = k.replace(/\-/g, '_');
      opt[k] = v;
      return;
    }
    list.push(arg);
  });
  return list;
};


EX.splitOnce = function splitOnce(s, t) {
  var p = t.indexOf(s);
  return ((p >= 0) && [t.slice(0, p), t.slice(p + 1)]);
};


module.exports = EX;