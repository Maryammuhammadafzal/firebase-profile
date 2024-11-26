
import { auth, signInWithEmailAndPassword, provider, GoogleAuthProvider ,signInWithPopup, onAuthStateChanged, sendPasswordResetEmail  } from "../firebase.js";


// // ------------------------------------DOM Elements------------------------------------//

let email = document.getElementById("loginEmail")
let password = document.getElementById("loginPassword")
let body = document.querySelector('.body');
let loginButton = document.getElementById('loginButton')
let googleButton = document.getElementById('googleButton')
let forgetPass = document.getElementById('forgetPass')


document.getElementById("loader").style.display = "none";

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

// -----------------------------login user -------------------------------------------//
const loginUser = ()=> {
 
  const loginEmail = email.value ;
  const loginPassword = password.value ;

    signInWithEmailAndPassword(auth, loginEmail,loginPassword)
  .then((userCredential) => {
      document.getElementById("loader").style.display = "block";
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

  myFunction()
}
loginButton && loginButton.addEventListener('click' , loginUser);

//-----------------Google Sign in Method-------------------------

signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    
   
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
    
  });

const forgotPassword = ()=>{

  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    //  Successfully Email sent
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



onAuthStateChanged(auth, (user) => {
  if (user) {
    
    window.location.replace = "../Dashboard/dashboard.html"

   const uid = user.uid;
   
    // ...
  } else {
    body.classList.add("slide"); 
    window.location.href = "../Signup-Form/index.html"
    // User is signed out
    // ...

  }
});
