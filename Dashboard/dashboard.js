
import {auth , signOut, onAuthStateChanged } from "../firebase.js"
import {body} from "../Signup-Form/index.js"
import {body} from "../Login-Form/login.js"
// document.querySelector('.edit-btn').addEventListener('click', () => {
//       alert('Edit profile feature coming soon!');
//     });
    
let signupBody = body
console.log(signupBody);


let profileimage = document.getElementById("profile-img");
let dropdownBox = document.getElementById('dropdown-box')
const showProfileBox = ()=> {
  
  dropdownBox.style.display = "block"
  dropdownBox.innerHTML = `
  <ul>
  <li type="button" id="id"> <i class="fa-duotone fa-solid fa-user"></i> User Name</li>
  
  
  <li type="button" id="user-profile">Profile</li>
  <li type="button">Setting</li>
  <li type="button">Privacy&Security</li>
  <li type="button" id="logout">Logout</li>
  </ul>`
  
  let userProfile = document.getElementById("user-profile");
  let profilePage = ()=>{
    window.location.href = "../User-Profile/profile.html"
    console.log(userProfile);
    
  }
  userProfile && userProfile.addEventListener('click' ,profilePage);
  
  
  let logoutBtn = document.getElementById("logout")
            const logout = ()  => {
            
            signOut(auth).then(() => {
              
              
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
                title: "log out successfully",
              });
            
            }).catch((error) => {
              console.log(errorrror);
              
            });
            
            }
            
            logoutBtn.addEventListener('click' , logout);
          }
          profileimage.addEventListener('click' , showProfileBox);
          
  // Listen for changes in authentication state
  // let signupBody = document.querySelector('.body')
 onAuthStateChanged(auth, (user) => {
   if (!user) {
       // If no user is logged in (i.e., the user is logged out)
       
       setTimeout(() => {
         // Add 'slide' class to body to trigger animation
         signupBody.classList.add("slide"); 
         
         // After the animation (1 second), redirect to the login page
         setTimeout(() => {
           window.location.href = "../Signup-Form/index.html"; // Adjust path as needed
          }, 1000); // Delay redirection by the duration of the slide animation
        }, 1000); // Wait for the slide animation to start (if necessary)
        // const uid = user.uid;
      }
    });
    

// console.log(body); // Debugging the body element
    

//     // ...
//   } //else {
//     // window.location.href = "../Dashboard/dashboard.html"

//     // User is signed out
//     // ...
//   //}
// });