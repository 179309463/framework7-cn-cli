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
    // Import Vue
    import Vue from 'vue';

    // Import Framework7Cn
    import Framework7Cn from '${customBuild ? './framework7-cn-custom.js' : 'framework7-cn/framework7-lite.esm.bundle.js'}';

    // Import Framework-CN-Vue Plugin
    import Framework7CnVue from 'framework7-cn-vue/framework7-vue.esm.bundle.js';

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
    import App from '../components/app.vue';

    // Init Framework7-Cn-Vue Plugin
    Framework7Cn.use(Framework7CnVue);

    // Init App
    new Vue({
      el: '#app',
      render: (h) => h(App),

      // Register App Component
      components: {
        app: App
      },
    });
  `);

  return scripts.trim();
};
