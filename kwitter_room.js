
 var firebaseConfig = {
      apiKey: "AIzaSyDUBeY2qtDSBn-TnBnaQpHjCOSugCnVmHY",
      authDomain: "kakaotalk-a714f.firebaseapp.com",
      databaseURL: "https://kakaotalk-a714f-default-rtdb.firebaseio.com",
      projectId: "kakaotalk-a714f",
      storageBucket: "kakaotalk-a714f.appspot.com",
      messagingSenderId: "533221906534",
      appId: "1:533221906534:web:a9c3ddd079d6492cc5f5a7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
