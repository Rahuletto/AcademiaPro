import { useUser } from "@/provider/UserProvider";
import { useState, useEffect } from "react";
import { FaUser, FaBug } from "react-icons/fa";
import UserDialog from "./UserDialog";
import { createPortal } from "react-dom";
import { RiLoader3Fill } from "react-icons/ri";
import { useTransitionRouter as useRouter } from "next-view-transitions";
import { BiError } from "react-icons/bi";
import { profileColor } from "@/utils/ProfileColor";
import { elevatedUsers } from "@/users";

export default function ProfileBadge({ className }: {className?: string}) {
  const router = useRouter();
  const { user, isLoading, error } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogRoot, setDialogRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setDialogRoot(document.getElementById("dialog-root"));

    return () => {
      setDialogRoot(null);
    };
  }, []);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const logout = () => {
    const log = confirm("Are you sure to logout?");
    if (log) {
      router.push("/auth/logout");
    } else return;
  };

  return error ? (
    <div className="flex h-12 w-full animate-fadeIn flex-row items-center justify-center gap-2 rounded-full bg-light-error-background text-light-error-color lg:w-[82%] dark:bg-dark-error-background dark:text-dark-error-color">
      <BiError className="text-xl" />
      <h1 className="text-md font-medium text-light-error-color dark:text-dark-error-color">
        Error.
      </h1>
    </div>
  ) : isLoading ? (
    <div className="flex h-12 w-full animate-fadeIn flex-col items-center justify-center rounded-full bg-light-background-dark p-4 text-light-accent lg:w-[82%] dark:bg-dark-background-dark dark:text-dark-accent">
      <RiLoader3Fill
        title="loading"
        className="animate-spin text-5xl font-medium text-light-accent dark:text-dark-accent"
      />
    </div>
  ) : (
    <>
      <div
        aria-haspopup="dialog"
        role="button"
        tabIndex={0}
        onKeyDown={(key) => {
          if (key.key === "p") openDialog();
        }}
        onClick={openDialog}
        className={className + " duration-100 transition flex w-full items-center space-x-3 rounded-full bg-light-background-dark p-1 lg:w-[82%] dark:bg-dark-background-darker"}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-dark-background-darker`}
          style={{ backgroundColor: profileColor(user?.reg as string) }}
        >
          <span className="text-lg font-semibold">
            {elevatedUsers.includes(user?.reg as string) ? (
              <FaBug className="text-xl" />
            ) : (
              <FaUser />
            )}
          </span>
        </div>
        <span className="text-md line-clamp-1 flex-grow text-ellipsis font-medium capitalize text-light-accent dark:text-dark-color">
          {user?.name.toLowerCase()}
        </span>
      </div>
      {dialogRoot &&
        createPortal(
          <UserDialog
            logout={logout}
            isOpen={isDialogOpen}
            onClose={closeDialog}
          />,
          dialogRoot,
        )}
    </>
  );
}
