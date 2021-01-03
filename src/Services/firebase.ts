import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL:
    'https://user-list-c0863-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MSID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
}

firebase.initializeApp(config)
export const usersRef = firebase.database().ref('users')

export default firebase
