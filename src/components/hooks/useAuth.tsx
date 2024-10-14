import { useState, useEffect } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosInstance from "@/api/interceptor";
import { onShowError } from "@/utilities";
import { environment } from "@/environments/environment";
import { toast } from "sonner";

// Define types for user and login response data
interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

interface LoginResponseData {
  user: User;
  token: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface SignupInput {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
interface ResendOtpResponse {
  success: boolean;
  message: string;
  data: {
    otp: number;
  };
}
interface OtpInput {
  email: string;
}
interface VerifyOtpInput {
  otp: string;
}

interface SignupResponseData {
  success: boolean;
  message: string;
  data: {
    token: string;
    opt: number;
  };
}

const BASE_URL = environment.DEV_URL;
const LOGIN_URL = `${BASE_URL}/login`;
const SIGNUP_URL = `${BASE_URL}/register`;
const RESEND_OTP_URL = `${BASE_URL}/resend-otp`;
const VERIFY_OTP_URL = `${BASE_URL}/verify-otp`;

// Save user details and token to localStorage
const saveAuthData = (data: LoginResponseData) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  window.location.href = "/main";
};

// Clear user details and token from localStorage
const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Retrieve token from localStorage
const getToken = (): string | null => {
  return localStorage.getItem("token");
};

// Retrieve user details from localStorage
export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Login hook using react-query's useMutation
export const useLogin = (): UseMutationResult<
  LoginResponseData,
  AxiosError, // The error type
  LoginInput // The input type
> => {
  return useMutation({
    mutationFn: async (inputBean: LoginInput) => {
      const response = await axiosInstance.post<{ data: LoginResponseData }>(
        LOGIN_URL,
        inputBean
      );
      return response.data.data;
    },
    onSuccess: (data: LoginResponseData) => {
      saveAuthData(data);
    },
    onError: onShowError,
  });
};
export const useSignup = ({
  cb,
}: {
  cb: () => void;
}): UseMutationResult<
  SignupResponseData,
  AxiosError, // The error type
  SignupInput // The input type
> => {
  return useMutation({
    mutationFn: async (signupBean: SignupInput) => {
      const response = await axiosInstance.post<SignupResponseData>(
        SIGNUP_URL,
        signupBean
      );
      return response.data;
    },
    onSuccess: (data: SignupResponseData) => {
      cb?.();
      const token = data?.data?.token;
      console.log(token);
      localStorage.setItem("token", token);
    },
    onError: onShowError,
  });
};
export const useVerifyOtp = ({
  onSuccess,
}: {
  onSuccess: () => void;
}): UseMutationResult<
  void,
  AxiosError, // The error type
  VerifyOtpInput // The input type
> => {
  return useMutation({
    mutationFn: async (verifyOtpBean: VerifyOtpInput) => {
      const response = await axiosInstance.post<void>(
        VERIFY_OTP_URL,
        verifyOtpBean
      );
      return response.data;
    },
    onSuccess,
    onError: onShowError,
  });
};
export const useResendOtp = (): UseMutationResult<
  ResendOtpResponse, // The response type
  AxiosError, // The error type
  OtpInput // The input type (only email)
> => {
  return useMutation({
    mutationFn: async (otpBean: OtpInput) => {
      const response = await axiosInstance.post<ResendOtpResponse>(
        RESEND_OTP_URL,
        otpBean
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: onShowError,
  });
};

// Logout hook
export const onLogout = () => {
  clearAuthData();
  window.location.href = "/login";
};

// Hook to get user details from localStorage
export const useUser = (): User | null => {
  const [user, setUser] = useState<User | null>(getUser());

  useEffect(() => {
    const storedUser = getUser();
    setUser(storedUser);
  }, []);

  return user;
};

// Hook to check if the user is authenticated
export const useIsAuthenticated = (): boolean => {
  return !!getToken() && !!getUser(); // Check if there's a token and user
};
