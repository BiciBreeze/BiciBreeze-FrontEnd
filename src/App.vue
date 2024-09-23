<template>
  <HeaderComponent></HeaderComponent>
  <hr>
  <div class="login-view">
  
    <router-view></router-view>
    
  </div>
  
</template>

<script>
import HeaderComponent from './context/Registration/components/HeaderComponent.vue';
import LoginForm from './context/Registration/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
    HeaderComponent,
    
  },
  methods: {
    handleLogin(credentials) {
      console.log('Inicio de sesión con:', credentials);
      
    }
  }
}
</script>

<style scoped>
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
