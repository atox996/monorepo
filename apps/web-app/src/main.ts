import { createApp } from "vue";

import App from "./App.vue";

createApp(App).mount("#app");

console.log(`%c Build Time:  ${__BUILDTIME__}`, "color: #3488ff");
console.log(`%c Last Commit: ${__COMMITID__}`, "color: #3488ff");
