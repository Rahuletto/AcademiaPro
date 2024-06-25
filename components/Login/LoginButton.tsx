import type { MouseEventHandler } from "react";

export default function LoginButton({
  error,
  onClick,
}: {
  error: number;
  onClick: MouseEventHandler;
}) {
  return error === -1 ? (
    <button
      name="login"
      type="submit"
      style={{
        border: "1px solid var(--yellow)",
        backgroundColor: "#ffca630e !important",
        color: "var(--yellow) !important",
      }}
      disabled
    >
      Logging in
    </button>
  ) : (
    <button title="Login" name="login" onClick={onClick}>
      Login
    </button>
  );
}
