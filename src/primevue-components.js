import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Card from 'primevue/card';
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import Toolbar from "primevue/toolbar";
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import AccordionTab from 'primevue/accordiontab';
import Toast from 'primevue/toast';
import Accordion from 'primevue/accordion';
import Checkbox from 'primevue/checkbox';
import RadioButton from "primevue/radiobutton";

import 'primeicons/primeicons.css'; // Importación de primeicons

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

    app.use(ToastService);
    app.directive('tooltip', Tooltip);


    app.component('pv-input-text', InputText);
    app.component('pv-button', Button);
    app.component('pv-float-label', FloatLabel);
    app.component('pv-toolbar', Toolbar);
    app.component('pv-Calendar', Calendar);
    app.component('pv-Dropdown', Dropdown);
    app.component('pv-Accordion', Accordion);
    app.component('pv-AccordionTab', AccordionTab);
    app.component('pv-Toast', Toast);
    app.component('pv-Card', Card);
    app.component('pv-Checkbox',Checkbox);
    app.component('pv-RadioButton',RadioButton);
};