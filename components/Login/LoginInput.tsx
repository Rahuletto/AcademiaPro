import { useState, type ChangeEventHandler } from "react";
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
        style={
          error === 1
            ? {
                border: "1px solid var(--red)",
                background: "#D133330e !important",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }
            : error === 2
            ? {
                border: "1px solid var(--practical)",
                background: "#45d1330e !important",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }
            : {
                border: "1px solid transparent",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }
        }
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
          style={
            error === 1
              ? {
                  border: "1px solid var(--red)",
                  background: "#D133330e !important",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }
              : error === 2
              ? {
                  border: "1px solid var(--practical)",
                  background: "#45d1330e !important",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }
              : {
                  border: "1px solid transparent",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }
          }
          onChange={onChange}
          placeholder="Passw*rd"
        />
        <span className="eyeIcon" onClick={() => setVisible((e) => !e)}>
          {visible ? <BsEyeSlashFill /> : <BsEyeFill />}
        </span>
      </>
    );
}
