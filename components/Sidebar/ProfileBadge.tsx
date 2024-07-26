import { useUser } from "@/provider/UserProvider";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function ProfileBadge() {
  const { user, isLoading, error: userError } = useUser();
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex items-center space-x-3 rounded-full bg-light-background-darker px-6 py-3 dark:bg-dark-background-darker">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 dark:bg-gray-700">
        <span className="text-xl font-semibold text-white">S</span>
      </div>
      <div className="flex-grow text-lg font-medium">
        {user?.name}
      </div>
      <div className="rounded-full bg-light-accent px-6 py-3 dark:bg-dark-background-light">
        <FaUser className="text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
}
