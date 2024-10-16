import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSignUpContext } from "./signup-context";
import { Steps } from "@/constants";
import { useResendOtp, useVerifyOtp } from "@/components/hooks/useAuth";

export const VerifyEmailForm = () => {
  const { setStep, email } = useSignUpContext();
  const { mutate, isPending } = useResendOtp();
  const [value, setValue] = useState("");

  const { mutate: verificationMutation, isPending: isVerificationPending } =
    useVerifyOtp({
      onSuccess: () => {
        setStep(Steps.STEP_5);
      },
    });
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-32 pb-8">
      <div className="bg-white border border-[#DDE2E4] shadow-lg max-w-[30rem] mx-auto rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
        <h4 className="text-[#1D1D18] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          Verify your email
        </h4>

        <p className="text-[#5B6871] text-[0.6rem] md:text-xs lg:text-sm mt-2 md:mt-3">
          A four digit OTP code has been sent to your email{" "}
          <span className="text-[#FF8600]">{email}</span>
        </p>

        <div className="mt-4 md:mt-5 lg:mt-6">
          <InputOTP
            maxLength={4}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="mt-4 md:mt-5 lg:mt-6">
          <Button
            disabled={isPending || isVerificationPending}
            onClick={() => verificationMutation({ otp: value })}
            type="button"
          >
            {isVerificationPending ? "Loading..." : "Confirm code"}
          </Button>
        </div>

        <p className="text-[#5B6871] text-xs md:text-sm mt-2 sm:mt-3 md:mt-5 lg:mt-7 xl:mt-8">
          Didn’t get the mail?{" "}
          <button
            onClick={() => mutate({ email })}
            disabled={isPending || isVerificationPending}
            className="text-[#FF8600] cursor-pointer"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};
