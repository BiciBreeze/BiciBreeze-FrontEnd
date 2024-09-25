<template>
  <div class="profile-container">
    <div class="profile-header">
      <img :src="profilePhotoUrl" class="profile-photo" alt="Profile Picture">
      <div class="profile-info">
        <h2>{{ user.name }}</h2>
        <p>{{ user.location }}</p>
      </div>
      <div class="profile-actions">
        <button class="btn update-photo">Update photo</button>
        <button class="btn verify-id">Verify your ID</button>
      </div>
    </div>

    <div class="profile-section">
      <h3>Personal info</h3>
      <div class="info-group">
        <div class="info-item">
          <p>Email</p>
          <span>{{ user.email }}</span>
          <button class="btn change-btn">Change</button>
        </div>
        <div class="info-item">
          <p>Password</p>
          <span>********</span>
          <button class="btn change-btn">Change</button>
        </div>
        <div class="info-item">
          <p>Payment</p>
          <span>********</span>
          <button class="btn change-btn">Add</button>
        </div>
      </div>
    </div>

    <div class="profile-section">
      <h3>Subscriptions</h3>
      <div class="info-item">
        <p>{{ user.subscription.name }}</p>
        <span>{{ user.subscription.details }}</span>
        <button class="btn change-btn">Edit</button>
      </div>
    </div>

    <div class="profile-section">
      <h3>Account balance</h3>
      <div class="info-item">
        <p>{{ user.accountBalance }}</p>
        <span>View details</span>
        <button class="btn change-btn">Add</button>
      </div>
    </div>

    <button class="btn deactivate-btn">Deactivate account</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Lily Smith",
        location: "San Francisco, CA",
        email: "lilysmith@gmail.com",
        subscription: {
          name: "Personal",
          details: "Billed monthly"
        },
        accountBalance: "$12.00"
      },
      profilePhotoUrl: "https://path/to/profile-photo.jpg"
    };
  }
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h2 {
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
}

.profile-info p {
  color: #777;
}

.profile-actions button {
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.profile-section {
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.profile-section h3 {
  margin-bottom: 20px;
}

.info-group {
  display: flex;
  flex-direction: column;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.info-item p {
  margin: 0;
}

.btn {
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.change-btn {
  background-color: #007bff;
  color: white;
}

.deactivate-btn {
  background-color: #ff4d4d;
  color: white;
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 1em;
}

.deactivate-btn:hover {
  background-color: #ff6666;
}

.btn:hover {
  opacity: 0.9;
}
</style>
