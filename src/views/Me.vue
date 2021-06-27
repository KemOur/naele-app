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
                        <ion-title> Junior</ion-title>
                    </ion-item>
                    <ion-item>
                        <ion-title> adresse@email.com </ion-title>
                    </ion-item>
                    <ion-item>
                        <ion-title> password</ion-title>
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
        </ion-card> <ion-card>
            <ion-card-header>
                <ion-card-title style="text-align: center">Espace utilisateur :</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-title> Junior</ion-title>
                    </ion-item>
                    <ion-item>
                        <ion-title> adresse@email.com </ion-title>
                    </ion-item>
                    <ion-item>
                        <ion-title> password</ion-title>
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


            <ion-card>
            <ion-card-header>
                <ion-card-title style="text-align: center">Espace utilisateur :</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-title> Junior</ion-title>
                    </ion-item>
                    <ion-item>
                        <ion-title> adresse@email.com </ion-title>
                    </ion-item>
                    <ion-item>
                        <ion-title> password</ion-title>
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
            <br>
        </ion-content>
    </ion-page>
</template>

<script>
    import {
        IonPage,
        menuController,
        IonContent,
        IonTitle,
        IonItem,
        IonCard,
        IonCardContent,
        IonCardSubtitle,
        IonCardHeader,
        IonCardTitle,
        IonList,

    } from '@ionic/vue';
    export default {
        name: "Espaceutilisateur",
        components: {
            IonPage,
            IonContent,
            IonTitle,
            IonItem,
            IonCard,
            IonCardContent,
            IonCardSubtitle,
            IonCardHeader,
            IonCardTitle,
            IonList,
        }
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