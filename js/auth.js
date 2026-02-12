window.register = async function(){

const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;
const role=document.getElementById("role").value;

try{

const userCred = await createUserWithEmailAndPassword(auth,email,pass);

// Save role in Firestore
await setDoc(doc(db,"users",userCred.user.uid),{
email:email,
role:role
});

alert("Registered!");
window.location="login.html";

}catch(err){
alert(err.message);
}

}
import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async function(){

const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;

try{

const userCred = await signInWithEmailAndPassword(auth,email,pass);

// Get role from Firestore
const docSnap = await getDoc(
doc(db,"users",userCred.user.uid)
);

const role = docSnap.data().role;

// Redirect based on role
if(role==="admin"){
window.location="dashboard.html";
}else{
window.location="user.html";
}

}catch(err){
alert(err.message);
}

}
