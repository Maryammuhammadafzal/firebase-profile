
import { auth } from '../firebase.js'
import { firstName, lastName, email, address } from '../Signup-Form/index.js';

//Dom elements
document.addEventListener('DOMContentLoaded', function() {
  let profileName = document.getElementById('profile-name');
  let profileEmail = document.getElementById('profile-email');
  let profilePhoneNo = document.getElementById('profile-phone');
  let profileAddress = document.getElementById('profile-address');

  if (profileName) {
    console.log(profileName.textContent);
  } else {
    console.log('Profile name element not found');
  }
});

// profileName = `${firstName.value} ${lastName.value}`;
// profileEmail = email.value;
// profilephoneNo = '021-33333'
// profileAddress = address.value;
//profileEmail , profilephoneNo , profileAddress

// const userProfile = {
//   profileName : profileName,
//   profileEmail : profileEmail,
//   profilephoneNo : profilephoneNo,
//   profileAddress : profileAddress 
// }


const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = userProfile.profileName;
  const email = userProfile.profileEmail;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

