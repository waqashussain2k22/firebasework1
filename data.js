import { db } from "./firebase.mjs";
import { collection, getDocs, doc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let showData = document.getElementById("showData");
let table = document.getElementById("tableData");

showData.addEventListener("click", async function () {
    console.log(showData);

    const querySnapshot = await getDocs(collection(db, "Registration Form"));
    querySnapshot.forEach((doc) => {
        let getData = doc.data();

        let newRow = `
        <tr>
            <td>${getData.username}</td>
            <td>${getData.fatherName}</td>
            <td>${getData.Age}</td>
            <td>${getData.email}</td>
            <td>${getData.mobileNumber}</td>
            <td>${getData.cnic}</td>
            <td>${getData.lastQualification}</td>
            <td><button class="editBtn">Edit</button></td>
            <td><button class="delBtn" data-id="${doc.id}">Del</button></td>
        </tr>`;

        table.innerHTML += newRow;
    });

    document.querySelectorAll(".delBtn").forEach(button => {
        button.addEventListener("click", async function (event) {
            let docId = event.target.getAttribute("data-id");
            if (docId) {
                await deleteDoc(doc(db, "Registration Form", docId));
                event.target.parentElement.parentElement.remove();
            }
        });
    });

  
});
