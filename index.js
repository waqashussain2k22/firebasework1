import { db } from "./firebase.mjs";
import { getFirestore ,collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




let submit = document.getElementById("submit")

submit.addEventListener("click" ,async function(){
    let username = document.getElementById("name").value
    let fatherName = document.getElementById("fatherName").value
    let Age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let mobileNumber = document.getElementById("mobileNumber").value
    let cnic = document.getElementById("cnic").value
    let lastQualification = document.getElementById("lastQualification").value



let userData = {
    username:username,
    fatherName:fatherName,
    Age:Age,
    email:email,
    mobileNumber:mobileNumber,
    cnic:cnic,
    lastQualification:lastQualification,

}


try {
    const docRef = await addDoc(collection(db, "Registration Form"), {
      ...userData
    });
    alert("form Submit")
window.location.href = "admin.html"
    
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
console.log(userData);



})