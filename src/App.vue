<template>
  <div id="app">
    <header>
      <nav class="p-mb-4">
        <Button label="Inicio" icon="pi pi-home" @click="goHome" />
        <Button label="Perfil" icon="pi pi-user" @click="goToProfile" />
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2024 Bicibreeze. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';
import Button from 'primevue/button'; // Importa el componente Button de PrimeVue

export default {
  name: 'App',
  components: {
    Button // Registra el componente Button
  },
  setup() {
    const router = useRouter();

    const goHome = () => {
      router.push('/');
    };

    const goToProfile = () => {
      router.push('/profile');
    };

    return {goHome, goToProfile};
  }
};
</script>

<style>
/* Estilos globales para la aplicación */
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  background-color: #009688;
  padding: 1rem;
  text-align: center;
}

nav Button {
  margin: 0.5rem;
}

footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

main {
  padding: 1rem;
}

/* Estilos responsivos */
@media screen and (max-width: 768px) {
  header {
    padding: 0.5rem;
  }
  nav Button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>