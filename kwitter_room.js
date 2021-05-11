
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCgkuYdOZ4TlNrB2GL9Fl9bTsw00_bg5NA",
      authDomain: "kwitter-2c65d.firebaseapp.com",
      databaseURL: "https://kwitter-2c65d-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c65d",
      storageBucket: "kwitter-2c65d.appspot.com",
      messagingSenderId: "188395775138",
      appId: "1:188395775138:web:447b45a07253a3e29ca3fb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+username+"!";
function Add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
}

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname-"+Room_names);
row = "<div class='roomname' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
window.location="index.html";
}




