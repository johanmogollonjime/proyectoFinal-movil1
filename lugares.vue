<template>
  <div class="container-fluid p-0">
    <!-- Imagen de fondo -->
    <div class="background-image">
      <img src="../imagenes/plazuela.jpeg" alt="Fondo" class="img-fluid" />
    </div>

    <!-- Campo de Búsqueda -->
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscador!"
        class="search-input"
      />
    </div>

    <!-- Título de la lista -->
    <h2 class="title">Lugares a visitar</h2>

  <!-- Lista de lugares (usando v-for para los elementos) -->
  <div class="places-list">
      <div
        v-for="place in filteredPlaces"
        :key="place.id"
        class="place-item">
        <span>{{ place.name }}</span>
        <!-- Botón para redirigir al lugar -->
        <router-link :to="'/lugar/' + place.id" class="arrow-button">
          <button class="arrow">→</button> <!-- Botón con flecha -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "", // Almacena el texto del buscador
      places: [
        { id: 1, name: "Plazuela Almeida" },
        { id: 2, name: "Parque Principal Agueda Gallardo" },
        { id: 3, name: "Catedral Santa Clara" },
        { id: 4, name: "Iglesia de las Nieves" },
        { id: 5, name: "Museo Arquidiócesano de Arte Religioso" },
        { id: 6, name: "Parque Recreativo Los Tanques" },
        { id: 7, name: "Museo de Arte Moderno" },
        { id: 8, name: "La Calle Real" },
        { id: 9, name: "Mirador Cristo Rey" },
        { id: 10, name: "Casa Águeda Gallardo" },
        { id: 11, name: "Casa de las Cajas Reales" },
        { id: 12, name: "Casa de Mercado Cubierto" },
        { id: 13, name: "Museo Casa Colonial" },
      ],
    };
  },
  computed: {
    filteredPlaces() {
      return this.places.filter((place) =>
        place.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>
<style scoped>
/* Imagen de fondo */
.background-image img {
  width: 100%;
  height: 100vh; /* Mantenerla como fondo completo */
  object-fit: cover;
  position: fixed; /* Fijar la imagen para que no se desplace */
  z-index: 0; /* Colocarla detrás del contenido */
}

/* Contenedor del buscador */
.search-container {
  position: fixed; /* Fijar el buscador */
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  z-index: 10; /* Por encima de la imagen */
}

.search-input {
  width: 100%;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  padding: 0 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  z-index: 10; /* Por encima de la imagen */
}

/* Título */
.title {
  color: white;
  font-size: 24px;
  font-style: italic;
  position: fixed; /* Fijar el título */
  top: 80px;
  left: 16px;
  z-index: 10; /* Por encima de la imagen */
}

/* Contenedor principal */
.container-fluid {
  position: relative;
  z-index: 10;
  height: 100vh; /* Altura completa de la pantalla */
  overflow: hidden; /* Evitar desplazamiento del contenedor principal */
}

/* Lista de lugares */
.places-list {
  position: absolute; /* La lista es independiente */
  top: 130px; /* Colocar debajo del título */
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  overflow-y: auto; /* Habilitar desplazamiento vertical SOLO aquí */
  z-index: 10;
}

/* Estilo para cada lugar */
.place-item {
  background-color: rgba(255, 255, 255, 0.9); /* Mayor opacidad para mejor legibilidad */
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.place-item span {
  color: #333; /* Texto oscuro para buen contraste */
}

button{
  background-color: rgba(255, 255, 255, 0.9); /* Mayor opacidad para mejor legibilidad */
}
.arrow {
  font-size: 20px;
  color: #ff69b4;
}
</style>