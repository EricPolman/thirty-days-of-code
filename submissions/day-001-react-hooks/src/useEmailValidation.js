import { useState, useReducer } from "react";
import useInterval from "./useInterval";
import { validateEmail } from "./validateEmail";

export default function useEmailValidation(secondsFormValidFor) {
  const [emailValid, setEmailValid] = useState(false);
  const reducer = (state, action) => {
    state = action;
    setEmailValid(validateEmail(state));
    return action;
  };
  const [email, setEmail] = useReducer(reducer, "");
  const [count, setCount] = useState(secondsFormValidFor);
  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 0 ? 1000 : null
  );

  return { count, email, setEmail, emailValid };
}
