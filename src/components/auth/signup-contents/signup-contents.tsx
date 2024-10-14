import { SignUpProvider, useSignUpContext } from "./signup-context";
import { Steps } from "@/constants";
import { SignupForm } from "./signup-form";
import { CheckMail } from "./check-mail";
import { VerifyEmailForm } from "./verify-email-form";
import { EmailVerified } from "./email-verified";
import { SignupTypes } from "./signup-type";

export const SignUpContainer = () => (
  <SignUpProvider>
    <SignupContents />
  </SignUpProvider>
);
export const SignupContents = () => {
  const { step } = useSignUpContext();

  const getContent = () => {
    switch (step) {
      case Steps.STEP_1:
      default:
        return <SignupTypes />;
      case Steps.STEP_2:
        return <SignupForm />;
      case Steps.STEP_3:
        return <CheckMail />;
      case Steps.STEP_4:
        return <VerifyEmailForm />;
      case Steps.STEP_5:
        return <EmailVerified />;
    }
  };
  return <div>{getContent()}</div>;
};
