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

document.getElementById("simplon").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var prenom = getElementVal("prenom");
  var contact = getElementVal("contact");
  var emailid = getElementVal("emailid");

  console.log(name, prenom, contact, emailid);
  
  saveMessages(name, prenom, contact, emailid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("simplon").reset();
}

const saveMessages = (name, prenom, contact, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    prenom: prenom,
    contact: contact,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
 