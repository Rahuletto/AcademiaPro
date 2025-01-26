import type { UserInfo } from "@/types/User";
import { FaXmark } from "react-icons/fa6";

interface UserDialogProps {
	user: UserInfo;
	isOpen: boolean;
	onClose: () => void;
	logout: () => void;
}

export default function UserDialog({
	user,
	isOpen,
	onClose,
	logout,
}: UserDialogProps) {
	if (!isOpen) return null;

	return (
		<div
			role="button"
			tabIndex={0}
			className="fixed inset-0 z-50 flex animate-fastfade items-center justify-center bg-black/30 backdrop-blur-xs transition duration-150"
			onKeyDown={(e) => {
				if (e.key === "Escape") onClose();
			}}
			onClick={onClose}
		>
			<div

				role="button"
				tabIndex={-1}
				onKeyDown={() => {}}
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="w-96 cursor-default rounded-[36px] bg-light-background-normal p-4 text-white shadow-lg dark:bg-dark-background-normal"
			>
				<div className="p-2">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-semibold capitalize text-light-color dark:text-dark-color">
							{user?.name?.toLowerCase()}
						</h2>
						<div className="flex flex-row-reverse gap-3 items-center justify-center">
							<button
								title="Close"
								type="button"
								aria-label="Close"
								onClick={onClose}
								className="rounded-full border-2 border-light-error-color bg-light-error-background p-2 text-lg text-light-error-color dark:border-dark-error-color dark:bg-dark-error-background dark:text-dark-error-color"
							>
								<FaXmark />
							</button>
						</div>
					</div>
					<p className="mb-6 text-lg font-medium text-light-accent opacity-80 dark:text-dark-accent">
						{user?.regNumber}
					</p>
					<div className="grid grid-cols-2 gap-4 text-light-color dark:text-dark-color">
						<div>
							<p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:opacity-30">
								Year:
							</p>
							<p className="text-lg font-semibold">{user?.year}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:opacity-30">
								Semester:
							</p>
							<p className="text-lg font-semibold">{user?.semester}</p>
						</div>
						{/* <div>
              <p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:opacity-30">
                Classroom:
              </p>
              <p className="text-lg font-semibold">{user?.classRoom}</p>
            </div> */}
						<div>
							<p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:opacity-30">
								Section:
							</p>
							<p className="text-lg font-semibold">{user?.section}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:opacity-30">
								Batch:
							</p>
							<p className="text-lg font-semibold">{user?.batch}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:opacity-30">
								Program:
							</p>
							<p className="text-lg font-semibold">{user?.program}</p>
						</div>
					</div>
					<div className="my-4 text-light-color dark:text-dark-color">
						<p className="text-sm font-medium text-light-color opacity-50 dark:text-dark-color dark:dark:opacity-30">
							Department:
						</p>
						<p className="text-md font-medium">{user?.department}</p>
					</div>
				</div>
				<button
					type="button"
					onClick={logout}
					className="mt-6 w-full rounded-full bg-light-error-color py-2 font-semibold text-light-error-background dark:bg-dark-error-color dark:text-dark-error-background"
				>
					Logout
				</button>
			</div>
		</div>
	);
}
