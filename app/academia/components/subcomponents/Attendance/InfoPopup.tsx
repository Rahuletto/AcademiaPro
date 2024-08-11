interface InfoPopupProps {
  onClose: () => void;
  text: string;
  warn?: boolean;
  bottom?: boolean;
}

const InfoPopup: React.FC<InfoPopupProps> = ({
  text,
  warn,
  bottom,
}) => (
  <div
    style={{ WebkitBackdropFilter: "blur(10px)" }}
    className={`absolute ${bottom ? "top-6" : "bottom-6"} md:-left-20 -left-28 z-10 w-48 animate-fadeIn rounded-xl bg-light-background-light bg-opacity-60 text-light-color shadow-lg backdrop-blur-sm dark:bg-dark-background-light dark:bg-opacity-70 dark:text-dark-color`}
  >
    <p className="p-3 px-4 text-xs font-medium opacity-100 md:text-sm dark:opacity-70">
      {text}
    </p>

    {warn && (
      <p className="rounded-b-xl bg-light-warn-background p-2 px-4 text-xs font-semibold text-light-warn-color dark:bg-dark-warn-background dark:text-dark-warn-color">
        Do <span className="underline font-bold">NOT</span> rely on it entirely.
      </p>
    )}
  </div>
);
export default InfoPopup;
