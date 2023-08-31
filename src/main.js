import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import TheForm from "./components/UI/TheForm.vue";
import TheInput from "./components/UI/TheInput.vue";


const app = createApp(App);

app.component('the-form', TheForm);
app.component('the-input', TheInput);

app.mount('#app');
