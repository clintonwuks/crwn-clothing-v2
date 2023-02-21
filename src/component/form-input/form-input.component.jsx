import {
  FormInputGroup,
  FormInputLabel,
  InputContainer,
} from "./form-input.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <InputContainer {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormInputGroup>
  );
};

export default FormInput;
