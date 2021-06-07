<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 30px">NAELE</ion-title>
                <!--<ion-searchbar/>-->
            </ion-toolbar>
        </ion-header><br>

        <ion-content fullscreen>
            <ion-header>
                <ion-title style="text-align: center">Connexion</ion-title>
            </ion-header><br>

            <form @submit.prevent="">
                <ion-card-content>
                    <ion-item>
                        <ion-label position="floating">Email</ion-label>
                        <ion-input/>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Mot de passe</ion-label>
                        <ion-input/>
                    </ion-item><br>
                    <ion-button type="submit" expand="full" color="dark">Connexion</ion-button>
                </ion-card-content>

            </form>

        </ion-content>
    </ion-page>

</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent, IonButton, IonItem, IonInput } from '@ionic/vue';
    export default {
        name: "Connection",
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            IonCardContent,
            IonButton,
            IonItem,
            IonInput
        }
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>