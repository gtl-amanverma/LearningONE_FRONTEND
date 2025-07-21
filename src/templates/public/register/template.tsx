import { Input } from "@/components/input/ui";
import { Label } from "@/components/label/ui";
import { cn } from "@/utils/cn";
import React from "react";

type props = {
  onChangeUserName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userNameValue?: string;
  onChangeEmail?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue?: string;
  onChangePassword?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordValue?: string;
  onSubmit?: () => void;
};

export const RegisterTemplate = ({ ...props }: props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Demo Application
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Enter your details and register from here and then redirect to login
        page.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Full Name</Label>
          <Input
            id="email"
            placeholder="Enter your name"
            type="text"
            onChange={props.onChangeUserName}
            value={props.userNameValue}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="text">Email Address</Label>
          <Input
            id="email"
            placeholder="example@example.com"
            type="email"
            onChange={props.onChangeEmail}
            value={props.emailValue}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            onChange={props.onChangePassword}
            value={props.passwordValue}
          />
        </LabelInputContainer>

        <button
          onClick={props.onSubmit}
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
