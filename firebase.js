// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCaiWs8pTIscDdYnR8X2Uif2yFVpNhjcxQ',
  authDomain: 'webuildwebssa.firebaseapp.com',
  databaseURL:
    'https://webuildwebssa-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'webuildwebssa',
  storageBucket: 'webuildwebssa.appspot.com',
  messagingSenderId: '934885071100',
  appId: '1:934885071100:web:bc403bdcfa20019fcc5f79',
  measurementId: 'G-9ZE9B2ET8H'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
