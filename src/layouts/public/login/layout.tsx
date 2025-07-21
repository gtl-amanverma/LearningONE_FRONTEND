import { useAuth } from "@/context/auth_context";
import { LoginTemplate } from "@/templates/public/login/template";
import React, { useCallback, useState } from "react";

const LoginLayout = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeFunction = useCallback(
    ({
      event,
      method,
    }: {
      event: React.ChangeEvent<HTMLInputElement>;
      method: string;
    }) => {
      if (!method) return;
      if (method === "email") setEmail(event.target.value);
      if (method === "password") setPassword(event.target.value);
    },
    [setEmail, setPassword]
  );

  const onSubmitFunction = useCallback(() => {
    login(email, password);
  }, [email, login, password]);

  return (
    <div>
      <LoginTemplate
        onChangeEmail={(event) =>
          onChangeFunction({ event: event, method: "email" })
        }
        emailValue={email}
        onChangePassword={(event) =>
          onChangeFunction({ event: event, method: "password" })
        }
        passwordValue={password}
        onSubmit={onSubmitFunction}
      />
    </div>
  );
};

export default LoginLayout;
