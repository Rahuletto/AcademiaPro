import { Dispatch, SetStateAction } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export default function OpenButton({
    mobile,
    isOpen,
    setIsOpen,
  }: {
    mobile?: boolean;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }) {
    return mobile ? (
      <button
        type="button"
        name="Open navbar"
        className={`fixed bottom-5 rounded-full p-3 lg:hidden ${isOpen ? "right-5 bg-light-error-background dark:bg-dark-error-background" : "right-5 bg-transparent"}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <FaAnglesLeft className="text-xl text-light-error-color dark:text-dark-error-color" />
        ) : (
          <FaAnglesRight className="text-xl text-light-color dark:text-dark-color" />
        )}
      </button>
    ) : (
      <button
        type="button"
        name="Open navbar"
        className={`fixed bottom-20 hidden rounded-full p-3 lg:block ${isOpen ? "right-5 bg-light-error-background dark:bg-dark-error-background" : "right-7 bg-transparent"}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <FaAnglesLeft className="text-xl text-light-error-color dark:text-dark-error-color" />
        ) : (
          <FaAnglesRight className="text-xl text-light-color dark:text-dark-color" />
        )}
      </button>
    );
  }
  