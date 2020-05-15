const indent = require('../utils/indent');

module.exports = (options) => {
  const {
    components = [],
    themes = [],
    rtl = false,
    lightTheme = true,
    darkTheme = true,
  } = options.customBuildConfig || {};
  const { framework } = options;


  const componentsImportsJS = components.map((c) => {
    const name = c
      .split('-')
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join('');
    return `import ${name} from 'framework7-cn/components/${c}/${c}.js';`;
  });
  const componentsNamesJS = components.map((c) => {
    return c
      .split('-')
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join('');
  });

  const scripts = indent(0, `
    import Framework7Cn, { Device, Request, Utils } from '${framework === 'core' ? 'framework7-cn' : 'framework7-cn/framework7-lite.esm.js'}';
    ${componentsImportsJS.join('\n    ')}

    Framework7Cn.use([
      ${componentsNamesJS.join(',\n      ')}
    ]);

    export default Framework7Cn;
    export { Device, Request, Utils };
  `);

  const componentsImportsLESS = components.map((c) => {
    return `@import url('../../node_modules/framework7-cn/components/${c}/${c}.less');`;
  });
  const styles = indent(0, `
    & {
      @import url('../../node_modules/framework7-cn/framework7.less');
      ${componentsImportsLESS.join('\n      ')}

      @includeIosTheme: ${themes.indexOf('ios') >= 0};
      @includeMdTheme: ${themes.indexOf('md') >= 0};
      @includeAuroraTheme: ${themes.indexOf('aurora') >= 0};
      @includeDarkTheme: ${darkTheme || false};
      @includeLightTheme: ${lightTheme || false};
      @rtl: ${rtl}
    }
  `);

  return {
    styles,
    scripts,
  };
};
