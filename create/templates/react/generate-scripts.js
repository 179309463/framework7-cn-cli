const templateIf = require('../../utils/template-if');
const indent = require('../../utils/indent');
const stylesExtension = require('../../utils/styles-extension');

module.exports = (options) => {
  const {
    bundler,
    cssPreProcessor,
    theming,
    customBuild,
  } = options;

  let scripts = '';

  scripts += indent(0, `
    // Import React and ReactDOM
    import React from 'react';
    import ReactDOM from 'react-dom';

    // Import Framework7Cn
    import Framework7Cn from '${customBuild ? './framework7-cn-custom.js' : 'framework7-cn/framework7-lite.esm.bundle.js'}';

    // Import Framework-CN-React Plugin
    import Framework7CnReact from 'framework7-cn-react';

    ${templateIf(bundler === 'webpack', () => `
    // Import Framework7Cn Styles
    ${templateIf(customBuild, () => `
    import '../css/framework7-cn-custom.less';
    `, () => `
    import 'framework7-cn/css/framework7.bundle.css';
    `)}

    // Import Icons and App Custom Styles
    ${templateIf(theming.iconFonts, () => `
    import '../css/icons.css';
    `)}
    import '../css/app.${stylesExtension(cssPreProcessor)}';
    `)}

    // Import App Component
    import App from '../components/app.jsx';

    // Init F7 React Plugin
    Framework7Cn.use(Framework7CnReact)

    // Mount React App
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('app'),
    );
  `);

  return scripts.trim();
};
