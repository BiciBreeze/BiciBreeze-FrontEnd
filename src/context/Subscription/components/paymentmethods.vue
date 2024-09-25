<template>
  <div>
    <pv-button
        label="Suscribirse"
        class="w-full bg-blue-500 text-white rounded-full py-3 font-bold hover:bg-blue-600 transition duration-300"
        @click="openDialog"
    ></pv-button>

    <Dialog v-model:visible="isDialogVisible" header="Formulario de Pago" :modal="true" :closable="true" :style="{ width: '50vw' }">
      <div class="p-4">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <div class="relative">
                <i :class="['pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.firstName }]"></i>
                <pv-input-text id="firstName" v-model="form.firstName" name="firstName" type="text" required class="w-full pl-10" />
              </div>
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
              <div class="relative">
                <i :class="['pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.lastName }]"></i>
                <pv-input-text id="lastName" v-model="form.lastName" name="lastName" type="text" required class="w-full pl-10" />
              </div>
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div class="relative">
              <i :class="['pi pi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.email }]"></i>
              <pv-input-text id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="w-full pl-10" />
            </div>
          </div>
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Nombre de usuario</label>
            <div class="relative">
              <i :class="['pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.username }]"></i>
              <pv-input-text id="username" v-model="form.username" name="username" type="text" required class="w-full pl-10" />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div class="relative">
              <i :class="['pi pi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.password }]"></i>
              <pv-input-text id="password" v-model="form.password" name="password" type="password" required class="w-full pl-10" />
            </div>
          </div>
          <div>
            <label for="cardNumber" class="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
            <div class="relative">
              <i :class="['pi pi-credit-card absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.cardNumber }]"></i>
              <pv-input-text id="cardNumber" v-model="form.cardNumber" name="cardNumber" type="text" required class="w-full pl-10" />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
              <label for="expDate" class="block text-sm font-medium text-gray-700 mb-1">Fecha de expiración</label>
              <div class="relative">
                <i :class="['pi pi-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.expDate }]"></i>
                <pv-input-text id="expDate" v-model="form.expDate" name="expDate" type="text" required class="w-full pl-10" />
              </div>
            </div>
            <div>
              <label for="securityCode" class="block text-sm font-medium text-gray-700 mb-1">Código de seguridad</label>
              <div class="relative">
                <i :class="['pi pi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400', { 'hidden': form.securityCode }]"></i>
                <pv-input-text id="securityCode" v-model="form.securityCode" name="securityCode" type="text" required placeholder="CVC" class="w-full pl-10" />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="country" class="block text-sm font-medium text-gray-700 mb-1">País</label>
              <pv-dropdown id="country" v-model="form.country" :options="countries" optionLabel="label" optionValue="value" required placeholder="Selecciona un país" class="w-full" />
            </div>
            <div>
              <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
              <pv-input-text id="postalCode" v-model="form.postalCode" name="postalCode" type="text" required class="w-full" />
            </div>
          </div>
          <div class="flex items-center">
            <pv-checkbox id="terms" v-model="form.terms" name="terms" class="mr-2" />
            <label for="terms" class="block text-sm text-gray-900">
              Acepto los <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Términos y Condiciones</a>
            </label>
          </div>
          <div>
            <pv-button type="submit" label="Confirmar Pago" class="w-full bg-indigo-600 text-white rounded-md py-2 font-medium hover:bg-indigo-700" />
          </div>
        </form>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'

const isDialogVisible = ref(false)

const openDialog = () => {
  isDialogVisible.value = true
}

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  cardNumber: '',
  expDate: '',
  securityCode: '',
  country: '',
  postalCode: '',
  terms: false
})

const countries = [
  { label: 'España', value: 'ES' },
  { label: 'México', value: 'MX' },
  { label: 'Argentina', value: 'AR' },
  // Añade más países según sea necesario
]

const submitForm = () => {
  // Aquí iría la lógica para procesar el pago
  console.log('Formulario enviado:', form.value)
  // Normalmente, aquí enviarías los datos a tu backend o a un servicio de procesamiento de pagos
  alert('Pago confirmado. Gracias por tu compra!')
}
</script>

<style scoped>
/* Puedes añadir estilos adicionales aquí si lo deseas */
</style>