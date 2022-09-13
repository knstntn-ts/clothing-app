import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../signin-form/signin-form.component";

import {AuthContainer} from "./authentication.styles";

const Authentication = () => {

    return (
        <AuthContainer>

            <SignInForm />
            <SignUpForm />
            
        </AuthContainer>
    )
}

export default Authentication;