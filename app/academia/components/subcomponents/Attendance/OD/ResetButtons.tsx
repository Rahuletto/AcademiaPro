import React, { Dispatch, SetStateAction } from "react";

interface ODMLResetButtonsProps {
    isODML: boolean;
    setIsODML: Dispatch<SetStateAction<boolean>>;
    resetODML: () => void;
}

const ODMLResetButtons: React.FC<ODMLResetButtonsProps> = ({
    isODML,
    setIsODML,
    resetODML,
}) => {
    return (
        <div className="flex items-center gap-2">
            {isODML && (
                <button
                    onClick={() => {
                        resetODML();
                        setIsODML(false);
                    }}
                    className="reset-button flex animate-fadeIn items-center rounded-full border border-light-error-color bg-light-error-background px-2 py-1 text-light-error-color dark:border-dark-error-color dark:bg-dark-error-background dark:text-dark-error-color"
                >
                    Reset
                </button>
            )}
        </div>
    );
};

export default ODMLResetButtons;