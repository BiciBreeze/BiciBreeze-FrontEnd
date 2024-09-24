<template>
  <div class="login-container">
    <header-registration />
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <h2 class="inicio">Inicia sesión</h2>
        <label for="email">Correo electrónico</label>
        <input type="email" v-model="email" placeholder="ejemplo@universidad.com" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" v-model="password" placeholder="******" required />
      </div>
      <button type="submit"><b>Iniciar Sesión</b></button>
      <div class="options">
        <a class="xd1" href="#">Olvidé mi contraseña</a>
        <p class="xd"><a href="#" style="text-decoration: none;">¿No tienes una cuenta?</a></p>
        <router-link to="/register">
          <button class="regist" type="button"><b>Registrate</b></button>
        </router-link>
        <p class="xd"><a href="#" style="text-decoration: none;">O inica sesión con</a></p>
        <div class="hola">
          <button class="hola1" type="button"><b>Google</b></button>
          <button class="hola2" type="button"><b>Apple</b></button>
        </div>
      </div>
    </form>
    <footer-registration />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { login } from '@/auth';
import FooterRegistration from "@/context/Registration/components/footer-registration.component.vue";

export default {
  components: {
    FooterRegistration
  },
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const submitForm = () => {
      // Simulate login success
      login();
      router.push('/home');
    };

    return {
      email,
      password,
      submitForm
    };
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: left;
  font-size: 19px;
  font-family: "Lexend", sans-serif;
}

.inicio {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 16px;
  background-color: #3480d1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.options {
  margin-top: 10px;
}

.options .regist {
  width: 100%;
  padding: 10px;
  background-color: #c2c2c2;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 16px;
}

.xd {
  text-align: right;
  font-size: medium;
}

.xd1 {
  font-size: medium;
  text-decoration: none;
}

.hola {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

.hola1, .hola2 {
  background-color: #c2c2c2;
  color: black;
}
</style>