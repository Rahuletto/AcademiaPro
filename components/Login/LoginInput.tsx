import { type ChangeEventHandler, useState } from "react";
import { BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill } from "react-icons/bs";

export default function LoginInput({
  type,
  onChange,
  uid,
  error,
}: {
  type: "Password" | "UID";
  onChange: ChangeEventHandler<HTMLInputElement>;
  uid: string;
  error: number;
}) {
  const [visible, setVisible] = useState(false);

  if (type === "UID")
    return (
      <input
        value={uid}
        maxLength={20}
        className={`rounded-2xl rounded-bl-[4px] rounded-br-[4px] border-2 border-solid ${error === 1 ? "border-red" : error === 2 ? "border-practical" : "border-transparent"}`}
        onChange={onChange}
        placeholder="User ID"
      />
    );
  else
    return (
      <>
        <input
          type={visible ? "text" : "password"}
          value={uid}
          className={`rounded-2xl rounded-tl-[4px] rounded-tr-[4px] border-2 border-solid ${error === 1 ? "border-red" : error === 2 ? "border-practical" : "border-transparent"}`}
          onChange={onChange}
          placeholder="Passw*rd"
        />
        {uid && (
          <span
            className="absolute bottom-[14px] right-0 pr-4 text-right text-accent"
            onClick={() => setVisible((e) => !e)}
          >
            {visible ? <BsEyeSlashFill /> : <BsEyeFill />}
          </span>
        )}
      </>
    );
}
