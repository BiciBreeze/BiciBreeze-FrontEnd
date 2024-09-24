<template>
  <header-registration />
  <div class="login-view">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderRegistration from './context/Registration/components/header-registration.component.vue';

export default {
  components: {
    HeaderRegistration,
  },
};
</script>

<style scoped>
body {
  background: white;
}

.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  font-size: 19px;
  font-family: "Lexend", sans-serif;
}
</style>