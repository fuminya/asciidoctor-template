const execSync = require('child_process').execSync,
  path = require('path'),
  fs = require('fs-extra'),
  mkdirp = require('mkdirp'),
  rimraf = require('rimraf');

const distDir = './dist',
  srcDir = './src',
  absPath = path.resolve('./stylesheets'),
  theme = 'riak.css',
  copyDir = ['images'];

rimraf.sync(distDir);
mkdirp(distDir);
copyDir.forEach((val) => {
  fs.copySync(`${srcDir}/${val}`, `${distDir}/${val}`);
});
execSync(`asciidoctor -a stylesheet=${theme} -a stylesdir=${absPath} ${srcDir}/index.adoc -o ${distDir}/index.html`);