import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to be a Tutor",
  description: "Apply to be a tutor for TutoCo!",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
