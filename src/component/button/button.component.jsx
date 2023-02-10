import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

//how to do default prop or parameters if not passed
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  // return <BUTTON_TYPE_CLASSES.buttonType/>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const RealButton = getButton(buttonType);
  return <RealButton {...otherProps}>{children}</RealButton>;
};

export default Button;
