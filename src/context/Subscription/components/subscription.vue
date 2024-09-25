<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="max-w-4xl w-full space-y-8">
      <h1 class="text-4xl font-bold text-center text-gray-900">Elige tu plan</h1>

      <div class="flex justify-center items-center space-x-4 mb-8">
        <span :class="{ 'font-bold': !isAnnual }">Mensual</span>
        <!-- PrimeVue Checkbox Switch -->
        <pv-Checkbox v-model="isAnnual" binary class="p-d-flex p-ai-center">
          <template #checkicon>
            <span class="slider round"></span>
          </template>
        </pv-Checkbox>
        <span :class="{ 'font-bold': isAnnual }">Anual</span>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
            v-for="(plan, index) in plans"
            :key="index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            :class="{ 'border-2 border-blue-500': plan.recommended }"
        >
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ plan.name }}</h2>
            <p class="text-gray-600 mb-6">{{ plan.description }}</p>
            <div class="text-4xl font-bold text-gray-900 mb-6">
              {{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
              <span class="text-lg font-normal text-gray-600">/{{ isAnnual ? 'año' : 'mes' }}</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                <!-- PrimeIcons Check -->
                <i class="pi pi-check text-green-500 mr-2"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <!-- PrimeVue Button -->
            <pv-button
                label="Suscribirse"
                class="w-full bg-blue-500 text-white rounded-full py-3 font-bold hover:bg-blue-600 transition duration-300"
                @click="subscribe(plan)"
            ></pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'



const isAnnual = ref(false)

const plans = [
  {
    name: 'Básico',
    description: 'Perfecto para empezar',
    monthlyPrice: '€9.99',
    annualPrice: '€99.99',
    features: [
      'Acceso a contenido básico',
      'Soporte por email',
      'Actualizaciones mensuales'
    ]
  },
  {
    name: 'Pro',
    description: 'Para usuarios avanzados',
    monthlyPrice: '€19.99',
    annualPrice: '€199.99',
    features: [
      'Todo lo del plan Básico',
      'Contenido premium',
      'Soporte prioritario 24/7',
      'Acceso anticipado a nuevas funciones'
    ],
    recommended: true
  }
]

const subscribe = (plan) => {
  console.log(`Subscribing to ${plan.name} plan`);
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
