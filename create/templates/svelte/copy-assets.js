const path = require('path');
const generateHomePage = require('./generate-home-page');
const generateRoot = require('./generate-root');

module.exports = (options) => {
  const cwd = options.cwd || process.cwd();
  const { template, bundler } = options;
  const toCopy = [];

  // Copy Pages
  const pages = [
    '404',
    'about',
    'dynamic-route',
    'form',
    'request-and-load',
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
    const src = path.resolve(__dirname, 'pages', `${p}.svelte`);
    const dest = path.resolve(cwd, 'src', 'pages', `${p}.svelte`);
    toCopy.push({
      from: src,
      to: dest,
    });
  });
  toCopy.push({
    content: generateHomePage(options),
    to: path.resolve(cwd, 'src', 'pages', 'home.svelte'),
  });
  toCopy.push({
    content: generateRoot(options),
    to: path.resolve(cwd, 'src', 'components', 'app.svelte'),
  });

  if (bundler) {
    toCopy.push({
      from: path.resolve(__dirname, 'babel.config.js'),
      to: path.resolve(cwd, 'babel.config.js'),
    });
  }

  return toCopy;
};
