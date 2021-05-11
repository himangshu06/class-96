
var firebaseConfig = {
    apiKey: "AIzaSyCgkuYdOZ4TlNrB2GL9Fl9bTsw00_bg5NA",
    authDomain: "kwitter-2c65d.firebaseapp.com",
    projectId: "kwitter-2c65d",
    storageBucket: "kwitter-2c65d.appspot.com",
    messagingSenderId: "188395775138",
    appId: "1:188395775138:web:447b45a07253a3e29ca3fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function AddUser(){
    username = document.getElementById("user").value;
    firebase.database().ref("/").child(username).update({
        purpose:"Adding User"
    })
}
