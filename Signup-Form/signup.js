//--------------------------- importing ---------------------------------//
// import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";

let body = document.querySelector(".body");
// body.classList.add("slide"); 

  

document.addEventListener("DOMContentLoaded", () => {

  //-------------------------- Get Dom Elements ---------------------------//

  let SignupButton = document.getElementById("SignupButton");
  let loginBtn = document.getElementById('login-btn')
  let forgetPass = document.getElementById('forgetPass')
  
  // -----------------Get Form Inputs----------------------//
  let signupEmail = document.getElementById("signupEmail");
  let signupPassword = document.getElementById("sinupPassword");
  const firstName = document.getElementById('firstname'); 
  const lastName = document.getElementById('lastname');
  let signupBirthdate = document.getElementById("birthDate");
  let signupAddress = document.getElementById("signupAddress");
  const genderElements = document.getElementsByName('gender');
  let gender = '';
        
  let signupUser = (event) => {
    event.preventDefault();
    
    let inputValues = {}; 
    for( let i = 0; i < genderElements.length; i++) {
      if(genderElements[i].checked) {
           gender = genderElements[i].getAttribute('value');
          }
        }

        if (firstName.value.trim() !== "" && lastName.value.trim() !== "" && signupEmail.value.trim() !== "" && signupPassword.value.trim() !== "" && signupAddress.value.trim() !== "" && signupBirthdate.value.trim() !== "" && gender) {
      
      inputValues = {
          userName: `${firstName.value.trim()} ${lastName.value.trim()}`,
          userEmail: signupEmail.value.trim(),
          userPassword: signupPassword.value.trim(), 
          userAddress: signupAddress.value.trim(), 
          userBirthDate: signupBirthdate.value.trim(), 
          gender: gender,
        };
        console.log(inputValues);
        
        
      } else {
      console.log("no");
        if(firstName.value.trim() === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "First Name is required",
      });
      return;
      }
      
       else if(lastName.value.trim() === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "Last Name is required",
      });
      return;
      }
       else if(signupEmail.value.trim() === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "Email is required",
      });
      return;
      }
       else if(signupPassword.value.trim() === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "Password is required",
      });
      return;
      }
      else if(signupAddress.value.trim() === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "Address is required",
      });
      return;
      }
      else if(signupBirthdate.value.trim() === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "Birth Date is required",
      });
      return;
      }
      else if(gender === ""){
         //  if email is empty Email
      Swal.fire({
        icon: "error",
        title: "Null",
        text: "gender is required",
      });
      return;
      }
     
      
      
    }
    
    
  };
  
  let form = document.getElementById("signupform");
  form.addEventListener("submit", signupUser);

  // ----------------------- add a slide in pages ---------------------------//
  //Function of back button
  let gotoSignup = document.getElementById('gotoSignup');
  gotoSignup && gotoSignup.addEventListener('click', () => {
      body.classList.remove('slide');
  });
  
  // move to login page
  let gotoLogin = document.getElementById('gotoLogin');
  gotoLogin && gotoLogin.addEventListener('click', () => {
      body.classList.add("slide");
  });
})




// // ---------------------------Add a loader -----------------------//
// // const loader = ()=> {
// //     body.innerHTML= `<div class="three col">
// //     <div class="loader" id="loader-4">
// //       <span></span>
// //       <span></span>
// //       <span></span>
// //     </div>`
// // }

// //--------------------------- SignUp user-----------------------------//
// const signupUser = ()=>{
   
// //     // if (email.value.trim() && password.value.trim()){
// //     createUserWithEmailAndPassword(auth, email.value, password.value)
// //     .then((userCredential) => {
// //       // Signed up 
// //       const user = userCredential.user;
// //       const Toast = Swal.mixin({
// //                   toast: true,
// //                   position: "top-end",
// //                   showConfirmButton: false,
// //                   timer: 3000,
// //                   timerProgressBar: true,
// //                   didOpen: (toast) => {
// //                     toast.onmouseenter = Swal.stopTimer;
// //                     toast.onmouseleave = Swal.resumeTimer;
// //                   },
// //                 });
// //                 Toast.fire({
// //                   icon: "success",
// //                   title: "Signed up successfully",
// //                 });

// //                 setTimeout (()=>{
// //                     body.classList.add("slide"); 
// //                   },1000)
      
// //       console.log(user);
      
// //       // ...
// //     })
// //     .catch((error) => {
// //         const errorCode = error.code;
// //         const errorMessage = error.message;

// //         // Switch statements on error
// //         switch (errorCode) {
// //           //  if email is empty Email
// //           case 'auth/missing-email':
// //         Swal.fire({
// //           icon: "error",
// //           title: "Null",
// //           text: "Email is required",
// //         });
// //         break;

// //         //  if email is empty Email
// //           case 'auth/invalid-email':
// //         Swal.fire({
// //           icon: "error",
// //           title: "Error",
// //           text: "Email is Incorrect",
// //         });
// //         email.classList += ' border-red';
// //         break;

// //         //  if email is empty Email
// //         case 'auth/email-already-in-use':
// //         Swal.fire({
// //           icon: "error",
// //           title: "Error",
// //           text: "Email is already registered",
// //         });
// //         email.classList += ' border-red'; 
// //         break;
        
// //         //  if email is empty Email
// //         case 'auth/missing-password':
// //           Swal.fire({
// //             icon: "error",
// //             title: "Null",
// //             text: "Password is required",
// //           });
// //           password.classList += ' border-red';
// //           break;

// //         default:
// //           console.log(errorCode);
// //           break;
// //         }
// //     });
    
// // // }
// event.preventDefault()


// console.log(gender);
// console.log(birthdate.value);
// console.log(inputValues);



// }
// SignupButton && SignupButton.addEventListener('click' ,signupUser);

// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
    
// //     body.classList.add('slide')

// //     const uid = user.uid;
// //     // ...
// //   } else {
// //     // User is signed out
// //     // ...
// //   }
// // });


// // If user is currently signed in
// // const user = auth.currentUser;

// // if (user) {
// //   console.log("User is signed in");
  
// //   // User is signed in, see docs for a list of available properties
// //   // https://firebase.google.com/docs/reference/js/auth.user
// //   // ...
// // } else {
// //   console.log('No user is signed in');
  
// //   // No user is signed in.
// // }

// //

