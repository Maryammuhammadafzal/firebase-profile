

let startBtn = document.getElementById("startBtn");
let tryBtn = document.getElementById("tryBtn");
let siginBtn = document.getElementById("siginBtn");

let redirectToSigninPage = ()=>{
      window.location.href = "./Signup-Form/signup.html";
}
let redirectToTryPage = ()=>{ 
      window.location.href = "./createPost/createPost.html";
}
let redirectToStartPage = ()=>{
      window.location.href = "./Dashboard/dashboard.html";
}

siginBtn && siginBtn.addEventListener("click",redirectToSigninPage);
tryBtn && tryBtn.addEventListener("click",redirectToTryPage);
startBtn && startBtn.addEventListener("click",redirectToStartPage);