
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCccod4LDbuk9gp6f_juhW3ktRBs0Yn2B0",
      authDomain: "kwitter-25a40.firebaseapp.com",
      databaseURL: "https://kwitter-25a40-default-rtdb.firebaseio.com",
      projectId: "kwitter-25a40",
      storageBucket: "kwitter-25a40.appspot.com",
      messagingSenderId: "12549580049",
      appId: "1:12549580049:web:64b53bf27824d1070918b0"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
