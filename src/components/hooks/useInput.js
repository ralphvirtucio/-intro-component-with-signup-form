import { useState } from 'react';

export const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputFieldTouch, setIsInputFieldTouch] = useState(false);

  const isEnteredValueValid = validateValue(enteredValue);
  const enteredValueValid = !isEnteredValueValid && isInputFieldTouch;

  const onInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onInputBlurHandler = (e) => {
    setIsInputFieldTouch(true);
  };

  const resetInput = () => {
    setEnteredValue('');
    setIsInputFieldTouch(false);
  };

  const resetIsTouch = () => {
    setIsInputFieldTouch(true);
  };

  return [
    enteredValue,
    isEnteredValueValid,
    enteredValueValid,
    onInputChangeHandler,
    onInputBlurHandler,
    resetInput,
    resetIsTouch,
  ];
};
