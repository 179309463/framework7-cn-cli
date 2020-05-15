const path = require('path');
const fse = require('../../../utils/fs-extra');
const generateHomePage = require('./generate-home-page');
const generateRoot = require('./generate-root');
const indent = require('../../utils/indent');

module.exports = (options) => {
  const cwd = options.cwd || process.cwd();
  const { template, bundler, type } = options;
  const toCopy = [];
  const srcFolder = bundler ? 'src' : 'www';

  // Copy Pages
  const pages = [
    ...(template !== 'blank' ? [
      '404',
      'about',
      'dynamic-route',
      'form',
      'request-and-load',
    ] : []),
    ...(template === 'tabs' ? [
      'catalog',
      'product',
      'settings',
    ] : []),
    ...(template === 'split-view' ? [
      'left-page-1',
      'left-page-2',
    ] : []),
  ];

  pages.forEach((p) => {
    const src = path.resolve(__dirname, 'pages', `${p}.html`);
    const dest = path.resolve(cwd, srcFolder, 'pages');
    if (bundler !== 'webpack') {
      toCopy.push({
        from: src,
        to: path.resolve(dest, `${p}.html`),
      });
    } else {
      let content = fse.readFileSync(src);
      if (content.trim().indexOf('<template') !== 0) {
        content = `<template>\n${content.trim()}\n</template>\n<script>\nexport default {};\n</script>`;
      } else {
        content = content.replace(/<script>([ \n]*)return {/, '<script>$1export default {');
      }
      toCopy.push({
        content,
        to: path.resolve(dest, `${p}.f7.html`),
      });
    }
  });
  if (bundler) {
    if (bundler === 'webpack') {
      toCopy.push({
        content: `<template>\n${indent(2, generateHomePage(options).trim())}\n</template>\n<script>\nexport default {}\n</script>`,
        to: path.resolve(cwd, srcFolder, 'pages', 'home.f7.html'),
      });
      toCopy.push({
        from: path.resolve(__dirname, 'template7-helpers-list.js'),
        to: path.resolve(cwd, srcFolder, 'template7-helpers-list.js'),
      });
      toCopy.push({
        content: generateRoot(options),
        to: path.resolve(cwd, srcFolder, 'app.f7.html'),
      });
    }

    toCopy.push({
      from: path.resolve(__dirname, 'babel.config.js'),
      to: path.resolve(cwd, 'babel.config.js'),
    });
  } else {
    // Copy F7
    toCopy.push(...[]);
    fse.readdirSync(path.resolve(cwd, 'node_modules', 'framework7-cn', 'js')).forEach((f) => {
      toCopy.push({
        from: path.resolve(cwd, 'node_modules', 'framework7-cn', 'js', f),
        to: path.resolve(cwd, srcFolder, 'framework7-cn', 'js', f),
      });
    });
    fse.readdirSync(path.resolve(cwd, 'node_modules', 'framework7-cn', 'css')).forEach((f) => {
      toCopy.push({
        from: path.resolve(cwd, 'node_modules', 'framework7-cn', 'css', f),
        to: path.resolve(cwd, srcFolder, 'framework7-cn', 'css', f),
      });
    });
    if (type.indexOf('cordova') >= 0) {
      toCopy.push({
        from: path.resolve(__dirname, 'cordova-plain-build', 'build.js'),
        to: path.resolve(cwd, 'build', 'build.js'),
      });
    }
  }

  return toCopy;
};
