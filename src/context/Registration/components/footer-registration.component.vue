<script>

</script>

<template>

  <div class="mini-footer">
    <div class="footer-links">
      <a href="#">About</a>
      <a href="#">FAQ</a>
      <a href="#">Contact Us</a>
      <a href="#">Terms and Conditions</a>
    </div>
    <div class="social-icons">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" />
      <img src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_circle_icon_256076.png" alt="Twitter" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />
    </div>
    <div class="footer-copy">
      <p>&copy; 2024 BiciBreeze</p>
      
    </div>
  </div>
</template>

<style scoped>
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
  margin: 0 10px;
}

.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
  color: rgba(79, 115, 150, 1);
}

.social-icons img {
  width: 30px;
  height: 20px;
  margin: 0 10px;
}

.footer-copy {
  color: rgba(79, 115, 150, 1);
  font-weight: bold;
}
</style>