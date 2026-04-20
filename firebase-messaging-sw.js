importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBXW3gL4PszJjmgmVVOjkuEqe-WkWHyO60",
    authDomain: "al-bandar-f02f6.firebaseapp.com",
    projectId: "al-bandar-f02f6",
    storageBucket: "al-bandar-f02f6.firebasestorage.app",
    messagingSenderId: "799678549296",
    appId: "1:799678549296:web:bd1cc0ff99a680eabfccf5"
});

const messaging = firebase.messaging();

// هذه الدالة تعمل عندما يوصل إشعار والتطبيق مغلق تماماً
messaging.onBackgroundMessage((payload) => {
    console.log('وصل إشعار في الخلفية:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'android-chrome-192x192.png', // أيقونة تطبيق البندر
        vibrate: [200, 100, 200],
        tag: 'new-order', // لمنع تكرار الإشعارات
        data: { url: '/index.html' } 
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
