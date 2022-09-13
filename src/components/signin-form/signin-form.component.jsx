import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailandPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer, ButtonsContainer, H2} from "./signin-form.styles";
import { useState } from "react";
const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailandPassword(email, password);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password for email")
                    break
                case "auth/user-not-found":
                    alert("This email doesn't exist")
                    break
                default:
                    console.log(error)
            }


        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        

    }
    return (
        <SignInContainer>
            <H2>I already have an account</H2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />
                <ButtonsContainer>
                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} type="button">Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;

