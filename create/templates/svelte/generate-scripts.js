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
    // Import Framework7Cn
    import Framework7Cn from '${customBuild ? './framework7-cn-custom.js' : 'framework7-cn/framework7-lite.esm.bundle.js'}';

    // Import Framework-CN-Svelte Plugin
    import Framework7CnSvelte from 'framework7-cn-svelte';

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
    import App from '../components/app.svelte';

    // Init F7 Svelte Plugin
    Framework7Cn.use(Framework7CnSvelte)

    // Mount Svelte App
    const app = new App({
      target: document.getElementById('app'),
    });
  `);

  return scripts.trim();
};
