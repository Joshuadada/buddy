import { AxiosError } from "axios";
import { toast } from "sonner";
interface ErrorResponse {
  message: string;
  errors?: {
    [key: string]: string[];
  };
}

export const onShowError = (error: AxiosError<unknown>) => {
  const responseData = error?.response?.data as ErrorResponse;

  if (responseData?.message) {
    toast.error(responseData?.message);
  } else if (responseData?.errors) {
    // Iterate through field errors and display them
    Object.entries(responseData.errors).forEach(([field, messages]) => {
      messages.forEach((message) => toast.error(`${field}: ${message}`));
    });
  } else {
    toast.error("An unknown error occurred.");
  }

  console.log("error?.response", error?.response);
};
