import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import Inscription from '../views/Inscription.vue'
import Connection from '../views/Connection.vue'
import Abonnements from '../views/Abonnements.vue'
import Actualites from '../views/Actualites.vue'
import AbonnementConfirmation from '../views/AbonnementConfirmation.vue'
import Espaceutilisateur from '../views/Espaceutilisateur.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/landingpage',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },  {
    path: '/connection',
    name: 'Connection',
    component: Connection
  },  {
    path: '/abonnements',
    name: 'Abonnements',
    component: Abonnements
  },  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites
  },  {
    path: '/abonnementsconfirmation',
    name: 'AbonnementConfirmation',
    component: AbonnementConfirmation
  },

  {
    path: '/userespace',
    name: 'UserEspace',
    component: Espaceutilisateur
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
