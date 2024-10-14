import React from "react";
import { Steps } from "@/constants";
import { noop } from "lodash";

export type SignUpContextType = {
  step: Steps;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const defaultContext = {
  step: Steps.STEP_1,
  setStep: noop,
  email: "",
  setEmail: noop,
};
const SignUpContext = React.createContext<SignUpContextType>(defaultContext);

export const useSignUpContext = () => React.useContext(SignUpContext);

export const SignUpProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [step, setStep] = React.useState<number>(Steps.STEP_1);
  const [email, setEmail] = React.useState<string>("");

  const value = React.useMemo(
    () => ({
      step,
      setStep,
      email,
      setEmail,
    }),
    [step, email]
  );
  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};
