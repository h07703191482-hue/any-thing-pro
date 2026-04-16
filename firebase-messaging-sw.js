// استيراد مكتبات فايربيس الخاصة بالـ Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// نفس إعدادات مشروعك بالضبط
const firebaseConfig = {
  apiKey: "AIzaSyBXW3gL4PszJjmgmVVOjkuEqe-WkWHyO60",
  authDomain: "al-bandar-f02f6.firebaseapp.com",
  projectId: "al-bandar-f02f6",
  storageBucket: "al-bandar-f02f6.firebasestorage.app",
  messagingSenderId: "799678549296",
  appId: "1:799678549296:web:bd1cc0ff99a680eabfccf5",
  measurementId: "G-KRRFC79HC3"
};

// تهيئة فايربيس
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// التعامل مع الإشعارات والتطبيق في الخلفية أو مغلق
messaging.onBackgroundMessage(function(payload) {
  console.log('إشعار وصل بالخلفية: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/android-chrome-192x192.png', // مسار أيقونة تطبيقك
    badge: '/favicon-32x32.png', // أيقونة صغيرة تظهر بشريط الإشعارات
    dir: 'rtl'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
