<template>
  <div>
    <form @submit.prevent="onSignUp">
      <div class="form-container">
        <h2>Register</h2>
        <div class="form-group">
          <label for="email">Email: </label>
          <pv-input-text type="email" v-model="username" placeholder="example@email.com" required />
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
          <pv-button class="pv-button-register" :disabled="!isFormValid" @click="onSignUp" type="submit">Register</pv-button>
        </RouterLink>
      </div>
    </form>
    <div class="to-login">
      <p>Already have an account?</p>
      <RouterLink to="/Login">
        <pv-button class="pv-button-login" type="submit">Login</pv-button>
      </RouterLink>
    </div>
    <footer-registration />
  </div>
</template>

<script>
import FooterRegistration from "@/context/Registration/components/footer-registration.component.vue";
import { useAuthenticationStore } from "@/context/iam/services/authentication.store.js";
import { SignUpRequest } from "@/context/iam/model/sign-up.request.js";

export default {
  name: "sign-up",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  components: {
    FooterRegistration
  },
  computed: {
    isFormValid() {
      return this.username && this.password && this.confirmPassword;
    }
  },
  methods: {
    onSignUp() {
      let authenticationStore = useAuthenticationStore();
      let signUpRequest = new SignUpRequest(this.username, this.password);
      authenticationStore.signUp(signUpRequest, this.$router);
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

.to-login {
  display: flex;
  flex-direction: column;
  font-family: "Lexend", sans-serif;
  justify-content: center;
  align-items: center;
}

.to-login p {
  color: rgba(79, 115, 150, 1);
}

.pv-button-register {
  background: rgba(20, 105, 194, 1);
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  border: none;
}

.pv-button-register:hover {
  background-color: rgba(20, 105, 194, 1);
}

.pv-button-login {
  background: rgba(232, 237, 242, 1);
  font-weight: 600;
  color: black;
  border: none;
}

.pv-button-login:hover {
  background-color: rgba(20, 105, 194, 1);
}
</style>