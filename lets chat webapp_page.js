//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBsiQeNm1A0Tk2qN-DZHnLbMYZaww9GJHA",
      authDomain: "kwitter-28bac.firebaseapp.com",
      databaseURL: "https://kwitter-28bac-default-rtdb.firebaseio.com",
      projectId: "kwitter-28bac",
      storageBucket: "kwitter-28bac.appspot.com",
      messagingSenderId: "259548832559",
      appId: "1:259548832559:web:54308d9512de955a42f7da"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 function send()
 {
   msg=document.getElementById("user_name");
   firebase.datatbase().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });
   document.getElementById("msg").value="";
 }