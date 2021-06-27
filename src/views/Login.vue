<template>
    <ion-page>

        <ion-content fullscreen>
                <h5 style="text-align: center">Connexion</h5>
            <br>

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
    import {
        IonLabel,
        IonContent,
        IonPage,
        IonCardContent,
        IonButton,
        IonItem,
        IonInput
    } from '@ionic/vue';

    export default {
        name: "Connection",
        components: {
            IonLabel,
            IonContent,
            IonPage,
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