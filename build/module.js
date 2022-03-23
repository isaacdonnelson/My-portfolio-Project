console.log("module connected");
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5PhKz_YJkx8nOcanC23fhTJdMEHjUuAw",
  authDomain: "isaac-donnelson-portfolio.firebaseapp.com",
  databaseURL: "https://isaac-donnelson-portfolio-default-rtdb.firebaseio.com",
  projectId: "isaac-donnelson-portfolio",
  storageBucket: "isaac-donnelson-portfolio.appspot.com",
  messagingSenderId: "988296904933",
  appId: "1:988296904933:web:29f8062ebfe1d3a6d6d40c",
  measurementId: "G-97EBDHK3KD",
};
//initialize firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// //form value reference
// const form = document.querySelector("#contact-form");
// //listen for submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let name = document.querySelector("#full-name").value;
//   let email = document.querySelector("#email-address").value;
//   let message = document.querySelector("#enter-message").value;

//   console.log(name, email, message);
//   saveContactInfo(name, email, message);
//   alert("submitted");
// });
// //save info to firebase
// function saveContactInfo(name, email, message) {
//   const db = getDatabase();
//   addDoc(doc(db, "messages"), {
//     name: name,
//     email: email,
//     message: message,
//   });
// }
