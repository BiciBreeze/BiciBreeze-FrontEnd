<template>
  <div class="container mx-auto p-4 mt-40">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-2">Welcome to BiciBreeze</h1>
      <p class="text-lg text-gray-600 mb-4">Where would you like to go?</p>
    </div>
    <div class="relative mb-8">
      <img
          alt="Map of San Francisco"
          class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-lg"
          src="https://cdn.www.gob.pe/uploads/document/file/767983/standard_peru-si-quieres-manejar-bicicleta-ten-en-cuenta-estas-recomendaciones-836021.jpg"
      />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
        <input class="w-full p-3 rounded-full shadow-lg" placeholder="Search" type="text" />
      </div>
    </div>
    <div>
      <h2 class="text-xl font-bold mb-4">Stations near you</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="text-center" v-for="station in stations" :key="station.name">
          <img :alt="station.alt" class="w-full rounded-lg mb-2" :src="station.img" />
          <p class="font-bold">{{ station.name }}</p>
          <p class="text-gray-600">{{ station.bikes }} bikes</p>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-bold mb-4">Your current reservations</h2>
      <div class="space-y-4 mb-8">
        <div class="flex items-center space-x-4" v-for="reservation in reservations" :key="reservation.time">
          <img :alt="reservation.alt" class="w-12 h-12 rounded-full" :src="reservation.img" />
          <div>
            <p class="font-bold">Pickup at {{ reservation.time }}</p>
            <p class="text-gray-600">{{ reservation.location }}, {{ reservation.bikes }} bikes available</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/bookings">
        <button class="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">Reserve a bike</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const stations = [
  {
    name: "Ferry Building",
    bikes: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qSbdF0B60kwB5mc82kxBFW_2RYdXCXttsQ&s",
    alt: "Bikes at Ferry Building"
  },
  {
    name: "Embarcadero",
    bikes: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvjHCyPyt2UdJpPB72toVQajKbkNcISXvVg&s",
    alt: "Bikes at Embarcadero"
  },
  {
    name: "Fisherman's Wharf",
    bikes: 5,
    img: "https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK0534_Background-2000x1333.jpg",
    alt: "Bikes at Fisherman's Wharf"
  },
  {
    name: "Pier 39",
    bikes: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81EWwk92AkZXt8FzXt8i-9PvPk5M5Qx3-aQ&s",
    alt: "Bikes at Pier 39"
  }
];

const reservations = [
  {
    time: "6:30 PM",
    location: "Ferry Building",
    bikes: 2,
    img: "https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK0534_Background-2000x1333.jpg",
    alt: "Sunset image"
  },
  {
    time: "7:00 PM",
    location: "Pier 39",
    bikes: 3,
    img: "https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK0534_Background-2000x1333.jpg",
    alt: "Sunset image"
  }
];
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px); /* Adjust height to account for header */
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
</style>