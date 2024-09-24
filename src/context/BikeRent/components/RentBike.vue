<template>
  <div class="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-8 text-center text-gray-900">
      <i class="fas fa-bicycle mr-2"></i> Rent Your Perfect Ride
    </h1>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Left column with video and accordion -->
      <div class="flex flex-col justify-between">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-KdcvwU_E7g?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="w-full h-auto rounded-lg shadow-md mb-6 object-cover animate__animated animate__fadeInUp"
            style="min-height: 320px;"
        ></iframe>
        <pv-Accordion :activeIndex="0">
          <pv-AccordionTab header="Why choose us?">
            <p>We offer a wide range of high-quality bikes, flexible rental options, and excellent customer service to ensure your ride is perfect.</p>
          </pv-AccordionTab>
          <pv-AccordionTab header="Rental process">
            <p>
              1. Choose your bike type<br />
              2. Select pickup and drop-off dates and times<br />
              3. Provide your contact information<br />
              4. Confirm your reservation
            </p>
          </pv-AccordionTab>
        </pv-Accordion>
      </div>

      <!-- Right column with form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Select Bike Type -->
        <div class="space-y-2">
          <label for="bike-type" class="text-lg font-semibold">Select Bike Type</label>
          <pv-Dropdown id="bike-type" v-model="bikeType" :options="bikeTypes" optionLabel="label" placeholder="Select bike type" class="w-full">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center">
                <img :src="slotProps.value.image" :alt="slotProps.value.label" class="w-10 h-10 mr-2 rounded" />
                {{ slotProps.value.label }}
              </div>
              <span v-else>Select bike type</span>
            </template>
            <template #option="slotProps">
              <div class="flex items-center">
                <img :src="slotProps.option.image" :alt="slotProps.option.label" class="w-10 h-10 mr-2 rounded" />
                {{ slotProps.option.label }}
              </div>
            </template>
          </pv-Dropdown>
        </div>

        <!-- Pickup Date and Time -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <label for="pickup-date" class="text-lg font-semibold">Pickup Date</label>
            <pv-Calendar id="pickup-date" v-model="pickupDate" dateFormat="dd/mm/yy" class="w-full" />
          </div>
          <div class="space-y-2">
            <label for="pickup-time" class="text-lg font-semibold">Pickup Time</label>
            <pv-Dropdown id="pickup-time" v-model="pickupTime" :options="timeSlots" optionLabel="label" placeholder="Select time" class="w-full" />
          </div>
        </div>

        <!-- Dropoff Date and Time -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <label for="dropoff-date" class="text-lg font-semibold">Drop-off Date</label>
            <pv-Calendar id="dropoff-date" v-model="dropoffDate" dateFormat="dd/mm/yy" class="w-full" />
          </div>
          <div class="space-y-2">
            <label for="dropoff-time" class="text-lg font-semibold">Drop-off Time</label>
            <pv-Dropdown id="dropoff-time" v-model="dropoffTime" :options="timeSlots" optionLabel="label" placeholder="Select time" class="w-full" />
          </div>
        </div>

        <!-- Phone Number -->
        <div class="space-y-2">
          <label for="phone" class="text-lg font-semibold">Phone Number</label>
          <div class="relative flex items-center space-x-2">
            <i class="pi pi-phone text-gray-400"></i>
            <span class="text-gray-400">+51</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" alt="Peru" class="w-6 h-4" />
            <pv-input-text id="phone" v-model="phoneNumber" type="tel" placeholder="Enter your phone number" class="w-full" />
          </div>
        </div>

        <!-- Confirm Reservation Button -->
        <pv-button type="submit" label="Confirm Reservation" class="w-full p-3 text-lg animate__animated animate__pulse animate__infinite" />
      </form>
    </div>

    <!-- Additional Buttons -->
    <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <pv-button v-tooltip.top="'View available pickup locations'" icon="pi pi-map-marker" label="Pickup Locations" class="p-button-outlined w-full animate__animated animate__bounceIn animate__hover" @click="showLocations = true" />
      <pv-button v-tooltip.top="'Check our operating hours'" icon="pi pi-clock" label="Operating Hours" class="p-button-outlined w-full animate__animated animate__bounceIn animate__hover" @click="showOperating = true" />
      <pv-button v-tooltip.top="'Read our rental policies and terms'" icon="pi pi-info-circle" label="Rental Policies" class="p-button-outlined w-full animate__animated animate__bounceIn animate__hover" @click="showPolicies = true" />
      <pv-button v-tooltip.top="'View and manage your current bookings'" icon="pi pi-book" label="Manage Subscription" class="p-button-outlined w-full animate__animated animate__bounceIn animate__hover" />
    </div>

    <!-- Rental Policies Modal -->
    <Dialog v-model:visible="showPolicies" header="Rental Policies" :modal="true" :closable="false">
      <RentalPolicies />
      <div class="flex justify-end mt-4">
        <pv-button label="Close" @click="showPolicies = false" />
      </div>
    </Dialog>

    <!-- Operating Hours -->
    <Dialog v-model:visible="showOperating" header="Operating Hours" :modal="true" :closable="false">
      <OperatingHours />
      <div class="flex justify-end mt-4">
        <pv-button label="Close" @click="showOperating = false" />
      </div>
    </Dialog>

    <!-- Locations -->
    <Dialog v-model:visible="showLocations" header="PickUp Locations" :modal="true" :closable="false" class="w-full md:w-3/4 lg:w-1/2">
      <div class="p-4">
        <Locations />
        <div class="flex justify-end mt-4">
          <pv-button label="Close" @click="showLocations = false" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Locations from "@/context/BikeRent/components/Locations.vue";
import Dialog from 'primevue/dialog';
import RentalPolicies from "@/context/BikeRent/components/RentalPolicies.vue";
import OperatingHours from "@/context/BikeRent/components/OperatingHours.vue";

const toast = useToast();
const showPolicies = ref(false);
const showOperating = ref(false);
const showLocations = ref(false);

// Options for bike types
const bikeTypes = [
  { value: 'city', label: 'City Bike', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4MLRK96sNj58jTx28M5lZNuM8hzx2d9lhg&s' },
  { value: 'mountain', label: 'Mountain Bike', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt59oECrIaXc7A8A8QUjuAUWvsxU0XxqgMnQ&s' },
  { value: 'road', label: 'Road Bike', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlozsOH5JB-GGDGNsfPkvDc9jxESzz-KHQRw&s' },
  { value: 'electric', label: 'Electric Bike', image: 'https://i5.walmartimages.com/seo/COLORWAY-Electric-Bike-500W-8-4Ah-36V-Removable-Battery-E-Bike-Electric-Foldable-Pedal-Assist-E-Bicycle-19-9MPH-Bicycle-for-Teenager-and-Adults-BK5M_80bfc9d9-1b38-4ff4-912b-5655674dd60c.81525d87dd8e1ba37688be7188a9e527.jpeg' }
];

// Options for time slots
const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return { label: `${hour}:00`, value: `${hour}:00` };
});

// Form state
const bikeType = ref(null);
const pickupDate = ref(null);
const dropoffDate = ref(null);
const pickupTime = ref(null);
const dropoffTime = ref(null);
const phoneNumber = ref('');

// Handle form submission
const handleSubmit = () => {
  toast.add({ severity: 'success', summary: 'Reservation Confirmed', detail: 'Your bike has been reserved successfully!', life: 3000 });
};
</script>

<style>
.animate__hover:hover {
  animation: bounce 1s;
}
</style>