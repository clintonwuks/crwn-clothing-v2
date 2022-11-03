// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaHlFOsNt9kgh5Mwz_MIV2OOGa61KCYxw",
  authDomain: "crwn-clothing-v2-62c80.firebaseapp.com",
  projectId: "crwn-clothing-v2-62c80",
  storageBucket: "crwn-clothing-v2-62c80.appspot.com",
  messagingSenderId: "646959203085",
  appId: "1:646959203085:web:957dbf89d52672ffaf2644",
  measurementId: "G-7CQ9LSNDYT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// const makeToast = () => {
//     return(
//         toast({
//             autoDismiss: true,
//             hideProgressBar: true,
//     );
// }

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    // console.log(userSnapShot.exists());
    // userSnapShot.exists ? console.log('true') : console.log('false');

    if(!userSnapShot.exists() ){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
        })
    }catch (err) {
            console.log('error creating the user ', err);
        }
    }
}