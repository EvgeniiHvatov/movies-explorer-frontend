import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);


  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    if (name === "email") {
      if (!isEmail(value)) {
        evt.target.setCustomValidity('Введите корректный e-mail');
      } else {
        evt.target.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setValid(input.closest("form").checkValidity());


  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setValid(newIsValid);
    },
    [setValues, setErrors, setValid]
  );

  return {
    values,
    handleChange,
    setValues,
    errors,
    setErrors,
    isValid,
    setValid,
    resetForm,
  };
}

export default useFormWithValidation;
