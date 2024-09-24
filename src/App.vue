<template>
  <header-registration />

  <div class="login-view">
   
    <router-view></router-view>
  </div>
  
</template>

<script>
import LoginForm from './context/Registration/components/login-form.component.vue';
import HeaderRegistration from './context/Registration/components/header-registration.component.vue';

export default {
  components: {
    LoginForm,
    HeaderRegistration,
  },
  methods: {
    handleLogin(credentials) {
      console.log('Inicio de sesión con:', credentials);
      
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
  max-width: 500px;
  margin-top: 2%;
  margin-left: 7% ;
  padding: 20px;
  text-align: left;
  font-size: 19px;
  font-family: "Lexend", sans-serif;
}

</style>
