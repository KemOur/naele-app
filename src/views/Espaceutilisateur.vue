<template>
    <ion-app>
        <ion-menu side="start" content-id="main-content">
            <ion-header>
                <ion-toolbar translucent>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-icon name="mail" slot="start"></ion-icon>
                        <ion-label>À propos</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="paper-plane" slot="start"></ion-icon>
                        <ion-label>Actualités</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="heart" slot="start"></ion-icon>
                        <ion-label>Connection</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="archive" slot="start"></ion-icon>
                        <ion-label>Inscription</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="archive" slot="start"></ion-icon>
                        <ion-label>Contact</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="archive" slot="start"></ion-icon>
                        <ion-label>Forfaits</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="archive" slot="start"></ion-icon>
                        <ion-label>Forfaits</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="trash" slot="start"></ion-icon>
                        <ion-label>Mon espace</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="trash" slot="start"></ion-icon>
                        <ion-label>Déconnexion</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
<br>
<br>
<br>
<br>
<br>
        <IonContent>
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
        </ion-card><br>
        </IonContent>

        <div class="ion-page" id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                    <ion-searchbar/>
                </ion-toolbar>
            </ion-header>
        </div>
    </ion-app>
</template>

<script>
    import {menuController, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonSearchbar } from '@ionic/vue';
    export default {
        name: "Espaceutilisateur",
        components: {
            IonContent,
            IonHeader,
            IonTitle,
            IonToolbar,
            IonItem,
            IonSearchbar
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