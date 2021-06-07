<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 30px">NAELE</ion-title>
                <!--<ion-searchbar/>-->
            </ion-toolbar>
        </ion-header><br>

        <ion-content fullscreen>

            <ion-title style="text-align: center">Actualités</ion-title>
            <p style="text-align: center">Chaque semaine une nouvelle actualité</p>

            <ion-card>
                <img src="assets/images/img-d.png" />
                <ion-card-header>
                    <ion-card-title style="text-align: center">Madison, WI</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                </ion-card-content>

                <ion-card-content>
                    <ion-card-subtitle>05/12/2020</ion-card-subtitle>
                </ion-card-content>
            </ion-card>

            <ion-card style="background-color: #F8F8F8">
                <ion-card-header>
                    <ion-card-title style="text-align: center">Junior le Sénior</ion-card-title>
                    <p style="text-align: center">NE-ÉTUDIANT</p>
                    <hr style="border: 2px solid white">
                </ion-card-header>
                <ion-card-content>
                    <p style="text-align: center">
                        Une superbe experience j'ai beaucoup aimé le fait de pouvoir être à la fois dans une trotinnete, skataboard et un vélo dans une même journée</p>
                </ion-card-content>
            </ion-card>

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
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent } from '@ionic/vue';
    export default {
        name: "Actualites",
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            IonCardContent,
        }
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>