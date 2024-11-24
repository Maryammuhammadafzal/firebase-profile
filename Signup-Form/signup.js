//--------------------------- importing ---------------------------------//
// import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";

let body = document.querySelector(".body");
body.classList.add("slide"); 

//-------------------------- Get Dom Elements ---------------------------//
let gotoSignup = document.getElementById("gotoSignup");
let gotoLogin = document.getElementById("gotoLogin");
let SignupButton = document.getElementById("SignupButton");
let loginBtn = document.getElementById('login-btn')
let forgetPass = document.getElementById('forgetPass')

  // get all inputs from Dom
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  let signupEmail = document.getElementById("email")
  let signupPassword = document.getElementById("password")
  let birthdate = document.getElementById("birth-date");
  let address = document.getElementById("address");
  let gendermale = document.getElementById("gendermale");
  let genderfemale = document.getElementById("genderfemale");
  let genderother = document.getElementById("genderother");
  // Destructure gender in an array
  let gender = Array.from([gendermale, genderfemale, genderother]);
  

//  Make an object of sigup page inputs
 let inputValues = {
  userName : `${firstName} ${lastName}`,
  userEmail : signupEmail,
  userPassword : signupPassword,
  userAddress : address,
  birthdate : birthdate,
  gender : gender.find(item => item.checked)
 }

  
  // ----------------------- add a slide in pages ---------------------------//
  //Function of back button 
  gotoSignup && gotoSignup.addEventListener('click' , ()=>{
    body.classList.remove('slide');
  });
 // move to login page
gotoLogin && gotoLogin.addEventListener('click' , ()=>{
  body.classList.add("slide"); 
});


// ---------------------------Add a loader -----------------------//
// const loader = ()=> {
//     body.innerHTML= `<div class="three col">
//     <div class="loader" id="loader-4">
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>`
// }

//--------------------------- SignUp user-----------------------------//
const signupUser = ()=>{
   
//     // if (email.value.trim() && password.value.trim()){
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       const Toast = Swal.mixin({
//                   toast: true,
//                   position: "top-end",
//                   showConfirmButton: false,
//                   timer: 3000,
//                   timerProgressBar: true,
//                   didOpen: (toast) => {
//                     toast.onmouseenter = Swal.stopTimer;
//                     toast.onmouseleave = Swal.resumeTimer;
//                   },
//                 });
//                 Toast.fire({
//                   icon: "success",
//                   title: "Signed up successfully",
//                 });

//                 setTimeout (()=>{
//                     body.classList.add("slide"); 
//                   },1000)
      
//       console.log(user);
      
//       // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         // Switch statements on error
//         switch (errorCode) {
//           //  if email is empty Email
//           case 'auth/missing-email':
//         Swal.fire({
//           icon: "error",
//           title: "Null",
//           text: "Email is required",
//         });
//         break;

//         //  if email is empty Email
//           case 'auth/invalid-email':
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Email is Incorrect",
//         });
//         email.classList += ' border-red';
//         break;

//         //  if email is empty Email
//         case 'auth/email-already-in-use':
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Email is already registered",
//         });
//         email.classList += ' border-red'; 
//         break;
        
//         //  if email is empty Email
//         case 'auth/missing-password':
//           Swal.fire({
//             icon: "error",
//             title: "Null",
//             text: "Password is required",
//           });
//           password.classList += ' border-red';
//           break;

//         default:
//           console.log(errorCode);
//           break;
//         }
//     });
    
// // }

gender.map((el) => el.checked)
console.log(gender);
console.log(birthdate.value);
console.log(...inputValues);



}
SignupButton && SignupButton.addEventListener('click' , signupUser);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
    
//     body.classList.add('slide')

//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });


// If user is currently signed in
// const user = auth.currentUser;

// if (user) {
//   console.log("User is signed in");
  
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/auth.user
//   // ...
// } else {
//   console.log('No user is signed in');
  
//   // No user is signed in.
// }

//

