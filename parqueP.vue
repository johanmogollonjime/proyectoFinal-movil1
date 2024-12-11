<template>
    <div class="place-detail-container">
      <!-- Imagen del lugar -->
      <div class="place-image-container">
        <img src="../imagenes/parqueP.jpg" alt="Imagen del lugar" class="place-image" />
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
        placeName: "Parque Principal Agueda Gallardo",
        placeDescription:
          "Ubicado en el centro de Pamplona, es un espacio público bautizado en homenaje a Águeda Gallardo de Villamizar, la mujer que el 4 de julio de 1810 proclamó la Independencia de Pamplona. Alrededor del parque se encuentran la Catedral de Santa Clara, el Palacio Municipal y el Museo de Arte Moderno Ramírez Villamizar, entre otros lugares significativos. Dirección: Cl. 5 #4-132, Pamplona, Norte de Santander" ,
        placeLink:
          "https://www.tiktok.com/@hoypamplonanoticias/video/7207878194555407622",
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
    padding-bottom: 120px;
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
  