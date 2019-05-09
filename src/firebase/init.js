import { firebase } from "@firebase/app";
import "@firebase/firestore";
// Your web app's Firebase configuration

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYYIfL7_Y4qnKx6suGh5RvKE0vOYrq5eY",
  authDomain: "chat-smile-61154.firebaseapp.com",
  databaseURL: "https://chat-smile-61154.firebaseio.com",
  projectId: "chat-smile-61154",
  storageBucket: "chat-smile-61154.appspot.com",
  messagingSenderId: "164483995027",
  appId: "1:164483995027:web:d83a96f94b773738"
});

export const db = firebaseApp.firestore();

export default firebaseApp.firestore();
