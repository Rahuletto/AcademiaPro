import { useUser } from "@/provider/UserProvider";
import { useState, useEffect } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { createPortal } from "react-dom";
import { RiLoader3Fill } from "react-icons/ri";
import { useTransitionRouter as useRouter } from "next-view-transitions";
import { profileColor } from "@/utils/ProfileColor";
import { elevatedUsers } from "@/misc/users";
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import dynamic from "next/dynamic";

const UserDialog = dynamic(() => import("./UserDialog").then(a => a.default), { ssr: false });

export default function ProfileBadge({ className }: { className?: string }) {
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
    <button
      onClick={() => router.push("/auth/logout")}
      className="flex h-12 w-full animate-fadeIn flex-row items-center justify-center gap-2 rounded-full bg-light-error-background text-light-error-color lg:w-[82%] dark:bg-dark-error-background dark:text-dark-error-color"
    >
      <LuLogOut className="text-xl" />
      <h1 className="text-md font-medium text-light-error-color dark:text-dark-error-color">
        Logout.
      </h1>
    </button>
  ) : isLoading ? (
    <div className="flex h-12 w-full animate-fadeIn flex-col items-center justify-center rounded-full bg-light-background-dark p-4 text-light-accent lg:w-[82%] dark:bg-dark-background-dark dark:text-dark-accent">
      <RiLoader3Fill
        title="loading"
        className="animate-spin text-5xl font-medium text-light-accent dark:text-dark-accent"
      />
    </div>
  ) : user ? (
    <>
      <div
        aria-haspopup="dialog"
        role="button"
        tabIndex={0}
        onKeyDown={(key) => {
          if (key.key === "p") openDialog();
        }}
        onClick={openDialog}
        className={
          className +
          " flex w-full items-center space-x-3 rounded-full bg-light-background-dark p-1 transition duration-100 lg:w-[82%] dark:bg-dark-background-darker"
        }
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-dark-background-darker`}
          style={{ backgroundColor: profileColor(user?.reg as string) }}
        >
          <span className="text-lg font-semibold">
            {elevatedUsers.includes(user?.reg as string) ? (
              <Image
                className="mt-1"
                src="/images/batman.svg"
                alt="Batman"
                width={40}
                height={40}
                style={{ width: 'auto', height: '40px' }}
              />
            ) : (
              <FaUser />
            )}
          </span>
        </div>
        <span className="text-md line-clamp-1 flex-grow text-ellipsis font-medium capitalize text-light-accent dark:text-dark-color">
          {user?.name?.toLowerCase()}
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
  ) : (
    <>
      <button
      onClick={() => router.push("/auth/login")}
      className="flex h-12 w-full animate-fadeIn flex-row items-center justify-center gap-2 rounded-full bg-light-success-background text-light-success-color lg:w-[82%] dark:bg-dark-success-background dark:text-dark-success-color"
    >
      <FaUserLock className="text-xl" />
      <h1 className="text-md font-medium text-light-success-color dark:text-dark-success-color">
        Login.
      </h1>
    </button>
    </>
  );
}
