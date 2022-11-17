// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
