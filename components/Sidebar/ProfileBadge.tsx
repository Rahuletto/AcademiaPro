import { useUser } from "@/provider/UserProvider";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import UserDialog from "./UserDialog";
import { createPortal } from "react-dom";

export default function ProfileBadge() {
  const { user } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogRoot, setDialogRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setDialogRoot(document.getElementById("dialog-root"));
  }, []);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <div className="flex items-center space-x-3 rounded-full bg-light-background-darker px-6 py-3 dark:bg-dark-background-darker">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 dark:bg-gray-700">
          <span className="text-xl font-semibold text-white">
            {user?.name?.[0]}
          </span>
        </div>
        <div className="flex-grow text-lg font-medium">{user?.name}</div>
        <button
          onClick={openDialog}
          className="rounded-full bg-light-accent px-6 py-3 dark:bg-dark-background-light"
        >
          <FaUser className="text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      {dialogRoot &&
        createPortal(
          <UserDialog isOpen={isDialogOpen} onClose={closeDialog} />,
          dialogRoot,
        )}
    </>
  );
}
