
<!--#echo json="package.json" key="name" underline="=" -->
cli-args-parse-dashdash-2402-pmb
================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Yet another arguments parser. Similar to minimist but --optname yields {
optname: true } rather than eating the next argument.
<!--/#echo -->



API
---

This module exports one function:

### parseArgs(input)

`input` is an array of CLI arguments.

Returns an array whose first item is a plain object with "keyed options"
(see below), potentially followed by "raw" arguments (see below).

Four types of arguments are recognized:

* `--key=value`: Keyed argument, where both key and value are strings,
  potentially empty.
* `--key`: Keyed argument, where key is a non-empty string.
  The value will be boolean `true`.
* `--`: Ignored, but all remaining arguments are treated as "raw".
* (any other): Raw argument.

In key names, all dashes (`-`) are replaced with low line (`_`).



Usage
-----

see [test/usage.js](test/usage.js).

<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
