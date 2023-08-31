import { createApp } from 'vue';
import App from './App.vue';

import BaseForm from "./components/UI/BaseForm.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import BaseButton from "./components/UI/BaseButton.vue";


const app = createApp(App);

app.component('base-form', BaseForm);
app.component('base-input', BaseInput);
app.component('base-button', BaseButton);

app.mount('#app');
