importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBXW3gL4PszJjmgmVVOjkuEqe-WkWHyO60",
    authDomain: "al-bandar-f02f6.firebaseapp.com",
    databaseURL: "https://al-bandar-f02f6-default-rtdb.firebaseio.com",
    projectId: "al-bandar-f02f6",
    storageBucket: "al-bandar-f02f6.firebasestorage.app",
    messagingSenderId: "799678549296",
    appId: "1:799678549296:web:bd1cc0ff99a680eabfccf5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || 'طلب جديد في البندر!';
  const notificationOptions = {
    body: payload.notification.body || 'يوجد طلب جديد بانتظار الاستلام.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3500/3500833.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
