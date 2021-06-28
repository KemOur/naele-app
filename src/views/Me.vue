<template>
    <ion-page>
        <ion-content fullscreen>
            <ion-card>
                <ion-card-header>
                    <ion-card-title style="text-align: center">Espace utilisateur :</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-card-subtitle> Nom : {{ user.name }}</ion-card-subtitle>
                        </ion-item>
                        <ion-item>
                            <ion-card-subtitle>Email : {{user.email}} </ion-card-subtitle>
                        </ion-item>
                        <ion-item>
                            <ion-card-subtitle>
                                Inscrit le: {{ user.created_at ? new Date(user.created_at).toLocaleString() : "" }}
                            </ion-card-subtitle>
                        </ion-item>
                        <ion-item>
                            <ion-card-subtitle> Abonnement : NE-ETUDIANT </ion-card-subtitle>
                        </ion-item>
                        <ion-item>
                            <ion-card-subtitle> Annuler l'abonnement</ion-card-subtitle>
                        </ion-item>
                        <ion-item>
                            <ion-card-subtitle>Mettre en pause</ion-card-subtitle>
                        </ion-item>
                    </ion-list>
                    <br>
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
    import { mapGetters } from "vuex";

    import {
        IonTitle,
        IonButton,
        IonPage,
        menuController,
        IonContent,
        IonItem,
        IonCard,
        IonCardContent,
        IonCardSubtitle,
        IonCardHeader,
        IonCardTitle,
        IonList,
    } from '@ionic/vue';

    export default {
        name: "Me",
        components: {
            IonTitle,
            IonButton,
            IonPage,
            IonContent,
            IonItem,
            IonCard,
            IonCardContent,
            IonCardSubtitle,
            IonCardHeader,
            IonCardTitle,
            IonList,
        },

        data() {
            return {};
        },
        mounted() {},
        computed: {
            ...mapGetters({ user: "data" }),
        },
    }
    // eslint-disable-next-line no-unused-vars
    async function openMenu() {
        await menuController.open();
    }
</script>

<style>
    :root {
        --ion-safe-area-top: 20px;
        --ion-safe-area-bottom: 22px;
    }
</style>