import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { collection, writeBatch, query, getDocs } from "firebase/firestore";
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


const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done")

}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShopt) => {
        const {title, items} = docSnapShopt.data();
        acc[title.toLowerCase()] = items;
        return acc
    }, {})

    return categoryMap;
    
}


export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt,...additionalInfo,
            })
        } catch (err) {
            console.log("error creating new user", err.message)
        }

    }

    return userDocRef;

}




export const createAuthUserWithEmailandPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailandPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);