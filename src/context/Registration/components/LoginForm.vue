<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <h2>Inicia sesión</h2>
      <label for="email">Correo electrónico</label>
      <input type="email" v-model="email" placeholder="ejemplo@universidad.com" required />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" v-model="password" placeholder="******" required />
    </div>
    <button type="submit">Iniciar sesión</button>
    <div class="options">
      <a href="#">Olvidé mi contraseña</a>
      <p>¿No tienes una cuenta?</p>
      <RouterLink to="/Register">
        <button class="regist" type="submit" >Registrate</button>
      </RouterLink> 
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Emitimos el evento con los datos del formulario
      this.$emit('login', { email: this.email, password: this.password });
    }
  }
}
</script>

<style scoped>
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
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
}
</style>
