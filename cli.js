#!/usr/bin/env node
'use strict';

const svgdir2sprite = require('./');
const argv = require('yargs')
.demandCommand(1, 'Warning: Please set a source directory for loose svg\'s')
.example('$0 ./svgs', ':: Output to console')
.example('$0 ./svgs ./build/file.svg', ':: Output to file')
.alias('help', 'h')
.help()
.version()
.wrap(process.stdout.columns)
.argv;

let [src, dest] = argv._;

svgdir2sprite(src, dest)
.then((svgContents) => {
  if (dest) {
    console.log('Spritesheet successfully generated as ' + dest);
  } else {
    console.log(svgContents);
  }
}); 
