import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBig8CdjOuRK6IS0NKwqj0va0dbsQBO74Q',
  authDomain: 'photo-upload-app-e7cea.firebaseapp.com',
  databaseURL: 'https://photo-upload-app-e7cea.firebaseio.com',
  projectId: 'photo-upload-app-e7cea',
  storageBucket: 'photo-upload-app-e7cea.appspot.com',
  messagingSenderId: '959610749584',
  appId: '1:959610749584:web:3b4f46bee6805ed8058e15',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
