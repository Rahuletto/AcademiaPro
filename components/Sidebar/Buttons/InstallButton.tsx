import { GrInstallOption } from "react-icons/gr";

export default function InstallButton({
  onClick,
  ref,
  anchor,
}: {
  ref: any;
  onClick: () => void;
  anchor?: boolean;
}) {
  return (
    <button
      ref={ref}
      type="button"
      name="Open navbar"
      className={`fixed hidden items-center justify-start gap-3 lg:bottom-36 bottom-[5.14rem] transition-all duration-100 rounded-full p-3 ${anchor ? "lg:left-8 right-[2.1rem]" : "lg:right-7"} bg-light-background-light dark:bg-dark-background-light`}
      onClick={onClick}
    >
      <GrInstallOption
        className={`text-xl text-light-color transition-all duration-75 dark:text-dark-color`}
      />
      {anchor && <p className="hidden lg:block m-0 font-semibold">Install</p>}
    </button>
  );
}
