<template>
  <ion-app>
    <Navbar/>

    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>

</template>

<script>
  import Navbar from './components/Navbar.vue'
  import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonContent,
    Navbar,
    IonApp,
    IonRouterOutlet
  }
});
</script>


<style>
  a {
    text-decoration: none;
  }
</style>