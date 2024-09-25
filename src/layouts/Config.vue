<template>
  <div class="config-page">
    <!-- Simulador de un header -->
    <header class="header"></header>

    <!-- Contenedor de la configuración -->
    <div class="config-container min-h-screen flex align-items-center justify-content-center">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-8">
        <h1 class="text-3xl font-bold mb-4">Configuration</h1>

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Profile</h2>
          <div class="flex align-items-center mb-3">
            <Avatar :image="config.avatar || 'https://www.apple.com/leadership/images/bio/tim-cook_image.png.og.png?1724088613210'" size="xlarge" shape="circle" class="mr-3" />
            <div class="flex-1">
              <InputText v-model="config.username" placeholder="Nombre de usuario" class="w-full mb-2" />
              <InputText v-model="config.email" placeholder="tu@ejemplo.com" type="email" class="w-full" />
            </div>
          </div>
        </div>

        <Divider />

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Appearance</h2>
          <div class="flex align-items-center justify-content-between mb-3">
            <div class="flex align-items-center">
              <i :class="['pi', config.darkMode ? 'pi-moon' : 'pi-sun', 'mr-2']"></i>
              <label for="dark-mode">Dark Mode</label>
            </div>
            <InputSwitch v-model="config.darkMode" inputId="dark-mode" />
          </div>
          <div class="mb-3">
            <label for="language" class="block mb-2">Language</label>
            <Dropdown v-model="config.language" :options="languageOptions" optionLabel="name" optionValue="code" placeholder="Selecciona un idioma" class="w-full" />
          </div>
        </div>

        <Divider />

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Privacy</h2>
          <div class="mb-3">
            <label for="privacy" class="block mb-2">Privacy level</label>
            <Dropdown v-model="config.privacyLevel" :options="privacyOptions" optionLabel="name" optionValue="value" placeholder="Selecciona nivel de privacidad" class="w-full" />
          </div>
          <div class="flex align-items-center justify-content-between">
            <div class="flex align-items-center">
              <i class="pi pi-eye mr-2"></i>
              <label for="activity-visibility">Visibility of activity</label>
            </div>
            <InputSwitch v-model="activityVisibility" inputId="activity-visibility" />
          </div>
        </div>

        <Divider />

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Notifications</h2>
          <div class="flex align-items-center justify-content-between mb-3">
            <div class="flex align-items-center">
              <i class="pi pi-bell mr-2"></i>
              <label for="push-notifications">Notificaciones push</label>
            </div>
            <InputSwitch v-model="config.notifications.push" inputId="push-notifications" />
          </div>
          <div class="flex align-items-center justify-content-between">
            <div class="flex align-items-center">
              <i class="pi pi-envelope mr-2"></i>
              <label for="email-notifications">Email notifications</label>
            </div>
            <InputSwitch v-model="config.notifications.email" inputId="email-notifications" />
          </div>
        </div>

        <Divider />

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Security</h2>
          <div class="flex align-items-center justify-content-between mb-3">
            <div class="flex align-items-center">
              <i class="pi pi-lock mr-2"></i>
              <label for="two-factor">Two-factor authentication</label>
            </div>
            <InputSwitch v-model="config.twoFactor" inputId="two-factor" />
          </div>
          <Button label="Cambiar contraseña" icon="pi pi-key" @click="changePassword" class="p-button-outlined" />
        </div>

        <Divider />

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Accessibility</h2>
          <div class="mb-3">
            <label for="font-size" class="block mb-2">Font size: {{ config.fontSize }}px</label>
            <Slider v-model="config.fontSize" :min="12" :max="24" class="w-full" />
          </div>
        </div>

        <Divider />

        <div class="mb-5">
          <h2 class="text-xl font-semibold mb-3">Integrations</h2>
          <div class="flex align-items-center justify-content-between mb-3" v-for="platform in socialPlatforms" :key="platform.name">
            <div class="flex align-items-center">
              <i :class="['pi', platform.icon, 'mr-2']"></i>
              <label :for="`${platform.name}-integration`">Connect with {{ platform.label }}</label>
            </div>
            <InputSwitch v-model="config.socialConnections[platform.name]" :inputId="`${platform.name}-integration`" @change="handleSocialConnection(platform.name)" />
          </div>
        </div>

        <Button label="Guardar cambios" icon="pi pi-check" @click="saveChanges" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import Avatar from 'primevue/avatar';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import InputSwitch from 'primevue/inputswitch';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Slider from 'primevue/slider';

// Simulación de datos de configuración
const toast = useToast();
const config = ref({
  darkMode: false,
  notifications: {
    push: false,
    email: true,
  },
  language: 'es',
  email: '',
  username: '',
  privacyLevel: 'friends',
  twoFactor: false,
  fontSize: 16,
  socialConnections: {
    facebook: false,
    twitter: false,
    instagram: false,
  },
});

const languageOptions = [
  { name: 'Español', code: 'es' },
  { name: 'English', code: 'en' },
  { name: 'Français', code: 'fr' },
  { name: 'Deutsch', code: 'de' },
];

const privacyOptions = [
  { name: 'Públic', value: 'public' },
  { name: 'Friens Only', value: 'friends' },
  { name: 'Privade', value: 'private' },
];

const socialPlatforms = [
  { name: 'facebook', label: 'Facebook', icon: 'pi-facebook' },
  { name: 'twitter', label: 'Twitter', icon: 'pi-twitter' },
  { name: 'instagram', label: 'Instagram', icon: 'pi-instagram' },
];

const activityVisibility = computed({
  get: () => config.value.privacyLevel !== 'private',
  set: (value) => {
    config.value.privacyLevel = value ? 'friends' : 'private';
  },
});

onMounted(() => {
  // Simular carga de configuración desde el servidor
  const savedConfig = localStorage.getItem('userConfig');
  if (savedConfig) {
    config.value = JSON.parse(savedConfig);
  }
});

const handleSocialConnection = (platform) => {
  const isConnected = config.value.socialConnections[platform];
  toast.add({
    severity: 'info',
    summary: isConnected ? `Conectado a ${platform}` : `Desconectado de ${platform}`,
    detail: 'La conexión se ha actualizado correctamente.',
    life: 3000,
  });
};

const changePassword = () => {
  toast.add({
    severity: 'info',
    summary: 'Cambio de contraseña',
    detail: 'Función no implementada en este ejemplo.',
    life: 3000,
  });
};

const saveChanges = () => {
  localStorage.setItem('userConfig', JSON.stringify(config.value));
  toast.add({
    severity: 'success',
    summary: 'Cambios guardados',
    detail: 'Tu configuración se ha actualizado correctamente.',
    life: 3000,
  });
};
</script>

<style scoped>
/* Aumentamos la altura del header y ajustamos el espaciado */
.header {
  height: 100px; /* Tamaño simulado del header */
  background-color: var(--primary-color); /* Simula un header */
}

.config-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.config-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 500px; /* Añadimos margen superior para bajar la vista */
}

.surface-card {
  width: 100%;
  max-width: 1400px; /* Aumentamos el ancho máximo */
}

h1, h2 {
  text-align: center;
}

.mb-5 {
  margin-bottom: 2rem;
}

.flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.w-full {
  width: 100%;
}

.lg\:w-8 {
  width: 100%; /* Aumentamos el ancho */
}

.p-4 {
  padding: 1rem;
}

.shadow-2 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.border-round {
  border-radius: 0.5rem;
}
</style>