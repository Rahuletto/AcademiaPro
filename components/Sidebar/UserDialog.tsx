import { useUser } from "@/provider/UserProvider";

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserDialog({ isOpen, onClose }: UserDialogProps) {
  const { user } = useUser();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-80 rounded-lg bg-dark-background-normal p-6 text-white shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <button onClick={onClose} className="text-xl">
            &times;
          </button>
        </div>
        <p className="mb-4 text-gray-400">{user?.id}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400">Year:</p>
            <p>{user?.year}</p>
          </div>
          <div>
            <p className="text-gray-400">Semester:</p>
            <p>{user?.semester}</p>
          </div>
          <div>
            <p className="text-gray-400">Classroom:</p>
            <p>{user?.classroom}</p>
          </div>
          <div>
            <p className="text-gray-400">Section:</p>
            <p>{user?.section}</p>
          </div>
          <div>
            <p className="text-gray-400">Combo:</p>
            <p>{user?.combo || "?"}</p>
          </div>
          <div>
            <p className="text-gray-400">Batch:</p>
            <p>{user?.batch}</p>
          </div>
          <div>
            <p className="text-gray-400">Program:</p>
            <p>{user?.program}</p>
          </div>
          <div>
            <p className="text-gray-400">Department:</p>
            <p>{user?.dept}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-red-500 py-2 font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
