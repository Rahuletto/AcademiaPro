interface InfoPopupProps {
  onClose: () => void;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ onClose }) => (
  <div className="absolute bottom-full right-0 z-10 w-48 animate-fadeIn rounded-lg p-3 text-light-color shadow-lg dark:bg-dark-background-light dark:text-dark-color">
    <p className="text-xs md:text-sm">
      We are using the timetable to predict attedance you will have if you plan
      on bunking for days. Remember this is only a prediction
    </p>
  </div>
);
export default InfoPopup;
