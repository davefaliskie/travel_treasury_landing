import Firebase from 'firebase/app'
import credentials from './credentials'

export const App = Firebase.initializeApp(credentials.config);
