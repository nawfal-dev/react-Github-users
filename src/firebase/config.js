import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCXCp25Uv4x1Mhc2y5WgrQdpvSqOmABi24',
  authDomain: 'api-github-project-ed4af.firebaseapp.com',
  projectId: 'api-github-project-ed4af',
  storageBucket: 'api-github-project-ed4af.appspot.com',
  messagingSenderId: '334365136032',
  appId: '1:334365136032:web:4c403e4df658370b66e5c5',
}

const firebaseConfig = firebase.initializeApp(config)
const db = firebaseConfig.firestore()
const storage = firebase.storage()

export { db, storage }
