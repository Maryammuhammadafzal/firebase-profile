
import { auth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail  } from "../firebase.js";


// ------------------------------------DOM Elements------------------------------------//

let email = document.getElementById("loginEmail")
let password = document.getElementById("loginPassword")
let body = document.querySelector('.body');
let signinBtn = document.querySelector('.login-btn')
let forgetPassword = document.getElementById('forgot-password')


// -----------------------------login user -------------------------------------------//
const loginUser = ()=> {
 
  // const loginEmail = email.value ;
  // const loginPassword = password.value ;

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    //Successfully login 
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
        title: "Login successfully",
      });
    setTimeout (()=>{
      location.href = "../Dashboard/dashboard.html"
    },2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

      // Switch statements on error
      switch (errorCode) {
        case 'auth/missing-email':
          //  if email is empty Email
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
      case 'auth/missing-password':
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Password is required",
        });
        password.classList += ' border-red';
        break;

        default:
          console.log(errorCode);
          break;
      }
  });


}
signinBtn && signinBtn.addEventListener('click' , loginUser);


const forgotPassword = ()=>{

  sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
    //Successfully Email sent
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
      title: "Email has been Sent",
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${errorCode}`,
    });
  });
}

forgetPassword.addEventListener('click', forgotPassword)
//


onAuthStateChanged(auth, (user) => {
  if (user) {
    
    window.location.replace = "../Dashboard/dashboard.html"

   // const uid = user.uid;
    // ...
  } else {
    body.classList.add("slide"); 
    window.location.href = "../Signup-Form/index.html"
    // User is signed out
    // ...

  }
});
