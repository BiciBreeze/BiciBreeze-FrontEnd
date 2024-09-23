<template>
  <div class="user-profile p-grid p-justify-center">
    <div class="profile-card p-col-12 p-md-8 p-lg-6">
      <Card class="profile-info">
        <h2>{{ user.username }}</h2>
        <div class="profile-details">
          <p><i class="pi pi-envelope"></i> {{ user.email }}</p>
          <p><i class="pi pi-calendar"></i> Fecha de registro: {{ registrationDate }}</p>
        </div>
        <Button
            v-if="!isEditing"
            label="Editar Perfil"
            icon="pi pi-pencil"
            class="p-button-rounded p-mt-2"
            @click="isEditing = true"
        />
        <form v-if="isEditing" @submit.prevent="updateUser">
          <div class="p-field">
            <label for="username">Nombre de usuario</label>
            <InputText v-model="user.username" id="username" required />
          </div>
          <div class="p-field">
            <label for="email">Correo electrónico</label>
            <InputText v-model="user.email" id="email" required />
          </div>
          <Button label="Guardar" icon="pi pi-check" class="p-mt-2" />
          <Button
              label="Cancelar"
              icon="pi pi-times"
              class="p-button-secondary p-mt-2"
              @click="cancelEdit"
          />
        </form>
      </Card>

      <Card class="subscription-info p-mt-4">
        <h3>Detalles de la suscripción</h3>
        <p>Plan actual: {{ subscription.plan }}</p>
        <p>Fecha de renovación: {{ subscription.renewalDate }}</p>
      </Card>
    </div>
  </div>
</template>

<script>
import userService from '../services/userService';

export default {
  data() {
    return {
      user: {
        username: 'john_doe',
        email: 'john@example.com',
      },
      subscription: {
        plan: 'Premium',
        renewalDate: '2024-10-01',
      },
      isEditing: false,
      registrationDate: '2024-01-15',
    };
  },
  methods: {
    async updateUser() {
      try {
        await userService.updateUser(this.user);
        this.isEditing = false;
      } catch (error) {
        // Manejar el error
      }
    },
    cancelEdit() {
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
/* Estructura principal y alineación */
.user-profile {
  padding: 2rem;
  margin: 0 auto;
  max-width: 800px;
}

.profile-card {
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-info, .subscription-info {
  padding: 2rem;
  margin-bottom: 2rem;
}

.profile-info h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.profile-details {
  margin-bottom: 1rem;
}

.profile-details p {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  color: #666;
}

.profile-details i {
  margin-right: 0.5rem;
  color: #333;
}

/* Botones */
button {
  display: block;
  margin: 1rem auto;
}

/* Formulario de edición */
form {
  margin-top: 1rem;
}

form .p-field {
  margin-bottom: 1rem;
}

form label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

/* Estilos responsivos */
@media screen and (max-width: 768px) {
  .user-profile {
    padding: 1rem;
  }

  .profile-card {
    padding: 1rem;
  }

  .profile-info h2 {
    font-size: 1.5rem;
  }
}
</style>