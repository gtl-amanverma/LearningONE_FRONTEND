import { useAuth } from "@/context/auth_context";
import { RegisterTemplate } from "@/templates/public/register/template";
import React, { useCallback, useState } from "react";

const RegisterLayout = () => {
  const { register } = useAuth();
  const [userName, setUserName] = useState("");
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
      if (method === "username") setUserName(event.target.value);
      if (method === "email") setEmail(event.target.value);
      if (method === "password") setPassword(event.target.value);
    },
    [setEmail, setPassword]
  );
  return (
    <div>
      <RegisterTemplate
        onChangeUserName={(event) =>
          onChangeFunction({ event: event, method: "username" })
        }
        userNameValue={userName}
        onChangeEmail={(event) =>
          onChangeFunction({ event: event, method: "email" })
        }
        emailValue={email}
        onChangePassword={(event) =>
          onChangeFunction({ event: event, method: "password" })
        }
        passwordValue={password}
        onSubmit={() =>
          register(
            userName,
            email,
            password,
            "admin",
            new Date().toDateString()
          )
        }
      />
    </div>
  );
};

export default RegisterLayout;
