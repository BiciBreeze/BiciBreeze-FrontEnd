<template>
  <div class="max-w-3xl mx-auto p-6 bg-white">
    <h1 class="text-3xl font-bold mb-6">Subscription</h1>

    <!-- Active Plan Card -->
    <pv-Card class="mb-6 border rounded-lg">
      <template #header>
        <div class="bg-gray-50 py-4 px-6">
          <h2 class="text-lg font-semibold">Active Plan</h2>
        </div>
      </template>
      <div class="flex justify-between items-center p-6">
        <div class="flex items-center">
          <div class="bg-blue-100 p-2 rounded-md mr-3">
            <i class="pi pi-user text-blue-500"></i>
          </div>
          <div>
            <p class="font-semibold">Personal</p>
            <p class="text-sm text-gray-500">Billed monthly</p>
          </div>
        </div>
        <pv-button label="Edit" class="p-button-outlined p-button-primary" />
      </div>
    </pv-Card>

    <!-- Upgrade to Pro Membership Card -->
    <pv-Card class="border rounded-lg">
      <template #header>
        <div class="bg-gray-50 py-4 px-6">
          <h2 class="text-lg font-semibold">Upgrade to a Pro Membership</h2>
          <p class="text-sm text-gray-500 mt-1">Get all access and an extra 20% off when you subscribe annually</p>
        </div>
      </template>
      <div class="p-6 space-y-6">
        <!-- Billing Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Billed to</label>
          <div class="relative">
            <pv-input-text v-model="billingDetails.name" id="name" class="w-full border-gray-300 pl-10" />
            <i class="pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <!-- Card Number -->
        <div>
          <label for="cardNumber" class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <div class="relative">
            <pv-input-text v-model="billingDetails.cardNumber" id="cardNumber" class="w-full border-gray-300 pl-10 pr-10" maxlength="16" @input="detectCardType" />
            <i class="pi pi-credit-card absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img v-if="cardType" :src="`/${cardType}.svg`" :alt="cardType" class="h-5 w-auto" />
            </div>
          </div>
        </div>

        <!-- Expiry and CVV -->
        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="expiry" class="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
            <div class="relative">
              <pv-input-text v-model="billingDetails.expiry" id="expiry" class="w-full border-gray-300 pl-10" placeholder="MM / YY" maxlength="5" />
              <i class="pi pi-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div class="flex-1">
            <label for="cvv" class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <div class="relative">
              <pv-input-text v-model="billingDetails.cvv" id="cvv" class="w-full border-gray-300 pl-10" maxlength="4" />
              <i class="pi pi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>

        <!-- Country -->
        <div>
          <label for="country" class="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <div class="relative">
            <pv-Dropdown v-model="billingDetails.country" :options="countries" optionLabel="label" optionValue="value" class="w-full border-gray-300 pl-10" />
            <i class="pi pi-flag absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <!-- Zip Code -->
        <div>
          <label for="zipCode" class="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
          <pv-input-text v-model="billingDetails.zipCode" id="zipCode" class="w-full border-gray-300" />
        </div>

        <!-- Membership Type -->
        <div class="mt-8">
          <label class="block text-sm font-medium text-gray-700 mb-2">Membership Type</label>
          <div v-for="(plan, index) in membershipOptions" :key="index" class="flex items-center justify-between p-4 border rounded-md" :class="plan.value === membershipType ? 'bg-blue-50 border-blue-200' : ''">
            <div class="flex items-center">
              <pv-RadioButton v-model="membershipType" :inputId="plan.value" :value="plan.value" />
              <label :for="plan.value" class="ml-2">
                <span>{{ plan.label }}</span>
                <p class="text-sm text-gray-500">{{ plan.description }}</p>
              </label>
            </div>
            <span v-if="plan.discount" class="text-sm text-green-600 font-semibold">{{ plan.discount }}</span>
          </div>
        </div>

        <!-- Add-ons -->
        <div class="mt-8">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Add-ons</h3>
          <div class="flex items-center space-x-2 p-4 border rounded-md">
            <pv-Checkbox v-model="addons" value="aiAccelerator" />
            <label for="aiAccelerator" class="flex-grow">
              <span class="font-medium">AI Particle Accelerator</span>
              <p class="text-sm text-gray-500">$20,000,000 / Month Per Member</p>
              <p class="text-sm text-gray-500">Unlimited use of AI of Q&A, Autofill, writer, and more</p>
            </label>
          </div>
        </div>

        <!-- Footer -->
        <p class="text-sm text-gray-500 mt-6 flex items-center">
          <i class="pi pi-exclamation-circle mr-2"></i> By Continuing you agree to our <a href="#" class="text-blue-600 ml-1">terms and conditions</a>.
        </p>
        <div class="flex justify-between items-center mt-8">
          <div>
            <p class="text-2xl font-bold flex items-center">
              <i class="pi pi-dollar mr-1"></i> {{ membershipType === 'annually' ? '16.00' : '20.00' }} / Month / User
            </p>
            <pv-button label="Details" class="p-button-link p-0 text-blue-600" />
          </div>
          <pv-button label="Upgrade to Plus" icon="pi pi-gift" class="p-button-primary" @click="handleUpgrade" />
        </div>
        <pv-button label="Deactivate account" class="w-full mt-4 p-button-outlined" />
      </div>
    </pv-Card>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useToast } from 'primevue/usetoast'

export default {
  setup() {
    const toast = useToast()

    const billingDetails = reactive({
      name: 'Jhon Smith',
      cardNumber: '',
      expiry: '',
      cvv: '',
      country: 'United States',
      zipCode: '',
    })

    const membershipType = ref('annually')
    const addons = ref([])
    const cardType = ref('')

    const countries = [
      { label: 'United States', value: 'United States' },
      { label: 'Canada', value: 'Canada' },
      { label: 'United Kingdom', value: 'United Kingdom' },
    ]

    const membershipOptions = [
      { value: 'monthly', label: 'Pay Monthly', description: '$20 / Month Per Member' },
      { value: 'annually', label: 'Pay Annually', description: '$16 / Month Per Member', discount: 'Save 20%' }
    ]

    const detectCardType = () => {
      const re = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/,
        discover: /^6(?:011|5)/,
      }
      for (const [type, regex] of Object.entries(re)) {
        if (regex.test(billingDetails.cardNumber)) {
          cardType.value = type
          return
        }
      }
      cardType.value = ''
    }

    const handleUpgrade = () => {
      if (!billingDetails.name || !billingDetails.cardNumber || !billingDetails.expiry || !billingDetails.cvv) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields.' })
        return
      }
      toast.add({ severity: 'success', summary: 'Success', detail: 'Your subscription has been upgraded!' })
    }

    return {
      billingDetails,
      membershipType,
      addons,
      cardType,
      countries,
      membershipOptions,
      detectCardType,
      handleUpgrade,
    }
  }
}
</script>

<style>
/* Add necessary tailwind CSS styles if needed */
</style>