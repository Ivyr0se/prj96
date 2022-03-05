var firebaseConfig = {
  apiKey: "AIzaSyCW7CzQwKq7Wng4Lco_BcvkXRnEmaH9E6E",
  authDomain: "letschat-448e8.firebaseapp.com",
  databaseURL: "https://letschat-448e8-default-rtdb.firebaseio.com",
  projectId: "letschat-448e8",
  storageBucket: "letschat-448e8.appspot.com",
  messagingSenderId: "20517385908",
  appId: "1:20517385908:web:f2834607a0cb87686949e1"
};

firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"      
})
localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
}