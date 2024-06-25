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
      className="bg-yellow-light cursor-not-allowed border border-yellow text-yellow opacity-70"
      disabled
    >
      Logging in
    </button>
  ) : (
    <button
      title="Login"
      name="login"
      onClick={onClick}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Login
    </button>
  );
}
