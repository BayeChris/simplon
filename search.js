const firebaseConfig = {
    apiKey: "AIzaSyBnjVUN5eICjYxDNMysN4A6XMX0H6y8x3c",
    authDomain: "simplon-ea89e.firebaseapp.com",
    databaseURL: "https://simplon-ea89e-default-rtdb.firebaseio.com",
    projectId: "simplon-ea89e",
    storageBucket: "simplon-ea89e.appspot.com",
    messagingSenderId: "603135074201",
    appId: "1:603135074201:web:63b2c35793c3820f95bd08"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("simplon");
  var hello = firebase.database().ref("/");
  
  console/log(hello);
  console.log(contactFormDB);

  // communication avec la base de donnée afin d'obtenir les données
function getData() {

    user_name = document.getElementById("name").value;

    console.log(user_name);

    var name1;
    // var user_prenom = document.getElementById("prenom").value;
    // var contact = document.getElementById("contact").value;
    // var emailid = document.getElementById("emailid").value;

    
}

getData();
