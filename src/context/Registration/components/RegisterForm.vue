<template>
  <form @submit.prevent="submitForm">
    <div class="form-container">
      <h2>Register</h2>
      <div class="form-group">
        <label for="email">Email: </label>
        <pv-input-text type="email" v-model="email" placeholder="example@email.com" required />
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <pv-input-text type="password" v-model="password" placeholder="**********" required/>
      </div>
      <div class="form-group">
        <label for="password">Confirm Password: </label>
        <pv-input-text type="password" v-model="confirmPassword" placeholder="**********" required/>
      </div>
      <RouterLink to="/Login">
        <pv-button class="pv-button-register" :disabled="!isFormValid" @click="submitForm" type="submit">Register</pv-button>
      </RouterLink>
    </div>
  </form>
  <div class="to-login">
    <p>Already have an account?</p>
    <RouterLink to="/">
      <pv-button class="pv-button-login" type="submit" >Login</pv-button>
    </RouterLink>
  </div>

  <div class="mini-footer">
    <div class="footer-links">
      <a href="#">About</a>
      <a href="#">FAQ</a>
      <a href="#">Contact Us</a>
      <a href="#">Terms and Conditions</a>
    </div>
    <div class="social-icons">
      <img src="" alt="Facebook" />
      <img src="" alt="Twitter" />
      <img src="" alt="Instagram" />
    </div>
    <div class="footer-copy">
      <p>&copy; 2023 BiciBreeze</p>
  </div>
  </div>
</template>
  
  <script>
  export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },

    computed: {
      isFormValid() {
        return this.email && this.password && this.confirmPassword;
      }
    },

  methods: {
    submitForm() {
      // Emitimos el evento con los datos del formulario
      this.$emit('login', { email: this.email, password: this.password, confirmPassword: this.confirmPassword });
    }
  }
  }
  </script>
  
  <style scoped>

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  font-family: "Lexend", sans-serif;

}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  font-weight: bold;
  font-size: 15px;
}

.form-group label {
  margin-bottom: 5px;
}

.to-login{
  display: flex;
  flex-direction: column;
  font-family: "Lexend", sans-serif;
  justify-content: center;
  align-items: center;
}

.to-login p {
  color: rgba(79, 115, 150, 1)
}

.pv-button-register {
  background: rgba(20, 105, 194, 1);
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  border: none;
}

.pv-button-register:hover {
  background-color: rgb(248, 248, 248);
}

.pv-button-login {
  background: rgba(232, 237, 242, 1);
  font-weight: 600;
  color: black;
  border: none;
}

.pv-button-register:hover {
  background-color: rgba(20, 105, 194, 1);
}

.mini-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-family: "Lexend", sans-serif;
}

.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin-bottom: 15px;
}

.footer-links a {
  text-decoration: none;
  color: rgba(79, 115, 150, 1);
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  color: rgba(79, 115, 150, 1);
}

.footer-copy {
  color: rgba(79, 115, 150, 1);
  font-weight: bold;
}

  </style>
  