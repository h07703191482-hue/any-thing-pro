importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// نفس بيانات الفايربيس مالتك بالضبط
firebase.initializeApp({
  apiKey: "AIzaSyBXW3gL4PszJjmgmVVOjkuEqe-WkWHyO60",
  authDomain: "al-bandar-f02f6.firebaseapp.com",
  projectId: "al-bandar-f02f6",
  storageBucket: "al-bandar-f02f6.firebasestorage.app",
  messagingSenderId: "799678549296",
  appId: "1:799678549296:web:bd1cc0ff99a680eabfccf5"
});

const messaging = firebase.messaging();

// استلام الإشعارات والتطبيق بالخلفية أو مقفول
messaging.onBackgroundMessage(function(payload) {
  console.log('وصول إشعار بالخلفية: ', payload);
  
  const notificationTitle = payload.notification.title || 'طلب جديد بالبندر 📦';
  const notificationOptions = {
    body: payload.notification.body || 'أكو طلب جديد نزل بالساحة، افتح التطبيق!',
    icon: '/android-chrome-192x192.png',
    badge: '/favicon-32x32.png',
    vibrate: [200, 100, 200, 100, 200], // اهتزاز قوي
    requireInteraction: true // يخلي الإشعار ثابت عالشاشة لحد ما المندوب يلمسه
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
