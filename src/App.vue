<template>
  <div class="login-view">
    <router-view></router-view>
  </div>
</template>

<script>
import LoginForm from './context/Registration/components/LoginForm.vue';

export default {
  components: {
    LoginForm
  },
  methods: {
    handleLogin(credentials) {
      console.log('Inicio de sesión con:', credentials);
      // Aquí puedes manejar la lógica del login (enviar los datos a una API o hacer alguna validación)
    }
  }
}
</script>

<style scoped>
body {
  background: white;
}

.login-view {
  width: 100%;
  max-width: 400px;
  margin-right: 50px ;
  padding: 20px;
  text-align: left;
}
</style>
