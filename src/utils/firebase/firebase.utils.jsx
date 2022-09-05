import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPs9DTt1rav2HBCWVrakAw03jrkn7Fc1U",
    authDomain: "clothing-db-82d9f.firebaseapp.com",
    projectId: "clothing-db-82d9f",
    storageBucket: "clothing-db-82d9f.appspot.com",
    messagingSenderId: "369794199019",
    appId: "1:369794199019:web:250f5b40c6e0444abefdae"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (err) {
            console.log("error creating new user", err.message)
        }

    }
    
    return userDocRef;

}


