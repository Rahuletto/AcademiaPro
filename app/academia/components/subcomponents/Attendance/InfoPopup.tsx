interface InfoPopupProps {
  onClose: () => void;
  text: string;
  warn?:boolean;
  bottom?:boolean;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ onClose, text, warn, bottom }) => (
  <div style={{ WebkitBackdropFilter: "blur(10px)" }} className={`absolute ${bottom ? "top-6" : "bottom-6"} -left-20 z-10 w-48 animate-fadeIn backdrop-blur-sm rounded-xl bg-opacity-60 dark:bg-opacity-70 text-light-color shadow-lg dark:bg-dark-background-light bg-light-background-light dark:text-dark-color`}>
    <p className="p-3 px-4 text-xs md:text-sm opacity-100 dark:opacity-70 font-medium">
      {text}
    </p>

    {warn && <p className="rounded-b-xl p-2 px-4 bg-light-warn-background dark:bg-dark-warn-background text-light-warn-color dark:text-dark-warn-color text-xs font-semibold">Do not rely on it entirely.</p>}
  </div>
);
export default InfoPopup;
