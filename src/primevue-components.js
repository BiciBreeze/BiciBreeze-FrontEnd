import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import Toolbar from "primevue/toolbar";

export default (app) => {
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'none',
                cssLayer: false
            }
        }
    });

    app.component('pv-input-text', InputText)
    app.component('pv-button', Button)
    app.component('pv-float-label', FloatLabel)
    app.component('pv-toolbar', Toolbar)
}