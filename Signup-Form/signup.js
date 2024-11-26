//--------------------------- importing ---------------------------------//
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged ,
} from "../firebase.js";

document.getElementById("loader").style.display = "none";
let body = document.querySelector(".body");
body.classList.add("slide");

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  //-------------------------- Get Dom Elements ---------------------------//

  let SignupButton = document.getElementById("SignupButton");
  let loginBtn = document.getElementById("login-btn");
  let forgetPass = document.getElementById("forgetPass");

  // -----------------Get Form Inputs----------------------//
  let signupEmail = document.getElementById("signupEmail");
  let signupPassword = document.getElementById("sinupPassword");
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  let signupBirthdate = document.getElementById("birthDate");
  let signupAddress = document.getElementById("signupAddress");
  const genderElements = document.getElementsByName("gender");
  let gender = "";

  // -------------------Signup Function ----------------------//
  let signupUser = async(event) => {
    event.preventDefault();

    let inputValues = {};
    for (let i = 0; i < genderElements.length; i++) {
      if (genderElements[i].checked) {
        gender = genderElements[i].getAttribute("value");
      }
    }

    //  Add Conditions to check if all fields are filled
    if (
      firstName.value.trim() !== "" &&
      lastName.value.trim() !== "" &&
      signupEmail.value.trim() !== "" &&
      signupPassword.value.trim() !== "" &&
      signupAddress.value.trim() !== "" &&
      signupBirthdate.value.trim() !== "" &&
      gender
    ) {
      inputValues = {
        userName: `${firstName.value.trim()} ${lastName.value.trim()}`,
        userEmail: signupEmail.value.trim(),
        userPassword: signupPassword.value.trim(),
        userAddress: signupAddress.value.trim(),
        userBirthDate: signupBirthdate.value.trim(),
        gender: gender,
      };

      //  ---------------------Firebase Signup Method ---------------------------
      createUserWithEmailAndPassword(
        auth,
        inputValues["userEmail"],
        inputValues["userPassword"]
      )
        .then((userCredential) => {
          document.getElementById("loader").style.display = "block";
          // Signed up
          const user = userCredential.user;
          console.log(user);
          //Successfully signup
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

          // Redirect to login page
          setTimeout(() => {
            window.location.href = "../Dashboard/dashboard.html";
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          Swal.fire({
            icon: "error",
            title: "Error",
            text: `${errorMessage}`,
          });
         
        });
      // ---------------------Firestore Add Docs Method ---------------------------
      
        try {
          const docRef = await addDoc(collection(db, "users"), {
            userName : inputValues['userName'],
            userAddress: inputValues['userAddress'] ,
            userBirthDate: inputValues['userBirthDate'],
            userGender: inputValues['gender'],
            userEmail: inputValues['userEmail'],
            userPassword: inputValues['userPassword'],
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
        
    } else {
      if (lastName.value.trim() === "") {
        lastName.setAttribute("class", "borderRed");
      } else {
        lastName.removeAttribute("class", "borderRed");
      }
      if (signupEmail.value.trim() === "") {
        signupEmail.setAttribute("class", "borderRed");
      } else {
        signupEmail.removeAttribute("class", "borderRed");
      }
      if (signupPassword.value.trim() === "") {
        signupPassword.setAttribute("class", "borderRed");
      } else {
        signupPassword.removeAttribute("class", "borderRed");
      }
      if (signupAddress.value.trim() === "") {
        signupAddress.setAttribute("class", "borderRed");
      } else {
        signupAddress.removeAttribute("class", "borderRed");
      }
      if (signupBirthdate.value.trim() === "") {
        signupBirthdate.setAttribute("class", "borderRed");
      } else {
        signupBirthdate.removeAttribute("class", "borderRed");
      }
      if (gender === "") {
      }
    }
  };

  let form = document.getElementById("signupform");
  form.addEventListener("submit", signupUser);

myFunction()

  // ----------------------- add a slide in pages ---------------------------//
  //Function of back button
  let gotoSignup = document.getElementById("gotoSignup");
  gotoSignup &&
    gotoSignup.addEventListener("click", () => {
      body.classList.remove("slide");
    });

  // move to login page
  let gotoLogin = document.getElementById("gotoLogin");
  gotoLogin &&
    gotoLogin.addEventListener("click", () => {
      body.classList.add("slide");
    });

    // CHange the state if the user is signed up
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        window.location.href = "../Dashboard/dashboard.html";
      } 
    });

});
