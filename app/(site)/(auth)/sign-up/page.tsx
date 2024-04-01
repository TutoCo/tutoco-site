import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutee Sign-Up",
  description: "Sign up for tutoring!",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
