//ADD YOUR FIREBASE LINKS HERE
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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome"+user_name+ "!";
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"addingroomname"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div> <hr>"
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}