var firebaseConfig = {
    apiKey: "AIzaSyB_ZEh9MISptTkFwXKxqplcDlXBAAIYz7A",
    authDomain: "kwitter-83431.firebaseapp.com",
    databaseURL: "https://kwitter-83431-default-rtdb.firebaseio.com",
    projectId: "kwitter-83431",
    storageBucket: "kwitter-83431.appspot.com",
    messagingSenderId: "1040045036793",
    appId: "1:1040045036793:web:2d4c674dffd4d185753e28"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
