import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// global components
import BaseBadge from "./components/ui/BaseBadge.vue";

const app = createApp(App)

// register global components
app.component("BaseBadge", BaseBadge)

app.use(store).use(router).mount("#app");
