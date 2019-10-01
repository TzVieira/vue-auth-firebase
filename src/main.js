import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDlR3bbW_yZSJVg7xhYoWLHZrzNWsFzuhk",
  authDomain: "periodicos-f.firebaseapp.com",
  databaseURL: "https://periodicos-f.firebaseio.com",
  projectId: "periodicos-f",
  storageBucket: "",
  messagingSenderId: "281484924705",
  appId: "1:281484924705:web:45c6f40a5d6e1367ed5060"
};
firebase.initializeApp(config);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
