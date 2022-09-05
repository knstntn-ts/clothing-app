import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";


const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    return (
        <div>
            <h1>
                Signin
            </h1>
            <button onClick={logGoogleUser} >Sign in with Google Popup</button>
        </div>
    )
}

export default Signin;