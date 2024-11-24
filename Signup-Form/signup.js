
// //---------------- Replace the location to local host ----------------------- //
// location.href.replace("http://localhost:5500/index.html");

//--------------------------- importing ---------------------------------//
import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";

//-------------------------- Get Dom Elements ---------------------------//
let signupbtn = document.getElementById("signup-btn");
let backtosignupbtn = document.querySelector(".back-btn");
let loginBtn = document.getElementById('login-btn')
let body = document.querySelector(".body");
body.classList.add("slide"); 
console.log(body);

  // get all inputs from Dom
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let birthdate = document.getElementById("birth-date");
  let address = document.getElementById("address");

 //Make an object of sigup page inputs
//  let inputValues = {
//   userName : `${firstName.value} ${lastName.value}`,
//   userEmail : email.value,
//   userPassword : password.value,
//   userAddress : address.value
//  }

  
  // ----------------------- add a slide in pages ---------------------------//
 // move to login page
loginBtn && loginBtn.addEventListener('click' , ()=>{
  body.classList.add("slide"); 
});

//Function of back button 
backtosignupbtn && backtosignupbtn.addEventListener('click' , ()=>{
  body.classList.remove('slide');
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
   
    // if (email.value.trim() && password.value.trim()){
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  },
                });
                Toast.fire({
                  icon: "success",
                  title: "Signed up successfully",
                });

                setTimeout (()=>{
                    body.classList.add("slide"); 
                  },1000)
      
      console.log(user);
      
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Switch statements on error
        switch (errorCode) {
          //  if email is empty Email
          case 'auth/missing-email':
        Swal.fire({
          icon: "error",
          title: "Null",
          text: "Email is required",
        });
        break;

        //  if email is empty Email
          case 'auth/invalid-email':
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Email is Incorrect",
        });
        email.classList += ' border-red';
        break;

        //  if email is empty Email
        case 'auth/email-already-in-use':
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Email is already registered",
        });
        email.classList += ' border-red'; 
        break;
        
        //  if email is empty Email
        case 'auth/missing-password':
          Swal.fire({
            icon: "error",
            title: "Null",
            text: "Password is required",
          });
          password.classList += ' border-red';
          break;

        default:
          console.log(errorCode);
          break;
        }
    });
    
// }

}
signupbtn && signupbtn.addEventListener('click' , signupUser);

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    body.classList.add('slide')

    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


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

export { body ,firstName , lastName , email , address}