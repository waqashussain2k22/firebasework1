
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL8VNdZJL_WGG0I73xafudrRXzV09PTbU",
  authDomain: "classfirstproject.firebaseapp.com",
  projectId: "classfirstproject",
  storageBucket: "classfirstproject.appspot.com",
  messagingSenderId: "967061455585",
  appId: "1:967061455585:web:c74be48c2c6fe0b032ada0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
