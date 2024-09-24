<template>
  <div class="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold mb-6 text-center">Locations</h2>
    <p class="text-lg mb-4">Sites:</p>
    <ul class="list-disc pl-5 grid grid-cols-1 gap-6">
      <li class="bg-gray-100 p-4 rounded-lg">
        <span class="block text-xl font-semibold mb-2">️ Kennedy Park</span>
        <img
            :src="`https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Parque_Kennedy_-_Lima%2C_Peru.jpg/200px-Parque_Kennedy_-_Lima%2C_Peru.jpg`"
            alt="K-park"
            class="w-full h-48 rounded object-cover mb-4"
        />
        <p class="text-sm mb-4">We are located at the entrance for devolution and delivery of bicycles.</p>
        <a href="https://maps.app.goo.gl/AwS1FktvAJSys3eUA" target="_blank" class="text-blue-500 underline">
          <pv-button class="bg-blue-500 text-white px-4 py-2 rounded w-full">See location</pv-button>
        </a>
      </li>
      <li class="bg-gray-100 p-4 rounded-lg">
        <span class="block text-xl font-semibold mb-2">️ Exposition Park</span>
        <img
            :src="`https://upload.wikimedia.org/wikipedia/commons/a/ae/Lima%2C_Per%C3%BA._Parque_de_Exposici%C3%B3n.jpg`"
            alt="Exposition Park"
            class="w-full h-48 rounded object-cover mb-4"
        />
        <p class="text-sm mb-4">We are located at the entrance for devolution and delivery of bicycles.</p>
        <a href="https://maps.app.goo.gl/v9jbGZVYF5KdrrMC7" target="_blank" class="text-blue-500 underline">
          <pv-button class="bg-blue-500 text-white px-4 py-2 rounded w-full">See location</pv-button>
        </a>
      </li>
      <li class="bg-gray-100 p-4 rounded-lg">
        <span class="block text-xl font-semibold mb-2">️ Olivar Park</span>
        <img
            :src="`https://parquedelareserva.com.pe/wp-content/uploads/2022/03/Parque-El-Olivar-de-San-Isidro-1024x602.jpg`"
            alt="Olivar Park"
            class="w-full h-48 rounded object-cover mb-4"
        />
        <p class="text-sm mb-4">We are located at the entrance for devolution and delivery of bicycles.</p>
        <a href="https://maps.app.goo.gl/Q3F6qZq9G4hJFwUv5" target="_blank" class="text-blue-500 underline">
          <pv-button class="bg-blue-500 text-white px-4 py-2 rounded w-full">See location</pv-button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.max-w-2xl {
  max-width: 42rem;
}
.bg-gray-100 {
  background-color: #f7fafc;
}
.text-center {
  text-align: center;
}
.font-semibold {
  font-weight: 600;
}
</style>
