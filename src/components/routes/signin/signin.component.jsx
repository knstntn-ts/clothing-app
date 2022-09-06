import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../signup-form/signup-form.component";

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
            <SignUpForm />
        </div>
    )
}

export default Signin;