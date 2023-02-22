import { useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const navigate1 = useCallback(
    () => (currentUser ? navigate("/") : navigate("/auth")),
    [currentUser]
  );

  useEffect(() => {
    navigate1();
  }, [navigate1]);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
