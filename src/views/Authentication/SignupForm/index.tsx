"use client";

import Form from "@/src/components/Form";
import Logo from "@/src/components/Logo";
import { Button, Input, Spacer } from "@nextui-org/react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface SignupFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const router = useRouter();
  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isShowPassword, setIsShowPassword] = useState<Boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState<Boolean>(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const handleSignup = () => {
    if (
      signupFormData.name === "" ||
      signupFormData.username === "" ||
      signupFormData.email === "" ||
      signupFormData.password === "" ||
      signupFormData.confirmPassword === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    if (signupFormData.password !== signupFormData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Call API to signup

    toast.success("Signup successful");
    router.push("/signin");
  };

  return (
    <Form className="w-[24rem] sm:w-[28rem] bg-white shadow-lg p-8">
      <Logo className="w-52" />

      <h1 className="text-4xl font-bold">Sign Up</h1>

      <Input
        radius="sm"
        label="Name"
        type="text"
        isRequired
        onChange={(e) =>
          setSignupFormData({ ...signupFormData, name: e.target.value })
        }
      />

      <Input
        radius="sm"
        label="Username"
        type="text"
        isRequired
        onChange={(e) =>
          setSignupFormData({ ...signupFormData, username: e.target.value })
        }
      />

      <Input
        radius="sm"
        label="Email"
        type="email"
        isRequired
        onChange={(e) =>
          setSignupFormData({ ...signupFormData, email: e.target.value })
        }
      />

      <Input
        radius="sm"
        label="Password"
        type={isShowPassword ? "text" : "password"}
        isRequired
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleShowPassword}
            aria-label="toggle password visibility">
            {isShowPassword ? (
              <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <Eye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        onChange={(e) =>
          setSignupFormData({ ...signupFormData, password: e.target.value })
        }
      />

      <Input
        radius="sm"
        label="Confirmp password"
        type={isShowConfirmPassword ? "text" : "password"}
        isRequired
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleShowConfirmPassword}
            aria-label="toggle password visibility">
            {isShowConfirmPassword ? (
              <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <Eye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        onChange={(e) =>
          setSignupFormData({
            ...signupFormData,
            confirmPassword: e.target.value,
          })
        }
      />

      <Spacer />

      <Button
        radius="sm"
        fullWidth
        size="lg"
        className="text-xl font-bold text-white bg-primary-500"
        onClick={handleSignup}>
        Continue
      </Button>

      <div className="w-full flex gap-2 items-center justify-center">
        <span>Already have an account?</span>
        <Link href="/signin" className="text-blue-400 hover:underline">
          Sign in here
        </Link>
      </div>
    </Form>
  );
}
