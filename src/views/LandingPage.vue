<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 30px">NAELE</ion-title>
                <!--<ion-searchbar/>-->
            </ion-toolbar>
        </ion-header><br>

        <ion-content fullscreen>
            <img src="assets/images/img-a.png" /><br>
                <ion-card-content>
                    <h4>40 OOO personnes voyage déjà avec nous!</h4>
                    <small>Pass navigo pour les transports électriques du quotidien</small>
                </ion-card-content>

            <section>
                <img src="assets/images/img-b.png" style="height: 150px"/>
                <img src="assets/images/img-b.png" style="height: 150px"/>
            </section>

                <ion-card-content>
                    <ion-button expand="block">Connexion</ion-button>
                    <ion-button expand="full" class="IonBtn">Inscription</ion-button>
                </ion-card-content>
        </ion-content>
    </ion-page>

</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent, IonButton } from '@ionic/vue';
    export default {
        name: "LandingPage",
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            IonCardContent,
            IonButton
        }
    }
</script>

<style>
.IonBtn{
    background-color:#17DAED
}
</style>