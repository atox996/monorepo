import { createApp } from 'vue';
import App from './App.vue';
import { greet } from '@my/js-utils'; // 引入 js-utils 中的 greet 函数

createApp(App).mount('#app');

console.log(greet('World')); // 使用 greet 函数