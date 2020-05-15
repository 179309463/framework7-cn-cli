// Import Vue
import Vue from 'vue';

// Import Framework7Cn
import Framework7Cn from 'framework7-cn/framework7-lite.esm.js';
import Input from 'framework7-cn/components/input/input';
import Dialog from 'framework7-cn/components/dialog/dialog';
import ColorPicker from 'framework7-cn/components/color-picker/color-picker';
import Popover from 'framework7-cn/components/popover/popover';
import Range from 'framework7-cn/components/range/range';
import Toggle from 'framework7-cn/components/toggle/toggle';
import Popup from 'framework7-cn/components/popup/popup';
import Tooltip from 'framework7-cn/components/tooltip/tooltip';

// Import Framework-CN-Vue Plugin
import Framework7CnVue from 'framework7-cn-vue';

// Import Framework7Cn Styles
import 'framework7-cn/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Cn-Vue Plugin
Framework7Cn.use(Framework7CnVue);
Framework7Cn.use([
  Input,
  Dialog,
  ColorPicker,
  Popover,
  Range,
  Toggle,
  Popup,
  Tooltip,
]);

// Init App
const app = new Vue({
  el: '#app',
  render: h => h(App),
  // Register App Component
  components: {
    app: App,
  },
});

export default app;
