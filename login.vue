<template>
  <ion-page>
    <!-- Imagen de fondo -->
    <ion-content fullscreen>
      <div class="background-image"></div>

      <!-- Contenedor principal para los elementos de la interfaz -->
      <div class="main-container">
        <!-- Texto PAMPLONA -->
        <h1 class="title">PAMPLONA</h1>

        <!-- Texto Norte de Santander -->
        <p class="subtitle">Norte de Santander</p>

        <!-- Texto ¡BIENVENIDOS! -->
        <p class="welcome-text">¡BIENVENIDOS!</p>

        <!-- Contenedor para el formulario -->
        <div class="form-container">
          <!-- Texto Iniciar Sesión -->
          <p class="section-title">Iniciar Sesión</p>

          <!-- Campo de email -->
          <div class="custom-label">
            <ion-label position="floating">Email</ion-label>
          </div>
          <ion-item class="custom-item">
            <ion-input v-model="email" type="email" placeholder="Ejemplo@gmail.com" class="custom-input"></ion-input>
          </ion-item>

          <!-- Campo de contraseña -->
          <div class="custom-label">
            <ion-label position="floating">Contraseña</ion-label>
          </div>
          <ion-item class="custom-item">
            <ion-input v-model="password" type="password" placeholder="Mi_contraseña" class="custom-input"></ion-input>
          </ion-item>

           <div class="button">
          <!-- Botón Ingresar -->
          <ion-button  expand="block" class="login-button" @click="handleLogin">Ingresar</ion-button>
           </div>
          <!-- Mensaje de error si no es válido -->
          <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";

export default {
  name: "lugares",
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      // Variables para capturar el correo y la contraseña
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  
  //metodos//
  methods: {
  handleLogin() {
    // Usuario y contraseña predeterminados
    const fakeEmail = "prueba@gmail.com";
    const fakePassword = "123456";

    // Validación del usuario
    if (this.email === fakeEmail && this.password === fakePassword) {
      this.errorMessage = '';
      alert('¡Ingreso exitoso!');
      this.$router.push({ name: 'lugares' }); // Redirigir a la interfaz de lugares
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos, vuelva a intentarlo';
    }
  }
}

};
</script>

<style scoped>
/* Imagen de fondo */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../imagenes/catedral.jpg') no-repeat center center/cover;
  z-index: -1;
}

/* Contenedor principal */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  color: white;
  padding: 20px;
}

/* Estilo de los textos */
.title {
  font-size: 50px;
  font-weight: bold;
  color: #65b0ff; /* Azul claro */
  margin: 8px;
  margin-top: 5px;
}

.subtitle {
  font-size: 22px;
  font-weight: bold;
  color: #333; /* Gris oscuro */
  margin-bottom: 16px;
}

.welcome-text {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #ffffff; /* Gris oscuro */
}

/* Contenedor del formulario */
.form-container {
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  background-color: transparent; /* Fondo gris claro para el formulario */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilo de los campos de texto */
.custom-label {
  color: #ffffff; /* Gris oscuro */
  display: block;
  text-align: left;
  margin-bottom: 4px;
}

.custom-item {
  --highlight-background: none; /* Eliminar fondo de los íconos */
  --inner-padding-end: 0; /* Eliminar el padding al final del campo */
  --background: transparent; /* El fondo del campo debe ser transparente */
  --border-radius: 8px;
}

.custom-input {
  --background: #ffffff; /* Fondo blanco para los campos */
  --color: #333; /* Texto gris oscuro */
  --placeholder-color: #999999; /* Placeholder gris */
  --border-color: #ccc; /* Borde gris claro */
  --border-width: 1px; /* Borde de 1px */
  --border-radius: 8px; /* Bordes redondeados */
  padding: 12px; /* Mayor espaciado interno */
  font-size: 16px;
  box-shadow: none; /* Eliminar sombra */
}

/* Botón */
.login-button {
  --background: #000000; 
  --background-hover: rgba(0, 0, 0, 0.8);
  --color: #ffffff;
  font-size: 14px;
  padding: 12px;
  width: 200px;
  text-align: center;
  margin-top: 16px;
  border-radius: 8px; /* Bordes redondeados */
  transition: background-color 0.3s ease; /* Transición suave */
}

.button {
  text-align: center;
  margin: 0 auto; /* Centra el contenedor del botón horizontalmente */
  margin-top: 16px; /* Espaciado superior */
}
</style>