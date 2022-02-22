const firebaseConfig = {
    apiKey: "AIzaSyArPyP_wlSL32CDR1wEJUQNT0YIP-2CbhU",
    authDomain: "project-94-lets-chat-webapp.firebaseapp.com",
    databaseURL: "https://project-94-lets-chat-webapp-default-rtdb.firebaseio.com",
    projectId: "project-94-lets-chat-webapp",
    storageBucket: "project-94-lets-chat-webapp.appspot.com",
    messagingSenderId: "645187772827",
    appId: "1:645187772827:web:289598574b3de75757013e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function logout()
  {
      window.location("index.html")
  }