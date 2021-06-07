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
                <ion-title style="text-align: center">Contactez-nous</ion-title><br>
            </ion-header>

            <form @submit.prevent="">
                <ion-card-content>
                    <ion-item>
                        <ion-label position="floating">Nom</ion-label>
                        <ion-input/>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Prénom</ion-label>
                        <ion-input/>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Email</ion-label>
                        <ion-input/>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Objet</ion-label>
                        <ion-input/>
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Votre message</ion-label>
                        <ion-textarea position="floating" placeholder="Message..."/>
                    </ion-item><br>
                    <ion-button type="submit" expand="full" color="dark">Envoyer</ion-button>
                </ion-card-content>
            </form>

            <p style="text-align: center">Mettre ici la carte google maps</p>

            <ion-card-content style="background-color: #F3F9FE">
                <ion-card-content>
                    <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 15px">NAELE</ion-title>
                    <section>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-fc.png"/></ion-button>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-ind.png"/></ion-button>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-inst.png"/></ion-button>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-twit.png"/></ion-button>
                    </section><br>

                    <p style="text-align: center">
                        Made with ❤️ à Paris
                    </p>
                </ion-card-content>
            </ion-card-content>
        </ion-content>
    </ion-page>

</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent, IonButton, IonItem, IonInput } from '@ionic/vue';
    export default {
        name: "Contact",
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