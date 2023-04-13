import "./public-path";
import { App, createApp } from "vue";
import AppNode from "./App.vue";
import router from "./router";

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
  }
}

let app: App | null = null;

export async function bootstrap(props: any) {
  console.log("bootstrap", props);
}

function render(props = {}) {
  if (!app) {
    app = createApp(AppNode);
    app.use(router).mount("#app");
  }
}

export async function mount(props: any) {
  console.log("mount", props);
  render();
}

export async function unmount() {
  if (app) {
    app.unmount();
  }
  app = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
