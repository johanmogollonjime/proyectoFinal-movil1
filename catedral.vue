<template>
    <div class="place-detail-container">
      <!-- Imagen del lugar -->
      <div class="place-image-container">
        <img src="../imagenes/catedralSantaC.jpg" alt="Imagen del lugar" class="place-image" />
      </div>
  
      <!-- Descripción del lugar -->
      <div class="place-info">
        <h1>{{ placeName }}</h1>
        <p>{{ placeDescription }}</p>
        
      </div>
  
      <!-- Barra de navegación con botones -->
      <div class="nav-bar">
        <button @click="goBack" href="./lugares.vue" class="nav-button">Atrás</button>
        <button @click="goToPlace" class="nav-button">Visitar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        placeName: "Catedral Santa Clara",
        placeDescription:
          "La Catedral de Santa Clara o Catedral de Pamplona es una iglesia católica ubicada en el municipio de Pamplona, Colombia. Es sede de la arquidiócesis de Nueva Pamplona, principal institución católica de la región. Fue fundada en 1584 por doña María Velasco de Montalvo, hija del fundador de Pamplona, Don Ortún Velázquez de Velasco. Antiguamente servía como capilla del convento de Santa Clara hasta que fue convertida en catedral por la diócesis de Pamplona.​" ,
        placeLink:
          "https://www.tiktok.com/@danielaporelmundo/video/7117838213875584262",
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1); // Esto llevará al usuario de vuelta a la página anterior
      },
      goToPlace() {
        window.open(this.placeLink, "_blank"); // Abre el enlace en una nueva pestaña
      },
    },
  };
  </script>
  
  <style scoped>
  .place-detail-container {
    position: relative;
    width: 100%;
    height: auto;
    color: white;
    display: flex;
    flex-direction: column;
  }
  
  .place-image-container {
    width: 100%;
    height: 320px; /* Ajusta la altura de la imagen */
    overflow: hidden; /* Para que la imagen no se desborde */
    display: flex;
    justify-content: center;
  }
  
  .place-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .place-info {
    padding: 25px;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
  }
  
  .place-info h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }
  
  .place-info p {
    font-size: 15px;
    line-height: 1.3;
    color: white;
  }
  
  /* Barra de navegación con botones */
  .nav-bar {
    display: flex;
    justify-content: space-evenly;
    background-color: #000;
    padding: 10px 0;
    padding-bottom: 50px;
  }
  
  .nav-button {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-button:hover {
    background-color: #9fb3e8;
    color: white;
  }
  </style>
  